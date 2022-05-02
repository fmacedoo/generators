const Generator = require('yeoman-generator');
const { toKebabCase, toCamelCase } = require('../../helpers');

module.exports = class extends Generator {
    constructor(name, fs, configPath) {
        super(name, fs, configPath);
        this.files = [
            'index.js',
            '{name}.js',
            'styles.js',
            'tests/{name}.test.js',
        ];
    }

    async prompting() {
        const name = this.options._[0] || this.appname;

        this.config = await this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your component name',
                default: name,
            },
        ]);
    }

    writing() {
        const { name, stories } = this.config;
        const kebabCaseName = toKebabCase(name);
        const camelCaseName = toCamelCase(name);
        const foldername = kebabCaseName;

        this.files
            .map((file) => {
                return typeof file === 'string' ? { name: file, generate: () => true } : file;
            })
            .filter((file) => file.generate({ stories }))
            .map((file) => {
                const filename = file.name.replace('{name}', name);

                this.fs.copyTpl(
                    this.templatePath(file.name),
                    this.destinationPath(`${foldername}/${filename}`),
                    {
                        name,
                        className: camelCaseName,
                        foldername,
                    }
                );
            });
    }
};
