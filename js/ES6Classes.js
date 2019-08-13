class Employee1 {

    constructor(firstname, lastname){
        this.firstName = firstname;
        this.lastName = lastname;
    }

    getFirstName(){
        return this.firstName;
    }
    setFirstName(firstName){
            this.firstName = firstName;
    }
    getLastName(){
        return this.lastName;
    }
    setLastName(lastName){
            this.lastName = lastName;
    }

    printEmpDesc(){

        console.log(`FirstName: ${this.firstName} LastName: ${this.lastName}`);
    }
}

let vinay = new Employee1('vijay','kannuri');
console.log(vinay.getFirstName());