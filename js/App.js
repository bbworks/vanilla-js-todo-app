import Tasks from "./components/Tasks.js";

let App = function(props) {
  let tasks = [
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

  return `<h1>Test</h1>
    ${new Tasks({tasks: tasks})}`;
};

document.getElementById("app").innerHTML = `${App()}`;
