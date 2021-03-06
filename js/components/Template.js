import Component from "./base/Component.js"

const Template = class extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  render = function() {
    return (
      `<div>${this.props.title}</div>`
    );
  };
};

export default Template;
