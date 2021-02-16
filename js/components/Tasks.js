import Component from "./Component.js";
import Task from "./Task.js";

let Tasks = function(props) {
  this.HTML = `<div class="task-container">
  ${props.tasks.map(task=>new Task({task: task})).join("\r\n")}
</div>`;

  Component.call(this, this.HTML);
};

Tasks.prototype = Object.create(Component.prototype);

Tasks.prototype.constructor = Tasks;

export default Tasks;
