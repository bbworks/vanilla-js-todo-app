import Component from "./base/Component.js"
import Task from "./Task.js"

const Tasks = class extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  render = function() {
    return [
      `<div class="task-container">`,
        [
          ...this.props.tasks.map(task=>new Task({task: task}))
        ],
      `</div>`,
      ];
  };
};

export default Tasks;
