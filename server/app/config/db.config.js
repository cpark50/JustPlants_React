module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "cindy1234",
  DB: "pa124",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
