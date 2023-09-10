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

fizzBuzzReplace(15);



function stringToArray(inputString) {
    let kalimatArray = inputString.split(" ");
    return kalimatArray;
  }
  
  let inputString = "Hello World";
  let kalimat = stringToArray(inputString);
  console.log(kalimat);
  
// 
  function removeAngkaGanjil(array) {
    let angka = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        angka.push(array[i]);
      }
    }
  
    return angka;
  }
  

  let inputAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fungsi = removeAngkaGanjil(inputAngka);
  console.log(fungsi); 
  



  function BMI(weight, height) {
    const bmi = weight / (height * height);
  
    if (bmi < 18.5) {
      return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
      return "very overweight";
    } else {
      return "obesity";
    }
  }
  
  let weight = 70;
  let height = 1.56; 
  const result = BMI(weight, height);
  console.log(result);
  