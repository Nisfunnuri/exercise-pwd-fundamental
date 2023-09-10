// Create a function that can create a triangle pattern according to the height
function membuatTriangle(masukkanPanjang){
for (let i = 1; i <= masukkanPanjang; i++) {
    let p = "";
    for (let j = 1; j <= i; j++) {
        p += j;
    }
        
    console.log(p);
}
}
membuatTriangle(7);


// Create a function that receiving array as input, and this function can find maximum value in array

function cariNilaiMAX(arrInput) {
    let maxValue = arrInput[0];
    
    for (let i = 1; i < arrInput.length; i++) {
        if (maxValue < arrInput[i]) {
            maxValue = arrInput[i];
        }
        
    }
    return maxValue;
}
let inputArray = [10, 80, 5, 100, 150];
let nilaiMaximal = cariNilaiMAX(inputArray);
console.log(nilaiMaximal);



// Create a function that can create a triangle pattern according to the height
function pattern(masukkanPanjang){
    let number11 = 1;

for (let i = 1; i <= masukkanPanjang; i++) {
    let p = "";
    for (let j = 1; j <= i; j++) {
        p += "0" + j
    }
        
    console.log(p);
}
}
pattern(7);


function fizzBuzzReplace(n) {
  for (let i = 1; i <= n; i++) {
    // console.log(i);
    let output = "";
    
    if (i % 3 === 0) {
      output += "Fizz";
    }
    
    if (i % 5 === 0) {
      output += "Buzz";
    }
    
    if (output === "") {
      output = i;
    }
    
    console.log(output);
  }
}

// Example usage:
fizzBuzzReplace(15);



function stringToArray(inputString) {
    let kalimatArray = inputString.split(" ");
    return kalimatArray;
  }
  
  let inputString = "Hello World";
  let kalimat = stringToArray(inputString);
  console.log(kalimat);
  
