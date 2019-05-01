'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = {
  title: 'Indecision App',
  subtitle: 'Some cool subtitle',
  options: []
};

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGretting',
    value: function getGretting() {
      return 'Hi. I\'am ' + this.name + '!';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' years old.';
    }
  }]);

  return Person;
}();

var me = new Person('Muhammet', 24);
console.log(me.getDescription());
console.log(me.getGretting());

var other = new Person();
console.log(other.getDescription());

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var makeDecision = function makeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randNum];
  alert(option);
};

var visibility = false;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'h1',
      null,
      ' ',
      app.title,
      ' '
    ),
    React.createElement(
      'p',
      null,
      ' ',
      app.subtitle,
      ' '
    ),
    React.createElement(
      'button',
      { disabled: app.options.length == 0, className: 'btn', onClick: makeDecision },
      'What Should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll, className: 'btn' },
      'Remove All'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      'Toggle'
    ),
    visibility && React.createElement(
      'p',
      null,
      'Some Details'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          ' ',
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { className: 'btn' },
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
