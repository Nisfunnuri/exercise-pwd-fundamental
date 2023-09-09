// Celcius to Fahrenheit
// INPUT
let celsiusTemperature = 36;

// PROCESS
let fahrenheitTemperature = celsiusTemperature * (9/5)  + 32 ;

// OUTPUT
console.log(`${celsiusTemperature} Celcius >> adalah ${fahrenheitTemperature} Fahrenheit`);


// ganjil genap
let angka = 10;
if (angka % 2 === 0) {
    console.log(`${angka} >> adalah angka Genap`);
} else {
    console.log(`${angka} >> adalah angka Ganjil`);
};

// Bilangan Prima
// INPUT
let angka1 = 7;
let kali = "";
// PROCESS
for (let i = 1; i <=angka1; i++) {
    console.log(i);
    if (angka1 % i === 0) {
        kali++;
        console.log(kali);
    }
}
if (kali === 2) {
    console.log(`${angka1} >> adalah bilangan prima`);
} else {
    console.log(`${angka1} >> adalah bukan bilangan prima`);
}

// NUMBER 1 TO N
let number = 5;
let jumlah = 0;

for (let i = 1; i <= number; i++) {
    // console.log(i);
    jumlah += i;
}
console.log(jumlah);


// FACTORIAL
let angkaA = 7;
let factor = 1;

for (let j = 1; j <= angkaA; j++) {
    // console.log(j);
    factor *= j;
}
console.log(factor);

// FIBONACCI
let fibo = 7;
let num1 = 0;
let num2 = 1;
let result = "";

for (let i = 1; i <= fibo; i++) {
    console.log(i);
    result += `${num1}`;
    let nextNum = num1 + num2;
    console.log(nextNum);

    num1 = num2
    num2 = nextNum
}
console.log(result);



// 
let baris = 5;
let kolom = 5;

for (let i = 0; i < baris; i++) {
  let perBaris = "";
  for (let j = 0; j < kolom; j++) {
    console.log(j);
    // if (j % 2 === 0) {
      perBaris += "#";
    // } else {
      perBaris += "*";
    }
  }
  console.log(perBaris);
// }
