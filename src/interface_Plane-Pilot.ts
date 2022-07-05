// interface IPerson {
//     readonly name: string;
//     age: number;

//     greet(phrase: string): void;
//   }

//   interface IPilot {
//     flyMessage(): void;
//   }

//   class Pilot implements IPerson, IPilot {
//     constructor(public readonly name: string, public age: number) {
//       this.checkAge();
//     }

//     private checkAge() {
//       if (this.age < 28) {
//         throw new Error("Pilot too young");
//       }
//     }

//     public greet(phrase: string): void {
//       console.log(phrase + " " + this.name);
//     }

//     public flyMessage(): void {
//       console.log("The plane gained altitude, a pleasant flight!");
//     }
//   }

//   ////////////////

//   abstract class Plane {
//     protected pilot?: IPilot;

//     public sitInPlane(pilot: IPilot) {
//       this.pilot = pilot;
//     }

//     public abstract startEngine(): boolean;
//   }

//   class Boeing extends Plane {
//     public startEngine() {
//       if (!this.pilot) {
//         throw new Error("There is no pilot inside the plane");
//       }
//       console.log("Turbines start");

//       this.pilot.flyMessage();

//       return true;
//     }
//   }

//   class Terrorist implements IPilot {
//     bluff(phrase: string) {
//       console.log(phrase);
//     }
//     public flyMessage(): void {
//       console.log("Our requirements 10 billions!");
//     }
//   }

//   const boeing = new Boeing();
//   const pilot = new Terrorist();

//   boeing.sitInPlane(pilot);
//   pilot.bluff("We will capture this aircraft");
//   boeing.startEngine();

/////////////////////////////
// const pilot = new Pilot("Mykhailo", 42);

// pilot.greet("The pilot of the plane greets you");

// boeing.sitInPlane(pilot);

// boeing.startEngine();
