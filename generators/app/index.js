var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    notFound() {
        throw new Error('There is no template as default.');
    }
};
