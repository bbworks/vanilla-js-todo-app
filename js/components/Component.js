const Component = class {
  constructor(props = {}) {
    this.HTML = "";
    this.state = {};
  };

  render = function() {
    return this.HTML;
  };

  toString = function() {
    return this.render();
  };

  setState = function(newState) {
    this.state = newState;
    console.log("render()");
  };
};

export default Component;
