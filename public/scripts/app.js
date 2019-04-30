console.log('...');

// var template = <p> This is JSX...</p>;
var template = React.createElement("p", {id: 'someid'}, " This is JSX...");
const app = document.getElementById('app');

ReactDOM.render(template, app);