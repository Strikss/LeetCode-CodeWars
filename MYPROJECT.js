console.log(iqTest("1 3 5 6 7"));

function iqTest(numbers){
    numbers=numbers.split(" ");
    var y =[];
    var z =[];
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]%2==0){
            y.push(numbers[i]);
        }
        else{
            z.push(numbers[i]);
        }
        
    } if(y.length>z.length){
        numbers=numbers.indexOf(z[0])+1;
    }
    else{
         numbers=numbers.indexOf(y[0])+1;
    }
      return numbers;
    }

    