const getHexPoints = (x, y, radius) => {
    const points = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i;
      const px = x + radius * Math.cos(angle);
      const py = y + radius * Math.sin(angle);
      return [px,py];
    });
    return points;
  };

console.log(getHexPoints(0,0,50));

/*const labelHexagons = (rows, cols)*/
  
const radius = 50;
const hexPoints = getHexPoints(10,10,radius);

const layGridPoints = (hexPoints, radius, rows, cols) => {
  const hexHeight = 1.5 * radius;
  const hexWidth = Math.sqrt(3) * radius;
  const gridPoints = [];
  const svg = document.getElementById('hex-grid');
  let svgContent = '';

  for (let row = 0; row < rows; row++) {
    const currentCol = [];
    for (let col = 0; col < cols; col++) {
      const currentHexPoints = [];

      for (let point = 0; point < hexPoints.length; point++) {
        const x = hexPoints[point][0] + col * (hexWidth + (row % 2 === 0 ? 0 : hexWidth / 2));
        const y = hexPoints[point][1] + row * hexHeight;
        currentHexPoints.push([x, y]);
      }
      currentCol.push(currentHexPoints); 
    }
    gridPoints.push(currentCol);
  }
  return gridPoints;
}

gridPoints = (layGridPoints(hexPoints, radius, 3, 3));
console.log(gridPoints);

/*const drawHexLines = (gridPoints) => {
  for (let row
}*/

  /*const drawGrid = (rows, cols, radius) => {
    const hexWidth = 1.5 * radius;
    const hexHeight = Math.sqrt(3) * radius;
    const svg = document.getElementById('hex-grid');
    let svgContent = '';

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexWidth;
        const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2);
        svgContent += drawHexagon(x, y, radius);
      }
    }
    svg.innerHTML = svgContent;
  };

  drawGrid(10, 10, 30);*/