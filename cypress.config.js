const { defineConfig } = require("cypress");
const test_env = process.env.NODE_ENV || 'BOSS';
const env = require(`./${test_env}.json`);
// const GLOBAL_OBJECT = {};
module.exports = defineConfig({
  e2e: {
    viewportWidth : 1550,
    viewportHeight : 900,
    baseUrl : env.baseUrl,
    setupNodeEvents(on, config) {
      // on('task', {
      //   // deconstruct the individual properties
      //   set({ key, value }) {
          
      //     GLOBAL_OBJECT[key] = value;
      //     return GLOBAL_OBJECT[key];
      //   },
      //   get(key) {
      //     return GLOBAL_OBJECT[key];
      //   },
      //   remove(key) {
      //     return delete GLOBAL_OBJECT[key];
      //   },
      // })
    }
  },
  env
});