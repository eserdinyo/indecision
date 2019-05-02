class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.reset = this.reset.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.state = {
      count: 20
    };
  }
  addOne() {
    this.setState({ count: this.state.count + 1 });
  }
  reset() {
    this.setState({ count: 0 });
  }
  minusOne() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.addOne} >+1</button>
        <button onClick={this.reset} >reset</button>
        <button onClick={this.minusOne} >-1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));