class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prev => {
      return {
        options: prev.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of Computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0} />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options} />
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = props => {
  return (
    <div>
      <h1> {props.title} </h1>
      <h2> {props.subtitle} </h2>
    </div>
  )
}

const Action = props => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick} >
        What Should I do?
      </button>
    </div>
  )
}

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map(option => <Option key={option} optionText={option} />)
      }
    </div>
  )
}

const Option = props => {
  return (
    <div>
      {props.optionText}
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState({ error })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

/* const User = (props) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age} </p>
    </div>
  );
}; */

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
