const Component = class {
  constructor(HTML) {
    this.HTML = HTML || "";
  };

  state = {};

  toString = function() {
    return this.HTML;
  };
};

export default Component;
