var faker = require('faker');
module.exports = function() {
    var data = { user: [] }
    // Create 1000 users
    for (var i = 1; i <= 100; i++) {
      var randomCard = faker.helpers.userCard(); // userCard con muchas propiedades
      randomCard.id = i;
      randomCard.usuario="tihomir"+i;
      randomCard.pass="dembow"+i;
      data.user.push(randomCard)
    }
    return data;
  }