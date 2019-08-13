"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User1 = /** @class */ (function () {
    function User1(_firstname, _lastname, _age, _salary) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._age = _age;
        this._salary = _salary;
    }
    Object.defineProperty(User1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "name", {
        get: function () {
            return this._firstname;
        },
        set: function (name) {
            this._firstname = name;
        },
        enumerable: true,
        configurable: true
    });
    return User1;
}());
exports.User1 = User1;
var emp = new User1("Rakesh", 'Kumar', 20, 2000);
emp.name = "Harish";
console.log("Name is " + emp.name);
//  tsc Employee.ts --target es5
