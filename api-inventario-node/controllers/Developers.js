'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.searchInventory = function searchInventory (req, res, next, searchString, skip, limit) {
  Developers.searchInventory(searchString, skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
