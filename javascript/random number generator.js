let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
        x = Math.floor(Math.random() * 20) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        z = Math.floor(Math.random() * 60) + 1;

        document.getElementById("xLabel").innerHTML = x;
        document.getElementById("yLabel").innerHTML = y;
        document.getElementById("zLabel").innerHTML = z;
}