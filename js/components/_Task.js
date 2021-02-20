import Component from "./_Component.js"

const Task = class extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  onClick = event => {
    console.log(this.setState);
    this.setState({...this.state, reminder: !this.state.reminder});
  };

  render = function() {
    return (
      `<div class="task ${this.props.task.reminder ? "reminder" : ''}" data-task-id="${this.props.task.id}">
          ${this.props.task.text}
        </div>`
    );
  };
};

export default Task;
