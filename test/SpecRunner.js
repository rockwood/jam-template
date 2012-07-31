define(["test/spec/main_spec"], function() {
  var SpecRunner;
  SpecRunner = function() {
    var currentWindowOnload, execJasmine, htmlReporter, jasmineEnv;
    execJasmine = function() {
      return jasmineEnv.execute();
    };
    jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
    currentWindowOnload = window.onload;
    return window.onload = function() {
      if (currentWindowOnload) {
        currentWindowOnload();
      }
      return execJasmine();
    };
  };
  return SpecRunner;
});