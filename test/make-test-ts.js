'use strict';

var fs = require('fs');
var path = require('path');

var examplesFolder = '../node_modules/swagger-validator/examples/v2.0/json/';
examplesFolder = path.join(__dirname, examplesFolder);

var ts = '/// <reference path="../swagger.d.ts"/>\n\n';

fs.readdirSync(examplesFolder)
  .forEach(function (exampleFile, i) {
    var exampleFilePath = path.join(examplesFolder, exampleFile);

    if (fs.statSync(exampleFilePath).isFile()) {
      ts += 'var spec' + i + ' : Swagger.Spec = ' +
        fs.readFileSync(exampleFilePath).toString() + ';\n\n';
    }
  });

fs.writeFileSync(path.join(__dirname, 'test.ts'), ts);