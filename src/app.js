const app = {
  title: 'Indecision',
  subtitle: ' Some cool subtitle',
}

const template = (
  <div>
    <h1> {app.title} </h1>
    <p> {app.subtitle} </p>
  </div>
);

const user = {
  name: 'Andrew',
  age: 26,
  locaition: 'New York'
}

const templateTwo = (
  <div>
    <h1> {user.name} </h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.locaition}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);