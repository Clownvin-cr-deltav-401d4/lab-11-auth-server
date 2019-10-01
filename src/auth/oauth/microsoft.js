'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js');

const API = 'http://localhost:3000';
const GTS = 'https://login.microsoftonline.com/common/oauth2/v2.0/token';
const SERVICE = 'https://graph.microsoft.com/v1.0/me';

let authorize = (request) => {
  
  console.log('(1)', request.query.code);
  
  /*
POST /{tenant}/oauth2/v2.0/token HTTP/1.1
Host: https://login.microsoftonline.com
Content-Type: application/x-www-form-urlencoded

client_id=6731de76-14a6-49ae-97bc-6eba6914391e
&scope=https%3A%2F%2Fgraph.microsoft.com%2Fuser.read
&code=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq3n8b2JRLk4OxVXr...
&redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
&grant_type=authorization_code
&client_secret=JqQX2PNo9bpM0uEihUPzyrh
  */
  
  return superagent.post(GTS)
    .type('form')
    .send({
      code: request.query.code,
      client_id: process.env.MICROSOFT_CLIENT_ID,
      client_secret: process.env.MICROSOFT_CLIENT_SECRET,
      redirect_uri: `${API}/oauth/microsoft`,
      grant_type: 'authorization_code',
      scope: 'https://graph.microsoft.com/.default'
    })
    .then( response => {
      let access_token = response.body.access_token;
      console.log('(2)', access_token);
      return access_token;
    })
    .then(token => {
      console.log(SERVICE, token);
      return superagent.get(SERVICE)
        .set('Authorization', `Bearer ${token}`)
        .then( response => {
          let user = response.body;
          console.log('(3)', user);
          return user;
        });
    })
    .then( oauthUser => {
      console.log('(4) Create Our Account');
      console.log(oauthUser);
      return Users.createFromOauth(oauthUser.userPrincipalName);
    })
    .then( actualUser => {
      return actualUser.generateToken(); 
    })
    .catch( error => error );
};


module.exports = authorize;