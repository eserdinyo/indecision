class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleVisibility() {
    this.setState({ visibility: !this.state.visibility })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {
          this.state.visibility && <p>Some dummy text...</p>
        }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));