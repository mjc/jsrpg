/**
 * jsrpg.character
 */
(function() {
  Namespace("jsrpg.character");

  jsrpg.character.win = {};

  jsrpg.character.gameObject = function(name,anims) {
    // Meta members
    this.name = name;

    // Graphics-related members
    this.animations = anims;
    this.currentAnimation = null;
    this.animIndex = 0;
    this.lastUpdate = 0;
    this.w = 0;
    this.h = 0;
    this.img = null;
    this.px = 0;
    this.py = 0;
    this.notifyOnAnimationCompletion = false;
    this.isAnimating = false;
    this.animReverse = false; // Is it playing backwards at the moment?

    // Movement state members
    this.slope = 0;
    this.speed = 0;
    this.moveSpeed = 3;
    this.target_px = 0;
    this.target_py = 0;
    this.moving = false;
    this.target_tile = null;
    this.path = null;
    this.pathIndex = 0;

    // Associated map tile
    this.tile = null;

    // Game system mebers
    this.stats = null;
    this.facing = DIR_RIGHT;

    this.reachable = null;

    return this.init();
  };

  jsrpg.character.gameObject.serialize = function() {
    // return a dictionary of values required to restore the object
    // for now, sinply return ourself as objects should be relatively sparse
    return this;
  };

  jsrpg.character.gameObject.init = function() {
    this.setAnimation('idle');
    this.animate();

    var bluegrad = function (c,px,py,w,h)
    {
      Namespace.use("jsrpg.character");
      var oldalpha = c.globalAlpha;
      c.globalAlpha = .85;
      var grad = c.createLinearGradient(0,0,0,win.height);
      grad.addColorStop(0, "#0000B3");
      grad.addColorStop(1, "black");
      c.fillStyle = grad;
      c.fillRect(0,0,win.width, win.height);
      c.globalAlpha = oldalpha;
    };

    jsrpg.character.win.borderStyle = "white";
    jsrpg.character.win.setBGFunction(bluegrad);

    return true;
  };

  jsrpg.character.gameObject.gotFocus = function() {
    jsrpg.character.show({animation: "open_up", step_size: 10});

    if (this.moving == false && this.path == null)
      this.showMovementArea();
  };

  jsrpg.character.gameObject.lostFocus = function() {
    jsrpg.character.win({animation: "fade", step_size: -30});

    this.hideMovementArea();
  };

  jsrpg.character.gameObject.face = function(direction) {
    if (this.moving == true) return false;
    if (this.facing == direction) return true;

    this.facing = direction;
    this.setAnimation("idle");
    jsrpg.map.updateBuffer(true, this.px, this.py, this.w, this.h);
    this.lastUpdate = new Date();

    return true;
  };

  jsrpg.character.gameObject.setTile = function(tile) {
    if (tile == null) return false;

    if (this.tile != null) {
      var t = this.tile;
      t.removeObject(this);
      jsrpg.map.updateBuffer(true, this.px,this.py,this.w,this.h);
      if (t == jsrpg.input.focused) {
        this.editor.update();
      }
    }

    tile.addObject(this);
    this.tile = tile;

    var ret = this.project(this.tile);
    this.px = ret.px;
    this.py = ret.py;

    jsrpg.map.updateBuffer(true, this.px, this.py, this.w,this.h);

    if (tile == jsrpg.input.focused) {
      this.editor.update();
    }
  };

  jsrpg.character.gameObject.setAnimation() {

  }
})();
