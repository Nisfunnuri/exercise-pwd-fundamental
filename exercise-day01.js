// LUAS PERSEGI PANJANG
// INPUT
let length = 4;
let width = 6;

// PROCESS
let hasil = length * width;

// OUTPUT
console.log("luas persegi panjang adalah >>", hasil);



// KELILING PERSEGI PANJANG 

// INPUT
let length1 = 5;
let width1 = 6;

// PROCESS
let hasil1 = 2 * (length1 + width1);

// OUTPUT
console.log("keliling persegi panjang adalah >>" ,hasil1);



// LINGKARAN
// INPUT
let jariJari = 21;

// PROCESS
let diameter = 2 * jariJari;
let circum = 2 * Math.PI * jariJari;
let area = Math.PI * jariJari * jariJari;

// // OUTPUT
console.log(`Jari-jari : ${jariJari}, Diameter : ${diameter}, Keliling : ${circum}, Luas : ${area}`); 
// console.log("diameter dari lingkaran >> ",diameter);
// console.log("keliling dari lingkaran >> ",circum);
// console.log("luas dari lingkaran >> ",area);



// TRIANGLE
// INPUT
let sudut1 = 45;
let sudut2 = 45;
let totalSudut = 180;

// PROCESS
let sudut3 = totalSudut - sudut1 - sudut2;

// OUTPUT
console.log("sudut ketiga adalah >>",sudut3);



// DIFFERENT DATES
// INPUT
let date = new Date("09/05/2023");
let oldDate = new Date("07/17/2023");
// PROCESS
let diff = date - oldDate;
let dateInMili = 1000 * 60 * 60 *24;
let diffDate = diff/dateInMili;
// OUTPUT
console.log(`selisih dari ${date} ke ${oldDate} adalah >> ${diffDate} Hari`);



// CONVERT DAY TO YEARS
// INPUT
let day = 900;
const dayToYear = 365;
const dayToMonth = 30

// PROCESS
let years = Math.floor(day / dayToYear);
let months = Math.floor(day % dayToYear / dayToMonth);
let days = Math.floor(day % dayToYear % dayToMonth);

// OUTPUT
console.log(`${day} Hari adalah >> ${years} Tahun ${months} Bulan ${days} Hari `)

