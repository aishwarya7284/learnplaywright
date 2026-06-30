class bankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }

}

const bank = new bankAccount();
bank.deposit(11000);
console.log(bank.getBalance());