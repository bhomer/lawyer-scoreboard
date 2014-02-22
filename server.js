var Sequelize = require('sequelize')
  , sequelize = new Sequelize('lawyer_scoreboardDB', 'root', null, {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
    })

var Users = sequelize.define("Users", {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    record: Sequelize.STRING,
//    hourly_rate: Sequelize.STRING,
    description: Sequelize.TEXT
});
                                       
sequelize.sync();

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })