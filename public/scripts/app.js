'use strict';

var getFirstname = function getFirstname(fullName) {
  return fullName.split(' ')[0];
};
console.log(getFirstname('Muhammet ESER'));

var multiplier = {
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

var app = {
  title: 'Indecision',
  subtitle: ' Some cool subtitle',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    app.title,
    ' '
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    ' ',
    app.subtitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' ',
    app.options.length > 0 ? 'Here options' : 'No Options',
    ' '
  )
);

var user = {
  name: 'Andrew',
  age: 19,
  locaition: 'New York'
};

function getLocation(locaition) {
  if (locaition) return locaition;
  return 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name ? user.name : 'Anonymous',
    ' '
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.locaition)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
