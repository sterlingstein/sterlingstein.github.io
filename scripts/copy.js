'user strict'

const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths');

fs.copy(paths.appBuild, paths.appRoot, (err) => {
  if (err) return console.error(err)
  console.log('success!')
});
