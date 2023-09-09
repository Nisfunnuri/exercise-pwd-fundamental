// 1
// INPUT
let number = 9;

//PROCESS 
for (let i = 1; i <= 10; i++) {
// console.log(i)

// OUTPUT
console.log(`${number} x ${i}`);
};

// 2
// INPUT
let kata = "tamate";
let reverse = "";
let result = "";

// PROCESS
for (let i = kata.length - 1; i >= 0; i--) {
    reverse += kata.charAt(i)
}
console.log(reverse);
if (kata.toLowerCase() === reverse.toLowerCase()) {
    result = "Palindrome";
} else {
    result = "Non-Palindrome";
}
// OUTPUT
console.log(result);



// CM TO KM
// INPUT
let cm = 9000000;

// PROCESS
let hasil = cm / 100000;

// OUTPUT
console.log(`${cm} Cm = ${hasil} Km`);


// CURRENCY
//INPUT
let jumlahUang= 50000;

//PROCESS
const convertToEuro = jumlahUang.toLocaleString ("id", { style: "currency", currency: "EUR"}) ;

// OUTPUT
console.log(`${jumlahUang} >> ${convertToEuro} `);


// REMOVE THE FIRST OCCURENCE
// INPUT 
let inputKata = "Hello World";
let hurufYgDiHapus = "ello";
let index = inputKata.indexOf(hurufYgDiHapus);
// console.log(index);
let res = "";
// substring untuk extract (memecah salah satu kata/string)

// PROCESS
if (index != -1) {
    res += inputKata.substring(0, index) + inputKata.substring(index + hurufYgDiHapus.length)
    // console.log(hurufYgDiHapus.length);
    console.log(res); 
} 

// Write a code to capitalize the first letter of each word in a string

// INPUT
let kalimat= "hello world";
let result1 = "";
let cekHurufKapital = true;
//PROCESS
for (let i = 0; i < kalimat.length; i++) {
  let perHuruf = kalimat[i];
  console.log(perHuruf);

if (perHuruf === ' ') {
    cekHurufKapital = true;
    result1 += perHuruf;
    // console.log(result1);
}else {
  if (cekHurufKapital) {
      result1 += perHuruf.toUpperCase();
} else {
      result1 += perHuruf.toLowerCase();
}
    cekHurufKapital = false; 
  }
}
// OUTPUT
console.log(result1);


// Write a code to reverse a string
let text = "siapa";
let reverseText = "";

// PROCESS
for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text.charAt(i);
}
// OUTPUT
console.log(reverseText);


// // Write a code to swap the case of each character from string 
// >> Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX
// INPUT
let theText = "The QuiCk BrOwN Fox";
let hasilAkhir = "";

// PROCESS

for (let i = 0; i < theText.length; i++) {
    // console.log(i);
let perHuruff = theText[i];
    // console.log(perHuruff);

if (perHuruff === perHuruff.toUpperCase()) {
    hasilAkhir += perHuruff.toLowerCase();
} else {        
    hasilAkhir += perHuruff.toUpperCase();
    }
}
// OUTPUT
console.log(hasilAkhir);


// Write a code to find the largest of two given integers
// INPUT
let angka1 = 5;
let angka2 = 10;

// PROCESS
if(angka1 > angka2) {
    console.log(`${angka1} Lebih Besar dari ${angka2}`);
} else {
    console.log(`${angka1} Lebih Kecil dari ${angka2}`);
}

// Write a conditional statement to sort three numbers
// INPUT
let number1 = 32;
let number2 = 100;
let number3 = 90;

// PROCESS

if (number1 <= number2 && number1 <= number3) {
  if (number2 <= number3) {
    console.log(`Urutannya adalah >> ${number1}, ${number2}, ${number3}`);
  } else {
    console.log(`Urutannya adalah >> ${number1}, ${number3}, ${number2}`);
  }
} else if (number2 <= number1 && number2 <= number3) {
  if (number1 <= number3) {
    console.log(`Urutannya adalah >> ${number2}, ${number1}, ${number3}`);
  } else {
    console.log(`Urutannya adalah >> ${number2}, ${number3}, ${number1}`);
  }
} else {
  if (number1 <= number2) {
    console.log(`Urutannya adalah >> ${number3}, ${number1}, ${number2}`);
  } else {
    console.log(`Urutannya adalah >> ${number3}, ${number2}, ${number1}`);
  }
}

// if (number1 <= number2 && number2 <= number3) {
//     console.log(`Urutan dari terkecil ke terbeasar >> ${number1}, ${number2}, ${number3}`)
// } else if (number1 <= number3 && number3 <= number2) {
//     console.log(`Urutan dari terkecil ke terbeasar >> ${number1}, ${number2}, ${number3}`)
// } else if (number2 <= number1 && number1 <= number3) {
//     console.log(`Urutan dari terkecil ke terbeasar >> ${number1}, ${number2}, ${number3}`)
// } else if (number2 <= number3 && number3 <= number1) {
//     console.log(`Urutan dari terkecil ke terbeasar >> ${number1}, ${number2}, ${number3}`)
// } else if (number3 <= number1 && number1 <= number2) {
//     console.log(`Urutan dari terkecil ke terbeasar >> ${number1}, ${number2}, ${number3}`)
// } else if (number3 <= number2 && number2 <= number1) {
//     console.log(`Urutan dari terkecil ke terbeasar >> ${number1}, ${number2}, ${number3}`)
// } else {
//     console.log("Invalid Input");
// }




// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

// INPUT
let inputKarakter = null;

// PROCESS
if(typeof inputKarakter === "string") {
    console.log("1 >> input datanya adalah string");
} else if(typeof inputKarakter === "number") {
    console.log("2 >> input datanya adalah number");
} else {
    console.log("3 >> input datanya other data type/selain string dan number");
}

// Write a code to change every letter a into * from a string of input
// INPUT
let inputKalimat = "Aku adalah lelaki yang tak pernah lelah";
let result3 = "";
// PROCESS

for (let i = 0; i < inputKalimat.length; i++) {
  let perHurufff = inputKalimat[i];
//   console.log(perHurufff);
if (perHurufff === "a" || perHurufff === "A") {
    result3 += "*"
} else {
    result3 += perHurufff
}
}

// OUTPUT
console.log(result3);
