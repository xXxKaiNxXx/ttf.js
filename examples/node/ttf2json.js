#!/usr/bin/env node
var fs = require('fs'),
    ttfjs = require('../../ttf');

if (process.argv.length > 2) {
  ttf = ttfjs.TrueType.createFromBuffer(fs.readFileSync(process.argv[2]));
  console.log(JSON.stringify(ttf, null, 2));
}

