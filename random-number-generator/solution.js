//PROBLEM
//Write a program that creates a random number generator
//which only returns a unique number in a given range from 1 to n.
//for example, if the range is from 1 to 100, the number 2 cannot be returned twice.

//PHASE ONE: QUESTIONS & PSEUDOCODE

//PHASE TWO: CODE

class RandomNumberGenerator {
  constructor(n) {
    this.alreadyPicked = [];
    this.range = n;
    this.pickedNum = null;
  }
  generateNumber() {
    this.pickedNum = Math.floor(Math.random() * this.range + 1);

    if (!this.alreadyPicked.includes(this.pickedNum)) {
      this.alreadyPicked.push(this.pickedNum);
      console.log(`You've picked ${this.pickedNum}`);
    } else {
      if (this.alreadyPicked.length === this.range) {
        console.log("you've picked all the numbers, reset the generator");
      } else this.generateNumber();
    }
  }
  reset(n = this.range) {
    this.alreadyPicked = [];
    this.pickedNum = null;
    this.range = n;
    console.log(
      `you are reseting your instance of RNG with range 1 to ${this.range}`
    );
  }
}

//PHASE THREE: TEST
rng = new RandomNumberGenerator(4);
rng.generateNumber();
rng.generateNumber();
rng.generateNumber();
rng.generateNumber();
rng.generateNumber();

rng.reset();
