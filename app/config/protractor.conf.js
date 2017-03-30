exports.config = {

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    noColor: false,

  //  ignoreUncaughtExceptions: true, //Essentially a catchall for chromedriver/selenium/protractor exceptions
    
    seleniumAddress: process.env.SELENIUM_URL,
    specs: process.env.FEATURE_FILES, 

    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    capabilities: {
        browserName: 'chrome',
        //shardTestFiles: true,
        //maxInstances: 1
    },

    cucumberOpts: {
        require: process.env.STEP_DEFINITIONS,
        //tags: process.env.CUKE_TAGS
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};


