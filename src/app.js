let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  if(count > 0)
    count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}


const appRoot = document.getElementById('app');


const renderCounterApp = () => {

  const template = (
    <div className="container">
      <div className="wrapper">
        <button onClick={addOne} className="btn">+1</button>
        <h3>Count: {count} </h3>
        <button onClick={minusOne} className="btn">-1</button>
      </div>
      <button onClick={reset} className="btn reset">Reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderCounterApp();

