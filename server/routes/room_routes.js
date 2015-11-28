var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  router.get('/join_room', function(req, res) {
    res.json('Hello Andrew');
  });
}
