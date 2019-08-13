var numbers = [12,23,54,45,67,44,34];

var evenNumbers = numbers.filter(function(num){
    return num%2==0
})
console.log(evenNumbers);