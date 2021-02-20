import Component from "./components/_Component.js"

const Test = class extends Component {
  constructor(props) {
    super(props);
    this.init();

    // this.setState({
    //   title: "Test"
    // });
  }

  render = function() {
    return (
      `<h1>${this.props.title}</h1>`
    );
  };
};

window.test = new Test({title: "Test"});
document.body.appendChild(window.test.DOMNode);
