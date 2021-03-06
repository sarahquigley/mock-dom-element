module.exports = function(config){
  config.set({

    basePath : './',

    // List of files/patterns to load in the browser
    files : [
      // bower:js
      'src/bower_components/lodash/lodash.js',
      // endbower
      'build/main.js',
      'src/**/*.spec.coffee',
    ],

    // Enable watching files and executing the tests whenever one of the above files changes
    autoWatch : true,

    frameworks: [
      'jasmine',
      'jasmine-matchers',
    ],

    // List of browsers to launch and capture
    browsers : [
      'Chrome',
      'PhantomJS',
    ],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-jasmine-html-reporter',
      'karma-mocha-reporter',
      'karma-coffee-preprocessor',
      'karma-ng-html2js-preprocessor',
      'karma-coverage',
      'karma-coveralls',
    ],

    // List of reporters to use
    reporters: [
      'html',
      'mocha',
      'coverage',
    ],

    // Preprocessors to use
    preprocessors: {
      'src/**/*.spec.coffee': 'coffee',
      'build/main.js': 'coverage',
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    // Coffeescript preprocessor config
    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false,
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    }

  });

  if (process.env.TRAVIS) {
    config.reporters.push('coveralls');
  }
};
