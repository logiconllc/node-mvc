let packages = {} 
packages.express = require('express');
packages.path = require("path");
packages.cors = require('cors');

// ********************************************************************* 

packages.app = require('express')();
packages.jwt = require("jsonwebtoken");
packages.moment = require('moment');   
packages.bcrypt = require("bcryptjs");


module.exports = packages