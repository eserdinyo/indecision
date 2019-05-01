'use strict';

var app = {
  title: 'Indecision',
  subtitle: ' Some cool subtitle'
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
  React.createElement(
    'p',
    null,
    ' ',
    app.subtitle,
    ' '
  )
);

var user = {
  name: 'Andrew',
  age: 26,
  locaition: 'New York'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name,
    ' '
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.locaition
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
