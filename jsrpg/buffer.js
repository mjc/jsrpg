/**
 * jsrpg.buffer
 */
(function() {
  Namespace("jsrpg.buffer");

  jsrpg.buffer = $("<canvas>")[0];
  jsrpg.buffer.context = jsrpg.buffer.getContext("2d");
  jsrpg.buffer.x = 0;
  jsrpg.buffer.y = 0;

  jsrpg.buffer.move = function(x,y) {
    Namespace.use("jsrpg.settings");

    if (x == this.x && y == this.y) {
      return false;
    }

    if (settings.debugMessages == true) {
      var t0 = new Date();
    }

    var xmagnitude = 0, ymagnitude = 0;
    var xpositive, ypositive;
    var xfrom = 0, yfrom = 0;
    var xto = 0, yto = 0;

    if (x != this.width) {
      xmagnitude = x - this.x;
      xpositive = xmagnitude > 0;
      xmagnitude = Math.abs(xmagnitude);

      if (xpositive == true) {
        xfrom = xmagnitude;
        xto = 0;
      } else {
        xfrom = 0;
        xto = xmagnitude;
      }

      this.x = x;
    }

    if (y != this.y) {
      ymagnitude = y - this.y;
      ypositive = ymagnitude > 0;
      ymagnitude = Math.abs(ymagnitude);

      if (ypositive) {
        yfrom = ymagnitude;
        yto = 0;
      } else {
        yfrom = 0;
        yto = ymagnitude;
      }

      this.y = y;
    }

    // check bounds
    if (xmagnitude >= this.width || ymagnitude >= this.height) {
        this.update(true, this.x, this.y, this.width, this.height);
      if (settings.debugMessages) {
        var t1 = new Date();
        log("Reinit buffer: " + (t1-t0) + "ms");
      }
      return true;
    }

    var w = this.width - xmagnitude;
    var h = this.height - ymagnitude;
    var oldCO = this.context.globalCompositeOperation;
    this.context.globalCompositeOperation = "copy"; // Magic!
    this.context.drawImage(buffer, xfrom, yfrom, w, h, xto, yto, w, h);
    this.context.globalCompositeOperation = oldCO;

    if (xmagnitude > 0) {
      if (xpositive) {
        this.update(false, this.x, this.y, xmagnitude, this.height);
      } else {
        this.update(false, this.x, this.y, xmagnitude, this.height);
      }
      if (settings.debugMessages) log("redraw: " + xmagnitude + "*" + this.height);
    }

    if (ymagnitude > 0) {
      var px = this.x;
      if (xmagnitude > 0 && !xpositive) {
        px += xmagnitude;
      }
      if (ypositive) {
        this.update(false, px, this.y + h, w, ymagnitude);
      } else {
        this.update(false, px, this.y, w, ymagnitude);
      }
      if (settings.debugMessages) log("redraw: " + w + "*" + ymagnitude);
    }
    if (settings.debugMessages) {
      var t1 = new Date();
      log("Move buffer: " + (t1-t0) + "ms");
    }
    return true;
  };

  jsrpg.buffer.update = function(update, minx, miny, width, height, noCheck) {

  };
})();