function handleTextToPixels(text){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.canvas.width = 600;
    ctx.canvas.height = 300;
    
    let w = ctx.canvas.width;
    let h = ctx.canvas.height;
    
    ctx.font = '192px serif';
    ctx.fillText(text, 100, 200);
    
    // ctx.fillStyle = "rgb(0, 154, 253)";                 // fill must be a solid color
    // generate(inp.value)                                 // init default text
    // inp.onkeyup = function() {generate(this.value)};    // get some text to demo
    
    
    var i, radius = 8,                                // ball radius
        data32;                                       // we'll use uint32 for speed
    
        points = [];                                       // clear ball array
    //ctx.clearRect(0, 0, w, h);                        // clear canvas so we can
    //ctx.font = '10px serif';
    //ctx.fillText(txt.toUpperCase(), 20, 10);           // draw the text (default 10px)
    
    
    // get a Uint32 representation of the bitmap:
    data32 = new Uint32Array(ctx.getImageData(0, 0, w, h).data.buffer);
    
    // loop through each pixel. We will only store the ones with alpha = 255
    for(i = 0; i < data32.length; i+=8) {
        if (data32[i] & 0xff000000) {             // check alpha mask
            points.push({                            // add new ball if a solid pixel
            x: i % w ,     // use position and radius to
            y: (i / w)|0 , //  pre-calc final position and size
            radius: radius,
            alpha: data32[i]            // just to demo animation capability
            });
        }
    }
    
    //console.log(points)

    ctx.clearRect(0, 0, w, h);
    // ctx.beginPath();
    // for(var i = 0, point; point = points[i]; i++) {
    //     //let point = points[0]
    //     ctx.moveTo(point.x + point.radius , point.y );
    //     ctx.arc(point.x +5 , point.y+5 , point.radius, 0, 6.28);
    //     ctx.closePath();
    // }
    // ctx.fill();

    return points;
 
}
