const google = require('./google');
const microsoft = require('./microsoft');

const providers = {
  google,
  microsoft
};

module.exports = async (req) => {
  let providerName = req.params.provider || 'google';
  let provider = providers[providerName];

  if (!provider) throw `Provider ${providerName} not found`;

  return await provider(req);
}
