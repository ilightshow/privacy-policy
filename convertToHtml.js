var fs = require("fs")
var showdown  = require('showdown')
var moment = require('moment')

var converter = new showdown.Converter()
var text      = fs.readFileSync("policy.md").toString().replace("{{date}}", moment().format('LL'))

var html      = converter.makeHtml(text);

var templateHtml = fs.readFileSync("template.html").toString()
var html = templateHtml.replace("{{body}}", html)

fs.writeFileSync("index.html", html)