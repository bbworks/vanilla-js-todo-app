import Component from "./components/Component.js";
import Tasks from "./components/Tasks.js";

const App = class extends Component {
  constructor(props) {
    super();
    
    this.state.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 2th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
      },
    ];

    this.HTML = `<h1>Test</h1>
      ${new Tasks({tasks: this.state.tasks})}`;
  };
};

document.getElementById("app").innerHTML = `${new App()}`;
