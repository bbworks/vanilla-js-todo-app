const State = function(initialState) {
  let _state = {};

  this.getState = function() {
    return _state
  };

  this.setState = function(newState) {
    //Only accept objects
    if (typeof newState !== "object") {
      return;
    }

    console.log(`Setting state \r\n${Object.keys(newState).join(", ")}.`);

    //Set the new state
    _state = {..._state, ...newState};
  };

  const init = function() {
    _state = {..._state, ...initialState};
  };

  init();
};

export default State;
