/**
 * Task: template
 * Description: copies a home page html file for the project dist directory
 * Dependencies: grunt, fs
 * Contributor: @searls
 *
 * options:
 *  template - [required] path to the homepage template file
 *  format - [optional] type of the template (if not provided, the file extension will be used)
 *
 * Supported formats:
 *  html - template will merely be copied
 *  underscore (aliases: "us", "jst") - underscore templating
 *  handlebar (aliases: "hb", "handlebars") - handlebars templating
 *
 * When the template is processed, it will be passed the grunt configuration object,
 *   which contains lots of useful goodies.
 */

module.exports = function(grunt) {
  var fs = require('fs'), _ = grunt.utils._;

  var extensionOf = function(fileName) {
    return _(fileName.match(/[^.]*$/)).last();
  };

  grunt.registerMultiTask('template', 'generates an html file from an underscore or handelbars template', function(){
    if (!this.data) { return false; }

    var template = this.data.src,
        destination = this.data.dest || 'dist',
        targetConfig = this.data,
        format = (this.data.format || extensionOf(template) || "html").toLowerCase();
      
    if(format === "html") {
      grunt.file.copy(template, destination);
    } else {
      var source = grunt.file.read(template),
          html;

      if(_(["underscore", "us", "jst"]).include(format)) {
        html = _(source).template()(this.data.variables);
      } else if(_(["handlebar", "hb", "handlebars"]).include(format)) {
        html = require("handlebars").compile(source)(this.data.variables);
      }

      grunt.file.write(destination, html);
    }

    grunt.log.writeln("HTML written to '"+destination+"'");
  });
};