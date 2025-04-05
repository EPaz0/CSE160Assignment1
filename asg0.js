function main() {
    // Retrieve <canvas> element                                  
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
  
    // Get the rendering context for 2DCG                          
    var ctx = canvas.getContext('2d');
   
    // Draw a blue rectangle                                      
    ctx.fillStyle = 'rgba(black)'; // Set a blue color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    let v1 = new Vector3([2.25,2.25]);
    console.log('v1:', v1);
    drawVector(v1, "red");
}

function drawVector(v, color) 
{
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    // Scale factor
    const scale = 20;
    
    // Start at the center of the canvas
    const x0 = canvas.width / 2;
    const y0 = canvas.height / 2;
    
    // Calculate the end position of the vector
    const x1 = x0 + v.elements[0] * scale;
    const y1 = y0 - v.elements[1] * scale; // Y axis is inverted in canvas

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

}