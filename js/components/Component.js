let Component = function(HTML) {
  this.HTML = HTML || "";
};

Component.prototype.state = {};

Component.prototype.toString = function() {
  return this.HTML;
}

export default Component;
