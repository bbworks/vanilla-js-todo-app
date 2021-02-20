import Component from "./components/base/Component.js"
import Tasks from "./components/Tasks.js"

const App = class extends Component {
  constructor(props) {
    super(props);

    this.setState({
      tasks: [
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
      ]
    });

    this.init();
  };

  render = function() {
    return [
      `<div>`,
        `<h1>${this.props.title}</h1>`,
        new Tasks({tasks: this.state.getState().tasks}),
      `</div>`,
    ];
  };
};

window.app = new App({title: "App"});
document.getElementById("app").appendChild(window.app.DOMNode);

window.setTimeout(
  ()=> {
    app.setState({
      tasks: [
        ...app.state.getState().tasks, {
          id: 4,
          text: 'Flip burgers',
          day: 'Feb 8th at 2:30pm',
          reminder: false,
        }
      ]
    });
    window.setTimeout(
      ()=> {
        app.setState({
          tasks: [
            ...app.state.getState().tasks, {
              id: 5,
              text: 'Take a test',
              day: 'Feb 9th at 2:30pm',
              reminder: true,
            }
          ]
        });
      },
      3000
    );
  },
  3000
);
