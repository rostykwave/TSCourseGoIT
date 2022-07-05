// interface IPerson {
//   readonly name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge();
//   }

//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error("Pilot too young");
//     }
//   }

//   public greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }

//   public flyMessage(): void {
//     console.log("The plane gained altitude, a pleasant flight!");
//   }
// }

// const pilot = new Pilot("Mykhailo", 42);

// pilot.greet("The pilot of the plane greets you");
// pilot.flyMessage();
