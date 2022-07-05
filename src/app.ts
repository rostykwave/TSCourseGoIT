class House {
  street: string;

  constructor(n: string) {
    this.street = n;
  }

  showAddress(this: House, add: string): void {
    console.log("Address: " + this.street + " " + add);
  }
}

const house = new House("Bandery");

// house.showAddress();

const copyHouse = { showAddress: house.showAddress, street: "Konovaltsya" };

copyHouse.showAddress("street");
