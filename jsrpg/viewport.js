/**
 * jsrpg.viewport
 */
(function() {
  Namespace('jsrpg.viewport');

  jsrpg.viewport.set = function(selector) {
    if ((obj = $(selector)[0]) != true) {
      obj = $("#display")[0];
    }
    obj.context = obj.getContext("2d");
    obj.set = this.set;
    obj.globalCompositeOperation = "copy";
    jsrpg.viewport = obj;
  };

  jsrpg.viewport.set();
})();
