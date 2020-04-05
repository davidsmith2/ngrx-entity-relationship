process.on('infrastructure_error', error => {
    console.error('infrastructure_error', error);
});

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [{pattern: 'src/**/*.ts'}, {pattern: 'test/**/*.ts'}],
        preprocessors: {
            '**/*.ts': ['karma-typescript'],
        },
        client: {
            clearContext: false,
        },
        reporters: ['dots', 'junit', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        browsers: ['ChromeHeadless'],
        karmaTypescriptConfig: {
            tsconfig: 'tsconfig.spec.json',
        },
        coverageReporter: {
            type: 'html',
            dir: './test-reports/coverage',
        },
        junitReporter: {
            outputDir: require('path').join(__dirname, './test-reports'),
            outputFile: 'specs-junit.xml',
            useBrowserName: false,
        },
    });
};