class Human {

  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    console.log('h-a-a-a-m');
  }
}

class Zero extends Human {
  constructor(type, fristName, lastName) {
    super(type);
    this.fristName = fristName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    console.log(this.fristName, this.lastName);
  }
}

const newZero = new Zero('human', 'Zero', 'cho');
newZero.breathe();
newZero.sayName();
console.log(Human.isHuman(newZero));                //true
