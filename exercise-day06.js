let object1 = {
    nama: "Rendi",
    age: 18,
}

let object2 = {
    nama: "Sambo",
    age: 35,

}
// function checkEqual(objA, objB) {
//     let data1= [];
//     let data2 = [];
//     let result ;
//     for (const key1 of objA) {
//         console.log(key1);
//         data1 = key1
//         console.log(data1);
//     }
//     for (const key2 of objB) {
//         console.log(key2);
//         data2 = key2
//         console.log(data2);
//     }
    
//     if( data1 === data2) {
//         return true
//     } else{
//         return false;
//     }
// }

const checkEqual = (parameter1, parameter2) => {
    let propertyList1 = Object.keys(parameter1);
    console.log(propertyList1);
    let propertyList2 = Object.keys(parameter2);
    console.log(propertyList2);

    if(propertyList1.length === propertyList2.length) {
        // return "Equal";
        let check = [];
        for (let i = 0; i < propertyList1.length; i++) {
            console.log(propertyList1[i]);
            console.log(propertyList2[i]);
            if (propertyList1[i] === propertyList2[i]) {
                console.log(propertyList1[i] === propertyList2[i]);
                check.push (true)
            } else {
                console.log(propertyList1[i] === propertyList2[i]);
                check.push (false)
            }
        }

        if (check.includes(false)) {
            return "NOT-Equal"
        } else {
            return "EQUAL"
        }

    } else {
        return "NOT-Equal";
    }

}
console.log(checkEqual(object1, object2));


let angka1 = {
    a: 1,
    b: 2,
    c: 3,
}
let angka2 = {
    d: 4,
    a: 1,
    e: 9
}


function intersection(obj1, obj2) {

let intersection = {};

for (const keyy in obj1) {
    // console.log(obj1);
    // console.log(obj2);
    console.log(keyy);
    if( obj2[keyy] === obj1[keyy]) {
        console.log(obj2[keyy]);
        intersection[keyy] = obj1[keyy]
        console.log(intersection[keyy]);
    }
}
return intersection
}
console.log(intersection(angka1, angka2));

let Array1 = [
    { name: "Student 1", email : "student1@mail.com" }, 
    { name: "Student 2", email : "student2@mail.com" }
    ]
let Array2 = [
    { name: "Student 1", email : "student1@mail.com" }, 
    { name: "Student 3", email : "student3@mail.com" }
    ]

function removeDuplicate(arr1, arr2) {
    let result = [];
    let newArray1 = [];
    let newArray2 = [];

    for (const keyValue of arr1) {
        console.log(keyValue);
        newArray1 = keyValue
    }

    for (const keyValue2 of arr2){
        console.log(keyValue2);
        newArray2 = keyValue2
    }

    if (keyValue === keyValue2){
        result.push++
    }
}

console.log(removeDuplicate(Array1, Array2));







// function removeDuplicate(arr1, arr2) {
//     let result = arr1.concat(arr2);
  
//     result = result.filter((item1, index) => {
//       const isDuplicate = result.findIndex((item2, i) => {
//         return i !== index && item1.name === item2.name && item1.email === item2.email;
//       }) === -1;
  
//       return isDuplicate;
//     });
  
//     return result;
//   }
  
//   let uniqueArray = removeDuplicate(Array1, Array2);
//   console.log(uniqueArray);
  