/*
 X <script type="application/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js"></script>
 X <script type="application/javascript" src="JSON-js/json2.js"></script>

 <script type="application/javascript" src="js/settings.js"></script>
 <script type="application/javascript" src="js/userdata.js"></script>
 <script type="application/javascript" src="js/text.js"></script>
 <script type="application/javascript" src="js/terrain.js"></script>
 <script type="application/javascript" src="js/character.js"></script>
 <script type="application/javascript" src="js/graphics.js"></script>
 <script type="application/javascript" src="js/depthsort.js"></script>
 <script type="application/javascript" src="js/gameutil.js"></script>
 <script type="application/javascript" src="js/editor.js"></script>
 <script type="application/javascript" src="js/tiledescription.js"></script>
 <script type="application/javascript" src="js/input.js"></script>
 <script type="application/javascript" src="js/interface.js"></script>
 <script type="application/javascript" src="js/init.js"></script>
 */

/**
 * package: jsrpg.settings
 */

(function() {
  namespace("jsrpg.settings", constant, input, ticker, tickerCount);

  var tickerMessages = ["Click to add a block, shift+click to delete.",
                        "Scroll with the WASD keys.",
                        "Move the selection with the arrow keys.",
                        "Hold shift and move the selection to select multiple tiles.",
                        "Use the + and -, or delete and space keys to add and remove selection.",
                        "武器による攻撃や魔法の発動を行います 。",
                        "Now with smoother scrolling!"];

  var constants = {
    fps: 60,
    cameraFollowsSelection: true,
    fpsCounter: false,
    tileBorderDebug: false,
    debugMessages: true,
    secondarySelectionAlpha: .35,
    alphaSelectionThreshold: 127,
    shadowStep: 0.1,
    lightDistance: 3
  };

  var inputSettings = {
    allowScrolling: true,
    allowBorderScroll: true,
    mouseScrollGranulatiry: 8,
    keyboardScrollGranularity: 32,
    scrollBorder: 32,
    clickToSelect: false,
    mouseMoveDelay: (1000 / constants.fps),
    keyRepeatDelay: (1000 / constants.fps)
  };


  function constant(name) {
    if (name in constants) {
      return constants[name];
    }
  }

  function input(name,value) {
    if (value == null && name in inputSettings) {
      return inputSettings[name];
    }
    else if (typeof(value) != "undefined") {
      inputSettings[name] = value;
      return true;
    }
  }

  function ticker(index,value) {
    if (index in tickerMessages && typeof(value) != "undefined") {
      return tickerMessages[index];
    }
    else {
      if (index == "new") {
        tickerMessages.push(value);
      }
      else {
        tickerMessages[index] = value;
        return true;
      }
    }
  }
  /* @TODO need better way to do this :) */
  function tickerCount() {
    return tickerMessages.length;
  }
})();

/**
 * jsrpg.map
 */
(function() {
  namespace("jsrpg.map",init);

  var data = null;

  function init() {

  }
})();

/**
 * jsrpg.input
 */
(function() {
  namespace("jsrpg.input");

  var focused = null;
  var selection = true;
  var extendedSelection = [];


})();

/**
 * jsrpg.buffer
 */
(function() {
  namespace('jsrpg.buffer');

  var height = 0;
  var width = 0;

  function dimensions(w,h) {
    h = parseInt(h,10);
    w = parseInt(w,10);
    if (!isNaN(h) && !isNaN(w)) {
      height = h;
      width = w;
    }
    /**
     * arguments[0] because w is a misleading name in this case
     */
    else if(arguments[0] == 'w') {
      return w;
    }
    else if (arguments[0] == 'h') {
      return h;
    }
  }
})();

/**
 * jsrpg.viewport
 */
(function() {
  namespace("jsrpg.viewport");

  var scrolling = {
    left: false,
    right: false,
    horizontalSpeed: 0,
    verticalSpeed: 0
  };

  /**
   * position
   */
  var x = 0;
  var y = 0;

  var height = 0;
  var width = 0;

  function setpos(ux,uy) {
    ux = parseInt(ux,10);
    uy = parseInt(uy,10);
    if (!isNaN(ux) && !isNaN(uy)) {
      x = ux;
      y = uy;
    }
  }

  function dimensions(w,h) {
    h = parseInt(h,10);
    w = parseInt(w,10);
    if (!isNaN(h) && !isNaN(w)) {
      height = h;
      width = w;
    }
    /**
     * arguments[0] because w is a misleading name in this case
     */
    else if(arguments[0] == 'w') {
      return w;
    }
    else if (arguments[0] == 'h') {
      return h;
    }
  }

})();


/**
 * jsrpg base
 */
(function() {
  namespace("jsrpg",  init, log, state);

  var states = {
    paused: false,
    tickerChangeRate: 10,
    ticker: null
  };

  var canvas = $('#display');

  function state(name,value) {
    if (value == null && name in states) {
      return states[name];
    }
    else if (typeof(value) != "undefined") {
      states[name] = value;
      return true;
    }
  }

  function init() {
    this.viewport.dimensions(canvas.width,canvas.height);
    this.buffer.dimensions(this.viewport.dimensions('w') << 1,
                           this.viewport.dimensions('h') << 1);
  }

  function log() {
    /**
     * @TODO check if debug and if console does not exist, load firebug lite
     */
  }
})();

jQuery.ready(function() {
  jsrpg.init();
});