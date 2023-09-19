class Employee {
    constructor(_name, _age, _gender, _job) {
        this.name = _name;
        this.age = _age;
        this.gender = _gender;
        this.job = _job;
    }
}
console.log(new Employee("Rendi", 25, "Man", "Coder"));

class Fulltime extends Employee{
    
        // this.dayliHour = _dayliHour;
        // this.dayliSalary = _dayliSalary;
        #salary = {
            typeA: 100000,
            typeB: 75000,
        };
        #attendance = [];
        constructor(_name, _age, _gender, _job,) {
            super(_name, _age, _gender, _job)
    }

    addAttendance = (clockIn, clockOut) => {
        console.log(clockIn);
        console.log(clockOut);
        // this.attendance.push({clockIn, clockOut})
        // this.attendance.push({clockIn: clockIn, clockOut:clockOut}) //atau seperti ini
        console.log(clockIn.split(":"));
        console.log(clockOut.slice(0, 2));
        let data = {
            in: clockIn,
            out: clockOut,
            dayliHour: parseInt(clockOut.split(":")[0]) - parseInt(clockIn.split(":")[0]),
            
        };
        console.log(data.dayliHour);
        let overtime = data.dayliHour - 6;
        console.log(overtime);
        
        if (overtime > 0 ){
            data.dailySalary = 6 * this.#salary.typeA + overtime * this.#salary.typeB
            console.log(data.dailySalary);
        } else {
            data.dailySalary = data.dayliHour * this.#salary.typeA;
            console.log(data.dailySalary);
        }
        this.#attendance.push(data);
    };

    viewAttendance = () => {
        return this.#attendance;
    }

    totalSalary = () =>{
        let total = 0;
        // cara 1
        for (let index = 0; index < this.#attendance.length; index++) {
            total += this.#attendance[index].dailySalary
            
        }

        //cara 2
        // this.attendance.forEach((val) => {
        //     total+= val.dailySalary;
        // });
        return total;
        console.log(total);
    }
}

class Parttime extends Employee{
    
    // this.dayliHour = _dayliHour;
    // this.dayliSalary = _dayliSalary;
    #salary = {
        typeA: 50000,
        typeB: 30000,
    };
    #attendance = [];
    constructor(_name, _age, _gender, _job,) {
        super(_name, _age, _gender, _job)
}

addAttendance = (clockIn, clockOut) => {
    console.log(clockIn);
    console.log(clockOut);
    // this.attendance.push({clockIn, clockOut})
    // this.attendance.push({clockIn: clockIn, clockOut:clockOut}) //atau seperti ini
    console.log(clockIn.split(":"));
    console.log(clockOut.slice(0, 2));
    let data = {
        in: clockIn,
        out: clockOut,
        dayliHour: parseInt(clockOut.split(":")[0]) - parseInt(clockIn.split(":")[0]),
        
    };
    console.log(data.dayliHour);
    let overtime = data.dayliHour - 6;
    console.log(overtime);
    
    if (overtime > 0 ){
        data.dailySalary = 6 * this.#salary.typeA + overtime * this.#salary.typeB
        console.log(data.dailySalary);
    } else {
        data.dailySalary = data.dayliHour * this.#salary.typeA;
        console.log(data.dailySalary);
    }
    this.#attendance.push(data);
};

viewAttendance = () => {
    return this.#attendance;
}

totalSalary = () =>{
    let total = 0;
    // cara 1
    for (let index = 0; index < this.#attendance.length; index++) {
        total += this.#attendance[index].dailySalary
        
    }

    //cara 2
    // this.attendance.forEach((val) => {
    //     total+= val.dailySalary;
    // });
    return total;
    // console.log(total);
}
}

let employeeFulltime = [
    new Fulltime ("Sulis", 20, "Woman", "Admission"),
    new Fulltime ("Siti", 27, "Woman", "Front-end"),
    new Fulltime ("Aisah", 23, "Woman", "Back-end"),
]
let employee1 = new Fulltime("Sulis", 20, "Woman", "Admission");
employee1.addAttendance("09:00", "16:00") //Day01
employee1.addAttendance("10:00", "11:00"); //Day02
console.log(employee1);
console.log(employee1.viewAttendance());
console.log(employee1.totalSalary());


let employeParttime = new Parttime("Aisah", 23, "Woman", "Back-end");

employeParttime.addAttendance("09:00", "16:00") //Day01
employeParttime.addAttendance("09:00", "17:00") //Day01
console.log(employeParttime.viewAttendance());
console.log(employeParttime.totalSalary());