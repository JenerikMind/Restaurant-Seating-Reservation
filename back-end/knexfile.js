/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://nyrdxoee:t-ItHjYoaO4wWLogIQhRzrfr-OL9DivG@castor.db.elephantsql.com/nyrdxoee",
  DATABASE_URL_DEVELOPMENT = "postgres://dcnczavs:M56-9TPPewVTESadYnhSkM1F_m_yGwAc@chunee.db.elephantsql.com/dcnczavs",
  DATABASE_URL_TEST = "postgres://jqpprqkb:RUZM3-WhH_AgXFU_zUgCqqPVzYlqF6Du@castor.db.elephantsql.com/jqpprqkb",
  DATABASE_URL_PREVIEW = "postgres://vdhzansf:fTFtV1s0V_4nrLqXi-he9TQU1WVQcD9C@castor.db.elephantsql.com/vdhzansf",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
