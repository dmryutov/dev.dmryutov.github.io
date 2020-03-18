/* eslint-disable */
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: [
        '<rootDir>/tests/**.(js|jsx|ts|tsx)',
        '**/?(*.)+(spec|test).(js|jsx|ts|tsx)',
    ],
    testURL: 'http://localhost/',
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**.(js|jsx|ts|tsx)',
        '**/src/**/*.(js|jsx|ts|tsx|vue)',
        '!**/main.js',
        '!**/components/toast/**',
    ],
    coverageReporters: ['html', 'text-summary'],
};
