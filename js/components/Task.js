import Component from "./Component.js";

let Task = function(props) {
  this.HTML = `<div class="task" data-task-id="${props.task.id}">${props.task.text}</div>`;

  Component.call(this, this.HTML);
};

Task.prototype = Object.create(Component.prototype);

Task.prototype.constructor = Task;

export default Task;
