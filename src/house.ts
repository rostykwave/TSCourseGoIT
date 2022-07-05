// class House {
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) {}

//   public showAddress(this: House): void {
//     console.log("Address: " + this.street);
//   }

//   public showType(this: House): void {
//     console.log("Type: " + this.type);
//   }

//   public addTenant(name: string) {
//     this.tenants.push(name);
//   }

//   public showTenants(): void {
//     console.log(this.tenants);
//   }
// }

// const house = new House("brick", "Bandery");

// // house.addTenant("Marry");
// // house.addTenant("Nick");

// // console.log(house.type);

// // house.showTenants();
// // house.showAddress();
// // house.showType();

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;
//   constructor(street: string, general: string) {
//     super("stone", street);
//     this.chargeOfTheHouse = general;
//   }

//   public showAddress(): void {
//     console.log("Address: " + this.street);
//   }

//   public showTenants(): void {
//     console.log("General: " + this.chargeOfTheHouse);
//     super.showTenants();
//   }
// }

// const stonehouse = new StoneHouse("Mazepy", "Ivan");

// stonehouse.addTenant("Rost");
// stonehouse.addTenant("Julia");

// stonehouse.showTenants();
// stonehouse.showType();
// stonehouse.showAddress();
