const speed = 0   //prints the spped of the car
const speedlimit = 70; // show the speedlimt
const points = Math.abs((speed-speedlimit)/5); //calculates the points of car moving car exceeding speedlimit
if(speed<=70){
    console.log("OK"); // it prints "OK" if speed <=70
}else if(points>=12){
    console.log("License suspended"); // it prints "License suspended" if points exceed 12 points 
}else if (speed>70){
    console.log("points: " + points); // it showsn number of points the driver has when speedlimit is exceeded
}