// if statement
// ternaty operators
// logical and opreators

const app = {
  title: 'Indecision',
  subtitle: ' Some cool subtitle',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1> {app.title} </h1>
    {app.subtitle && <p> {app.subtitle} </p>}
    <p> {app.options.length > 0 ? 'Here options' : 'No Options'} </p>
  </div>
);

const user = {
  name: 'Andrew',
  age: 19,
  locaition: 'New York'
};

function getLocation(locaition) {
  if (locaition)
    return locaition;
  return 'Unknown';
}

const templateTwo = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'} </h1>

    {user.age >= 18 && <p>Age: {user.age}</p>}
    <p>Location: {getLocation(user.locaition)}</p>

    {}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);