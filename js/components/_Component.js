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
    const returnArrayHTML = function(array) {
      return array.map(item=>(typeof item === "string" ? item : (item instanceof Array ? returnArrayHTML(item) : item.update()))).join("\r\n")
    };

    console.log(`Rendering ${this.constructor.name}...`);
    const container = document.createElement("div");
    const renderedOutput = this.render();

    //If we're returnnig a string, simply use it for HTML
    if (typeof renderedOutput === "string") {
      container.innerHTML = renderedOutput;
    }
    //Otherwise, if we're returning an array, render each component
    else if (renderedOutput instanceof Array) {
      const joinedHTML = returnArrayHTML(renderedOutput);
      container.innerHTML = joinedHTML;
    }

    const newDOMNode = container.firstChild;
    if (this.DOMNode) {
      this.DOMNode.replaceWith(newDOMNode);
      this.DOMNode = newDOMNode;
    }
    else {
      this.DOMNode = container.firstChild;
    }

    return this.DOMNode.outerHTML;
  };

  init = function() {
    this.update();
  };
};

export default Component;
