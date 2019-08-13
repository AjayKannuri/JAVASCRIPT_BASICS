var ages = [23,45,12,45,24,67,43];

var ageGT35Fun = function(age){
    return age>35;
}

var ageGT35 = ages.filter(ageGT35Fun)

console.log(ageGT35);



var employee = [
    {
        id:12,
        dep:"hr",
        salary : 12000,
        name : "kumar"
    },
    {
        id:2,
        dep:"finance",
        salary : 2000,
        name : "naveen"
    },
    {
        id:3,
        dep:"hr",
        salary : 1000,
        name : "amir"
    },
    {
        id:4,
        dep:"finance",
        salary : 6000,
        name : "ram"
    },
    {
        id:5,
        dep:"hr",
        salary : 1200,
        name : "abhar"
    },
    {
        id:6,
        dep:"finance",
        salary : 900,
        name : "rahim"
    },
    {
        id:7,
        dep:"hr",
        salary : 800,
        name : "varun"
    }


];

var sum=0;
sum2=0;
 var result= employee.filter(function(val,index,employee){
            if(val.dep==='hr')
            sum = sum +val.salary;
            else
            sum2=sum2 + val.salary;

    });
    console.log("the sum of all hrs is "+ sum);
    console.log("the sum of all finance is "+sum2);




    var employees=[]
 employees[0]={name:"George", id:32, dep: "HR", salary: 30000}
 employees[1]={name:"Edward", id:17, dep: "HR", salary: 30000}
 employees[2]={name:"Christine", id:58, dep: "IT", salary: 32000}
 employees[3]={name:"Sarah", id:62, dep: "IT", salary: 30000}

var result = employees.filter(function(employees){
return employees.dep == "IT"
})
.map(function(employees){
    return employees.salary
})
.reduce(function(o,n){
    return o+n;
});

console.log(result);
