import State from "./_State.js"

const Component = class {
  constructor(props) {
    this.props = props || {};
  };

  DOMNode = document.createElement("div");

  state = new State({});

  setState = function(newState) {
  //Set the new state
    this.state.setState(newState);

    //Update the node in the DOM
    this.update(this.render());
  };

  render = function() {
    return (``);
  };

  update = (HTML) => {
    console.log(`Rendering ${this.constructor.name}...`);
    const container = document.createElement("div");
    container.innerHTML = this.render();
    const newDOMNode = container.firstChild;
    if (this.DOMNode) {
      this.DOMNode.replaceWith(newDOMNode);
      this.DOMNode = newDOMNode;
    }
    else {
      this.DOMNode = container.firstChild;
    }
  };

  init = function() {
    this.update();
  };
};

export default Component;
