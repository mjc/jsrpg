/**
 * jsrpg.buffer
 */
(function() {
  Namespace('jsrpg.buffer');
  jsrpg.buffer = $("<canvas>")[0];
  jsrpg.buffer.context = jsrpg.buffer.getContext("2d");
})();