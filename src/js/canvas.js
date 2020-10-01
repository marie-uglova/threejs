window.onload = function () {

    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 300;

    //debugger;

    context.beginPath();
    context.lineWidth = 12;
    //context.lineCap = 'round'; // закругление: butt, round, square
    context.lineJoin = 'round'; // носик пересечения: bevel, round, miter
    context.strokeStyle = "green";
    context.fillStyle = "gray";
    context.moveTo(10, 30);
    context.lineTo(100, 200);
    context.lineTo(300, 30);
    context.closePath(); // замкнуть
    context.fill();
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "purple";
    context.moveTo(10, 30);
    context.lineTo(210, 100);
    context.stroke();

}
