const path = require('path');
const ScoreCounter = require('score-tests');
const { Circle, BankAccount } = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('Circle - constructor function adds only instance properties to each instance, not methods', () => {
    const radius1 = 4;
    const color1 = 'red';
    const circle1 = new Circle(radius1, color1);
    expect(circle1).toEqual({ radius: radius1, color: color1 });

    const radius2 = 8;
    const color2 = 'green';
    const circle2 = new Circle(radius2, color2);
    expect(circle2).toEqual({ radius: radius2, color: color2 });

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - getArea correctly returns the area of the circle', () => {
    const radius1 = 13;
    const color1 = 'white';
    const circle1 = new Circle(radius1, color1);
    expect(circle1.getArea()).toEqual(Math.PI * radius1 ** 2);

    const radius2 = 7;
    const color2 = 'pink';
    const circle2 = new Circle(radius2, color2);
    expect(circle2.getArea()).toEqual(Math.PI * radius2 ** 2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - getCircumference correctly returns the circumference of the circle', () => {
    const radius1 = 91;
    const color1 = 'gray';
    const circle1 = new Circle(radius1, color1);
    expect(2 * Math.PI * radius1).toEqual(circle1.getCircumference());

    const radius2 = 12;
    const color2 = 'yellow';
    const circle2 = new Circle(radius2, color2);
    expect(2 * Math.PI * radius2).toEqual(circle2.getCircumference());

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - draw returns the right message with color of the circle', () => {
    const radius1 = 3;
    const color1 = 'purple';
    const circle1 = new Circle(radius1, color1);
    expect(circle1.draw()).toEqual(`Drawing a ${color1} circle.`);

    const radius2 = 1;
    const color2 = 'orange';
    const circle2 = new Circle(radius2, color2);
    expect(circle2.draw()).toEqual(`Drawing a ${color2} circle.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - changeColor changes the color of the circle and returns the new color', () => {
    const radius1 = 91;
    const color1 = 'purple';
    const circle1 = new Circle(radius1, color1);
    expect(circle1.color).toEqual(color1);

    const newColor1 = 'blue';
    expect(circle1.changeColor(newColor1)).toEqual(newColor1);
    expect(circle1.color).toEqual(newColor1);

    const radius2 = 12;
    const color2 = 'orange';
    const circle2 = new Circle(radius2, color2);
    expect(circle2.color).toEqual(color2);

    const newColor2 = 'green';
    circle2.changeColor(newColor2);
    expect(circle2.color).toEqual(newColor2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - adds methods to the prototype', () => {
    const circle1 = new Circle(10, 'yellow');
    const circlePrototype = Object.getPrototypeOf(circle1);
    expect(Object.getOwnPropertyNames(circlePrototype).sort()).toEqual([
      'changeColor',
      'constructor',
      'draw',
      'getArea',
      'getCircumference',
    ]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - constructor function only adds PUBLIC instance properties to each instance, not private properties or methods', () => {
    const firstName1 = 'John';
    const lastName1 = 'Doe';
    const balance1 = 100;
    const bankAccount1 = new BankAccount(firstName1, lastName1, balance1);
    expect(bankAccount1).toEqual({ firstName: firstName1, lastName: lastName1 });

    const firstName2 = 'Jane';
    const lastName2 = 'Doe';
    const balance2 = 200;
    const bankAccount2 = new BankAccount(firstName2, lastName2, balance2);
    expect(bankAccount2).toEqual({ firstName: firstName2, lastName: lastName2 });

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - showBalance returns a message of the balance to two decimal places', () => {
    const balance1 = 100;
    const bankAccount1 = new BankAccount('Bob', 'Robertson', balance1);
    expect(bankAccount1.showBalance()).toEqual(`Your balance is ${balance1.toFixed(2)}`);

    const balance2 = 200;
    const bankAccount2 = new BankAccount('Sarah', 'Haras', balance2);
    expect(bankAccount2.showBalance()).toEqual(`Your balance is ${balance2.toFixed(2)}`);
    
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - defaults to a balance of 0 if a balance is not provided', () => {
    const bankAccount = new BankAccount('John', 'Doe');
    const balanceMsg = `Your balance is 0.00`;
    expect(bankAccount.showBalance()).toEqual(balanceMsg);
    
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - deposit adds the amount to the balance and returns a message of the balance', () => {
    const balance1 = 100;
    const amount1 = 50;
    const msg1 = `Your balance is ${(balance1 + amount1).toFixed(2)}`;
    const bankAccount1 = new BankAccount('Bob', 'Robertson', balance1);
    expect(bankAccount1.deposit(amount1)).toEqual(msg1);
  
    const amount2 = 12.34;
    const msg2 = `Your balance is ${(balance1 + amount1 + amount2).toFixed(2)}`;
    expect(bankAccount1.deposit(amount2)).toEqual(msg2);

    const balance2 = 200;
    const amount3 = 100;
    const bankAccount2 = new BankAccount('Sarah', 'Haras', balance2);
    const msg3 = `Your balance is ${(balance2 + amount3).toFixed(2)}`;
    expect(bankAccount2.deposit(amount3)).toEqual(msg3);
    
    const amount4 = 12.34;
    const msg4 = `Your balance is ${(balance2 + amount3 + amount4).toFixed(2)}`;
    expect(bankAccount2.deposit(amount4)).toEqual(msg4);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - withdraw subtracts the amount from the balance and returns a message of the balance', () => {
    const balance1 = 100;
    const amount1 = 50;
    const msg1 = `Your balance is ${(balance1 - amount1).toFixed(2)}`;
    const bankAccount1 = new BankAccount('Bill', 'Bryers', balance1);
    expect(bankAccount1.withdraw(amount1)).toEqual(msg1);
    const amount2 = 11.25;
    
    const msg2 = `Your balance is ${(balance1 - amount1 - amount2).toFixed(2)}`;
    expect(bankAccount1.withdraw(amount2)).toEqual(msg2);
    
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - withdraw does not withdraw if the amount is greater than the balance', () => {
    const balance = 100 + (Math.random() * 100);

    const amount = balance * 2;
    console.log(BankAccount.getTotalHoldings())
    const msg = `You do not have enough funds.`;
    const bankAccount = new BankAccount('Simon', 'Sky', balance);
    expect(bankAccount.withdraw(amount)).toBe(msg);
    const msg2 = `Your balance is ${balance.toFixed(2)}`;
    expect(bankAccount.showBalance()).toBe(msg2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - adds only methods to the prototype', () => {
    const bankAccount = new BankAccount('Simon', 'Sky');
    const bankAccountPrototype = Object.getPrototypeOf(bankAccount);
    expect(Object.getOwnPropertyNames(bankAccountPrototype).sort()).toEqual([
      'constructor',
      'deposit',
      'showBalance',
      'withdraw',
    ]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('BankAccount - tracks total holdings accross all BankAccount instances', () => {
    const account1 = new BankAccount('John', 'a');
    const account2 = new BankAccount('Jane', 'b');
    const currentHoldings = BankAccount.getTotalHoldings();
   
    // The current holdings will be !== 0 because of the prior tests utilizing
    // The deposit and withdraw instance methods.
  

    account1.deposit(5);
    
    account2.deposit(10);
    
    const valueAfterDeposit = Number((currentHoldings + 15).toFixed(2));
    expect(BankAccount.getTotalHoldings()).toEqual(valueAfterDeposit);

    account1.withdraw(10); // this shouldn't change the holdings
    expect(BankAccount.getTotalHoldings()).toEqual(valueAfterDeposit);

    account1.withdraw(2);
    expect(BankAccount.getTotalHoldings()).toEqual(valueAfterDeposit - 2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
