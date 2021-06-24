//configuración del gauge
var opts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    percentColors : [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 130}, // Red from 100 to 130
        {strokeStyle: "#FFDD00", min: 130, max: 150}, // Yellow
        {strokeStyle: "#30B32D", min: 150, max: 220}, // Green
        {strokeStyle: "#FFDD00", min: 220, max: 260}, // Yellow
        {strokeStyle: "#F03E3E", min: 260, max: 300}  // Red
     ],
     renderTicks: {
        divisions: 5,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: "#333333",
        subDivisions: 3,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: "#666666"
      },
      staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 300],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
    
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 300; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 38; // set animation speed (32 is default value)
  gauge.set(30);
  