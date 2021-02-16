import Component from "./Component.js";
import Task from "./Task.js";

let Tasks = class extends Component {
  constructor(props) {
    super();

    this.HTML = `<div class="task-container">
    ${props.tasks.map(task=>new Task({task: task})).join("\r\n")}
  </div>`;
  };
};

export default Tasks;
