// class BaseClass {
//     constructor() {
//     }
// }
// class DerivedClass extends BaseClass {
//     constructor() {
//         super();
//     }
// }
//in typeScript extends keyword is used to inherit the base class or the parent class
//Derived classes that contain constructor functions uses super() to invoke the constructor in the base class.

// class Customer {
//     //fields
//     id: number;
//     name: string;
//     contact: number;
//     hasCard: boolean;
//     //constructor
//     constructor(id: number, name: string, contact: number);
//     constructor(id: number, name: string, contact: number, hasCard: boolean)
//     constructor(id: number, name: string, contact: number, hasCard?: boolean) {
//         this.id = id;
//         this.name = name;
//         this.contact = contact;
//         if (hasCard != undefined) {
//             this.hasCard = hasCard;
//         }
//         this.hasCard = false;
//     }
//     // function
//     RequestCard(): Boolean {
//         if (this.hasCard == false) {
//             this.hasCard = true;
//             return true;
//         }
//         return false;
//     }
// }
// class Account {
//     //fields
//     protected accountNumber: number;
//     public customer: Customer;
//     private balance: number;
//     //constructor
//     constructor(accountNumber: number, customer: Customer) {
//         this.accountNumber = accountNumber;
//         this.customer = name;
//         this.balance = 0;
//     }
//     Deposit(amount: number): boolean {
//         this.balance = this.balance + amount;
//         return true;
//     }
// }
// var customer: Customer = new Customer(1001, "John", 7204011993);
// console.log('customer Id:', customer.id);
// console.log('customer name:', customer.name);
// console.log('customer contact:', customer.contact);
// var account: Account = new Account(100123, customer );
// console.log(account.customer.name);
// console.log(account.accountNumber);
// console.log(account.balance);
//Observe the accountNumber in Account class is declared as protected and balance is declared as private in the line number 42 and 44 . In line 62 and 63 accessing the variables accountNumber and balance

// class Customer {
//     //fields
//     id: number;
//     name: string;
//     contact: number;
//     hasCard: boolean;
//     //constructor
//     constructor(id: number, name: string, contact: number);
//     constructor(id: number, name: string, contact: number, hasCard: boolean)
//     constructor(id: number, name: string, contact: number, hasCard?: boolean) {
//         this.id = id;
//         this.name = name;
//         this.contact = contact;
//         if (hasCard != undefined) {
//             this.hasCard = hasCard;
//         }
//         this.hasCard = false;
//     }
//     // function
//     RequestCard(): Boolean {
//         if (this.hasCard == false) {
//             this.hasCard = true;
//             return true;
//         }
//         return false;
//     }
// }
//  class Account {
//     //fields
//     protected accountNumber: number;
//     public customer: Customer;
//     private balance: number;
//     //constructor
//     constructor(accountNumber: number, customer: Customer) {
//         this.accountNumber = accountNumber;
//         this.customer = name;
//         this.balance = 0;
//     }

//     Deposit(amount: number): boolean {
//         this.balance = this.balance + amount;
//         return true;
//     }
// }
//  class Savings extends Account {
//     constructor(accountNumber: number, customer: Customer)
//     { super(accountNumber, customer); }
// }
// var customer: Customer = new Customer(1001, "John", 7204011993);
// console.log('customer Id:', customer.id);
// console.log('customer name:', customer.name);
// console.log('customer contact:', customer.contact);
// var account: Account = new Account(100123, customer );
// var savingsAccount: Savings = new Savings(200123, customer);
// Observe the savings class uses the extends keyword to inherit from the parent class, super() is used to invoke the parent constructor.

//In order to display the balance after withdraw and deposit, modify the code to define the get and set property for the balance variable of account class as it is marked as private. Also include the code to invoke the deposit method and display the balance.
class Customer {
  //fields
  id: number;
  name: string;
  contact: number;
  hasCard: boolean;
  //constructor
  constructor(id: number, name: string, contact: number);
  constructor(id: number, name: string, contact: number, hasCard: boolean);
  constructor(id: number, name: string, contact: number, hasCard?: boolean) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    if (hasCard != undefined) {
      this.hasCard = hasCard;
    }
    this.hasCard = false;
  }
  // function
  RequestCard(): Boolean {
    if (this.hasCard == false) {
      this.hasCard = true;
      return true;
    }
    return false;
  }
}

class Account {
  //fields
  protected accountNumber: number;
  public customer: Customer;
  private _balance: number;
  get balance(): number {
    return this._balance;
  }
  set balance(balance: number) {
    this._balance = balance;
  }
  //constructor
  constructor(accountNumber: number, customer: Customer) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = 0;
  }
  Deposit(amount: number): boolean {
    this.balance = this.balance + amount;
    return true;
  }
}
class Savings extends Account {
  constructor(accountNumber: number, customer: Customer) {
    super(accountNumber, customer);
  }
}
var customer: Customer = new Customer(1001, "John", 7204011993);
console.log("customer Id:", customer.id);
console.log("customer name:", customer.name);
console.log("customer contact:", customer.contact);
var account: Account = new Account(100123, customer);
var savingsAccount: Savings = new Savings(200123, customer);
// deposit to savings account
savingsAccount.Deposit(10000);
console.log("Balance after deposit ", savingsAccount.balance);
