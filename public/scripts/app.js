"use strict";

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  if (count > 0) count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

  var template = React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "button",
        { onClick: addOne, className: "btn" },
        "+1"
      ),
      React.createElement(
        "h3",
        null,
        "Count: ",
        count,
        " "
      ),
      React.createElement(
        "button",
        { onClick: minusOne, className: "btn" },
        "-1"
      )
    ),
    React.createElement(
      "button",
      { onClick: reset, className: "btn reset" },
      "Reset"
    )
  );
  ReactDOM.render(template, appRoot);
};

renderCounterApp();
