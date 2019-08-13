export class User1{

    constructor(private _firstname:string, private _lastname:string, private  _age?:number,  private _salary?:number){}

    get age():number{
        return this._age;
    }

    set age(age:number){
        this._age = age;
    }

    get name():string{
        return this._firstname;
    }

    set name(name:string){
        this._firstname = name;
    }
}

const emp:User1 = new User1("Rakesh",'Kumar',20,2000);

emp.name = "Harish";
console.log(`Name is ${emp.name}`);

//  tsc Employee.ts --target es5