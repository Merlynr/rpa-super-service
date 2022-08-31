"use strict";

const Service = require("egg").Service;

class ViewService extends Service {
  getItems() {
    return [
      { title: "foo", id: 1 },
      { title: "bar", id: 2 },
    ];
  }
}

module.exports = ViewService;
