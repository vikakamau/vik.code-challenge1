const speed = 180
const speedlimit = 70;
const points = Math.abs((speed-speedlimit)/5);
if(speed<=70){
    console.log("OK");
}else if(points>=12){
    console.log("License suspended");
}else if (speed>70){
    console.log("points: " + points);
}