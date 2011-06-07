/**
 * package: jsrpg.settings
 */

(function() {
  Namespace("jsrpg.settings.constants",{
    fps: 60,
    cameraFollowsSelection: true,
    fpsCounter: false,
    tileBorderDebug: false,
    debugMessages: true,
    secondarySelectionAlpha: .35,
    alphaSelectionThreshold: 127,
    shadowStep: 0.1,
    lightDistance: 3
  });
  Namespace("jsrpg.settings.input",{
    allowScrolling: true,
    allowBorderScroll: true,
    mouseScrollGranulatiry: 8,
    keyboardScrollGranularity: 32,
    scrollBorder: 32,
    clickToSelect: false,
    mouseMoveDelay: (function() {
      Namespace.use("jsrpg.settings.constants");
      return 1000 / constants.fps;
    })(),keyRepeatDelay: (function() {
      Namespace.use("jsrpg.settings.constants");
      return 1000 / constants.fps;
    })()
  });
})();