var reverse = function(x) {
    let z;
    z=x.toString().split("").reverse().join("");
    z=parseFloat(z);
    z=z*Math.sign(x);
    if(z > 2**31-1||z<(-(2**31-1))){
    return 0}
        return z
    };