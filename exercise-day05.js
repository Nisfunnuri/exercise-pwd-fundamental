// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// with sort
// 1. Membuat fungsi
const getLowHighAvg = (array) => {
// 2. untuk mengolah data array
// 2.a mengurutkan data array dari kecil ke besar
let newArray = array.sort((a, b) => a-b);
console.log(newArray);
// 2.b. mengakses data paling kecil dan mengakses data paling besar
let low = newArray[0];
let high = newArray[newArray.length -1];
console.log(low, high);
// 2.c. menghitung avg daari seluruh data pada array
// 2.c.1 variable penampung total penjumlahan
let total = 0;
// 2.c.2 mengakses data array satu persatu
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
// 2.c.3 di jumlahkan variable penampung total
    total += array[index]
}
console.log(total);
// 2.c.4 setelah di jumlahkan di cari avg(total/banyak data)
let avg = total/array.length;
console.log(avg);
return `Lowest : ${low}, Avg : ${avg}, High : ${high}`
}
console.log(getLowHighAvg([5, 6, 7, 8, 9]));

// without sort
// 1. membuat fungsi
const getLowHighAvgNoSort = (array) => {
    // 2. mengolah data array
    let total = 0;
    let low = array[0];
    let high = array[0];
        // 2. a mengakses data array satu persatu
    for (let index = 0; index < array.length; index++) {
        total += array[index]
        console.log( array[index]);
        console.log(low, ">", array[index]);
        if( low > array[index]) {
            low = array[index]
        } else if (high < array[index]) {
            // console.log(high)
            high = array[index];
            // console.log(high);
        }
        
    }
    let avg = total / array.length;
    return `Lowest : ${low}, Avg : ${avg}, High : ${high}`
    console.log(low);
    console.log(high);
    console.log(avg);
};
// 2. mengolah data array
console.log(getLowHighAvgNoSort([6, 1, 8, 2, 12]));





let inputWord = "Hello word my name is"

function splitWord(text) {
    let result = [];
    let word = "";

    for (letter of text) {
        console.log(letter);

        if(letter !=  " ") {
            word += letter;
        } else if(letter == " ") {
            result.push(word);
            word = "";
        }
    }
    result.splice(result.push(word));
    return result;
}
console.log(splitWord(inputWord));