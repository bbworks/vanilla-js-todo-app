import Component from "./Component.js";

let Task = class extends Component {
  constructor(props) {
    super();
    
    this.HTML = `<div class="task" data-task-id="${props.task.id}">${props.task.text}</div>`;
  };
};

export default Task;
