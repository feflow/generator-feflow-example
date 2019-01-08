'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor() {
    super(...arguments);
  }

  /**
   * Print welcome message
   */
  initializing() {
    this.log(yosay('Feflow generator example'));
    this.log(
      chalk.magenta(
        `欢迎您` +
        '这是一款基于Webpack打包的模板, Powered by http://www.feflowjs.org/.' +
        '\n'
      )
    );
  }

  /**
   * Interact with developer.
   */
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: '请输入项目名称',
      default: 'project-default'
    }, {
      type: 'input',
      name: 'description',
      message: '请输入项目描述信息',
      default: '这是一个Feflow的示例脚手架'
    }, {
      type: 'input',
      name: 'version',
      message: '请输入版本 (1.0.0):',
      default: '1.0.0'
    }]).then((answers) => {
      this.answers = answers;
    });
  }

  /**
   * Generator project files.
   */
  writing() {

  }

  install() {

  }

  end() {

  }
};
