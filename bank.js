class BankAccount {
  constructor(accountNo, holderName, balance) {
    this.accountNo = accountNo;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposited:", amount);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log("Withdrawn:", amount);
    }
  }

  displayBalance() {
    console.log("Account No:", this.accountNo);
    console.log("Holder Name:", this.holderName);
    console.log("Balance:", this.balance);
    console.log("----------------");
  }

  static bankInfo() {
    console.log("Bank Name: ABC Bank");
    console.log("Banking services include deposits, withdrawals and loans.");
  }
}

let a1 = new BankAccount(1001, "Arnav", 10000);
let a2 = new BankAccount(1002, "Rahul", 5000);

BankAccount.bankInfo();

a1.deposit(2000);
a1.withdraw(3000);
a1.displayBalance();

a2.deposit(1000);
a2.withdraw(7000);
a2.displayBalance();
