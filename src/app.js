const app = {
  title: 'Indecision App',
  subtitle: 'Some cool subtitle',
  options: []
};

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I'am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Muhammet', 24);
console.log(me.getDescription());
console.log(me.getGretting());

const other = new Person();
console.log(other.getDescription());



const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
}

const makeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};

let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility;
  render();
}


const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div className="container">
      <h1> {app.title} </h1>
      <p> {app.subtitle} </p>
      <button disabled={app.options.length == 0} className="btn" onClick={makeDecision} >What Should I do?</button>
      <button onClick={removeAll} className="btn">Remove All</button>
      <button onClick={toggleVisibility} >Toggle</button>
      {
        visibility && (
          <p>Some Details</p>
        )
      }

      <ol>
        {
          app.options.map(option => <li key={option} > {option}</li>)
        }
      </ol>

      <form onSubmit={onFormSubmit} >
        <input type="text" name="option" />
        <button className="btn">Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();
