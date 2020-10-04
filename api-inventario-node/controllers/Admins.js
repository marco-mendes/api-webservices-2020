'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addInventory = function addInventory (req, res, next, body) {
  Admins.addInventory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
