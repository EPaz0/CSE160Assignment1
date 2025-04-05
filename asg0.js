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

    
    //Part2
    /*
    let v1 = new Vector3([2.25,2.25]);
    console.log('v1:', v1);
    drawVector(v1, "red");
    */

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

function handleDrawEvent() 
{
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Remake the background black
    ctx.fillStyle = 'rgba(black)'; // Set a blue color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    let x1 = parseFloat(document.getElementById("v1x").value);
    let y1 = parseFloat(document.getElementById("v1y").value);
    let v1 = new Vector3([x1, y1]); 

    let x2 = parseFloat(document.getElementById("v2x").value);
    let y2 = parseFloat(document.getElementById("v2y").value);
    let v2 = new Vector3([x2, y2]); 


    drawVector(v1, "red") 
    drawVector(v2, "blue") 
}

function handleDrawOperationEvent()
{
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Remake the background black
    ctx.fillStyle = 'rgba(black)'; // Set a blue color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    let x1 = parseFloat(document.getElementById("v1x").value);
    let y1 = parseFloat(document.getElementById("v1y").value);
    let v1 = new Vector3([x1, y1]); 

    let x2 = parseFloat(document.getElementById("v2x").value);
    let y2 = parseFloat(document.getElementById("v2y").value);
    let v2 = new Vector3([x2, y2]); 


    drawVector(v1, "red") 
    drawVector(v2, "blue") 

    let operation = document.getElementById("opertaion-select").value;
    let scalar = parseFloat(document.getElementById("scalar").value);

    if(operation == "add")
    {
        let v3 = v1.add(v2);
        drawVector(v3, "green")
    }else if(operation == "sub")
    {
        let v3 = v1.sub(v2);
        drawVector(v3, "green")
    }else if(operation == "mult")
    {
        let v3 = v1.mul(scalar);
        drawVector(v3, "green")

        let v4 = v2.mul(scalar);
        drawVector(v4, "green")
    }else if(operation == "div")
    {
        let v3 = v1.div(scalar);
        drawVector(v3, "green")

        let v4 = v2.div(scalar);
        drawVector(v4, "green")
    }
}