import Component from "./Component.js";

let Task = class extends Component {
  constructor(props) {
    super(props);

    const onClick = event => {
      console.log(this.setState);
      this.setState({...this.state, reminder: !this.state.reminder});
    };

    this.HTML = `<div class="task ${props.task.reminder ? "reminder" : ''}" data-task-id="${props.task.id}">
        ${props.task.text}
      </div>`;
  };
};

export default Task;
