exports = module.exports = {
  'client': require('./xom/client'),
  'challenge': require('./xom/challenge'),
  'otp/verify': require('./xom/otp/verify'),
  'oob/verify': require('./xom/oob/verify'),
  'ds/credentials': require('./xom/ds/credentials'),
  'id/map': require('./xom/id/map')
};

exports.load = function(id) {
  try {
    return require('./xom/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
