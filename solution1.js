const prompt = require("prompt-sync")({ sigint: true});
const grades = prompt("Enter Grade: ")
if(grades>79 && grades<=100){ // it prints grade "A" if grades >79 & <= 100
    console.log("A");
}else if(grades>=60 && grades<=79){ // it prints grade "B" if grades >=60 & grades <=79
    console.log("B");
}else if(grades>=49 && grades<=59){ // it prints grade "C" if grade >=49 & grades <=59
    console.log("C");
}else if(grades>=40 && grades<49){ // it prints grade "D" if grade >=40 & grade < 49
    console.log("D")
}else if(grades>=0 && grades<40){ // it prints grade "E"  if grade >=0 & grade <40
    console.log("E")
}else if(grades<0 || grades>100){// it prints  "invalid mark"  if grade <0 & grade >100
    console.log("Invalid mark")
}

 