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

Namespace.baseuri = "./";
(function() {
  /**
   * @TODO make this less hacky.
   */
  Namespace.include("jsrpg.buffer");
  Namespace.include("jsrpg.layers");
  Namespace.include("jsrpg.ticker");
  Namespace.from("jsrpg.base").use("jsrpg");
  jsrpg.init("#display");

  jsrpg.ticker("#msg","Welcome to the JSRPG map editor!");

  jsrpg.buffer.context.strokeStyle = "black";
  //jsrpg.layers.bg.context.linearVerticalGradient();
  //jsrpg.layers.fg.context.whiteVerticalGradient();

  // graphics.init();
})();
