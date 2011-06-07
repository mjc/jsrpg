/**
 * jsrpg base
 */
(function() {
  Namespace.baseuri = "./";
  /*
   * @TODO optimize these!
   */
  Namespace("jsrpg");

  var running = true;

  var canvas = null;

  var canvasContext = null;

  function state(name,value) {
    if (value == null && name in states) {
      return states[name];
    }
    else if (typeof(value) != "undefined") {
      states[name] = value;
      return true;
    }
  }

  jsrpg.init = function(selector) {
    Namespace.use(["jsrpg","jsrpg.buffer","jsrpg.viewport"]);

    buffer.width  = viewport.width << 1;
    buffer.height = viewport.height << 1;

   /**
    * @TODO initialize/reload user data
    */
    // user.data


  };

  jsrpg.log = function() {
    /**
     * @TODO check if debug and if console does not exist, load firebug lite
     */
  }
})();
