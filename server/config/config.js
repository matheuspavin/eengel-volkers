var config = {};

config.database = process.env.DATABASE_ADDRESS || 'engel&volkers.sqlite';
config.migration = '/engel&volkers.sqlite';

module.exports = config;