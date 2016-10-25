"use strict";

class Puppy {
  constructor(name, age){
    this.name = name;
    this.age = age || 0;
  }
}

var puppiesList = ['tinkerbell', 'zippy', 'dasher']

module.exports = {
    Puppy: Puppy,
    puppiesList: puppiesList
}
