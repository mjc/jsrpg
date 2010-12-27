// editor-specific globals
var tileEditorCanvas = null;
var tileEditorCtx = null;

var tileEditorMsg = ["No tile selected."
];

function tileEditorInit()
{
    tileEditorCanvas = $('#editor')[0];
    tileEditorCtx = tileEditorCanvas.getContext('2d');
    
    tileEditorCtx.font = "bold 14px sans-serif";
    
    tileEditorUpdate();
}

function tileEditorUpdate()
{
    var height = tileEditorCanvas.height;
    var width = tileEditorCanvas.width;
    var midx = (width >> 1) - tileHeight;
    var midy = (height >> 1) - tileHeight;
    
    tileEditorCtx.clearRect(0,0,width, height);
    tileEditorCtx.fillStyle = 'rgba(100,0,0,.05)';
    tileEditorCtx.fillRect(0,0,width, height);
    
    // Draw bottom message
    tileEditorCtx.fillStyle = 'rgba(0,0,0,.75)';
    if (focussed != null) {
        tileEditorCtx.drawImage(focussed.tile, midx, midy);
        var msg = "("+focussed.x +","+ focussed.y+","+focussed.z+")";
        tileEditorCtx.fillText(msg, 5, height - 6);
    } else {
        tileEditorCtx.fillText(tileEditorMsg[0], 5, height - 6);
    }
}