/**
 * jsrpg.ticker
 */
(function() {
  Namespace('jsrpg.ticker');

  jsrpg.ticker = function(selector,initialMessage) {
    if (!selector) {
      selector = "#display";
    }
    jsrpg.ticker.element = $(selector);
    jsrpg.ticker.message = initialMessage;
  };

  jsrpg.ticker.changeRate = 10;
  jsrpg.ticker.message = null;
  jsrpg.ticker.element = null;

  jsrpg.ticker.messages = ["Click to add a block, shift+click to delete.",
                  "Scroll with the WASD keys.",
                  "Move the selection with the arrow keys.",
                  "Hold shift and move the selection to select multiple tiles.",
                  "Use the + and -, or delete and space keys to add and remove selection.",
                  "武器による攻撃や魔法の発動を行います 。",
                  "Now with smoother scrolling!"];

  jsrpg.ticker.random = function() {

  };

  /**
   * @TODO find a prettier hack
   */
  jsrpg.ticker();
})();
