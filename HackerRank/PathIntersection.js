function processData(input) {
    //Enter your code here
    var input = JSON.parse(input);
    var p1 = input.p1;
    var p2 = input.p2;
    var p1PathCoordinates = parsePath(p1.start, p1.path);
    var p2PathCoordinates = parsePath(p2.start, p2.path);
    var intersectionData;
    intersectionData = findIntersection(p1PathCoordinates, p2PathCoordinates);
    var output = intersectionData.x + "," + intersectionData.y + " " + intersectionData.distance
    console.log(output);
}

function parsePath(start, path) {
    var x = start[0];
    var y = start[1];
    var pathCoordinates = [];

    for (var i = 0; i < path.length; i++) {
        if (path.charAt(i) == 'U') {
            y += 1;
        } else if (path.charAt(i) == 'D') {
            y -= 1;
        } else if (path.charAt(i) == 'L') {
            x -= 1;
        } else if (path.charAt(i) == 'R') {
            x += 1;
        }
        pathCoordinates.push([x, y]);
    }
    return pathCoordinates;

}

function findIntersection(p1, p2) {
    for (var i = 0; i < p1.length; i++) {
        //  for (var j= 0; j < p2.length ;j++){
        if (p1[i][0] === p2[i][0] && p1[i][1] === p2[i][1])
            return {
                x: p1[i][0],
                y: p1[i][1],
                distance: i + 1
            }
            //}
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});