# OAuth Comparative Analysis

## Microsoft Azure OAuth

### Research Conducted By: Jacob Swens and Calvin Hill

### Overall Score and Comments
#### Score (Out of 10): 9
#### General Comments
Microsoft provided good documentation and examples.

#### Pros
* Documentation
* Step by step instructions

#### Cons
* sheer length of oauth code

### Ratings and Reviews
#### Documentation
It was well written, lots of examples.

#### Ramp-Up Projections
Pretty quick, there were good instructions. I'd estimate... 2 hours.

#### Community Support and Adoption levels
Probably quite a bit, it's Microsoft


### Links and Resources
* [framework](http://xyz.com)
* [docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
* [examples/tutorials](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)

### Code Demos
* [live/running application(Web Server)](https://lab-11-web-server.herokuapp.com/)
* [live/running application(Auth Server)](https://lab-11-auth-server.herokuapp.com/)
* [code repository(Web Server)](https://github.com/Clownvin-cr-deltav-401d4/lab-11-web-server)
* [code repository(Auth Server)](https://github.com/Clownvin-cr-deltav-401d4/lab-11-auth-server)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start` in Web Server
* Endpoint: `/`
  * Returns a page with links to authorize yoself
* `npm start` in Auth Server
* Endpoint: `/oauth`
  * Oauth for Google
* Endpoint: `/oauth/microsoft`
  * Oauth for Microsoft
