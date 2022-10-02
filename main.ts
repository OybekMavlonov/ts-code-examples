const myString: string = "Hello";

// Type Aliases
type Product = {
  name: string;
  price: number;
};

const tshirt: Product = {
  name: "fasda",
  price: 12,
};

// Interfaces
interface InventoryItem {
  name: string;
  price: number;
}
interface ProductInterface extends InventoryItem {
  color?: string;
}
interface Service extends InventoryItem {
  startTime: Date;
  endTime: Date;
}
// interface ProductInterface {
//     color?: string,
// }
const shirt: ProductInterface = {
  name: "fasda",
  price: 12,
};

const photoshoot: Service = {
  startTime: new Date(),
  endTime: new Date(),
  name: "fda",
  price: 342,
};

function purchaseItem(item: InventoryItem): InventoryItem {
  console.log(item.price);
  return item;
}

purchaseItem({
  name: "fad",
  price: 321,
});
purchaseItem(photoshoot);

// Enums
enum Sizes {
  small,
  medium = "medium",
  large = "large",
}

// Classes
interface Emailable {
  emailBody(): string;
  emailSubject(): string;
}

class InventoryItemClass {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    (this.name = name), (this.price = price);
  }

  buy(): this {
    return this;
  }
}

class Product2 extends InventoryItemClass {
  color: string = "gray";
  size: Sizes | undefined;
}

class Service2 extends InventoryItemClass implements Emailable {
  startTime: Date;
  endTime: Date;

  constructor(name: string, price: number, startTime: Date, endTime: Date) {
    super(name, price);
    (this.startTime = startTime), (this.endTime = endTime);
  }
  emailBody() {
    return "fsad";
  }
  emailSubject() {
    return "fsad";
  }
}

function sendEmail(emailable: Emailable, to: string) {
  console.log(to);
}

const aa = new Product2("fgds", 432);
aa.size = Sizes.medium;
aa.color = "green";
aa.buy();

const pShoot = new Service2(
  "fda",
  32,
  new Date("October 2, 2022"),
  new Date("October 1, 2022")
);
pShoot.buy();

sendEmail(pShoot, "fdasdf");

// Type Assertions
const theCanvas = document.getElementById("the-canvas") as HTMLCanvasElement;

function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `${netPrice}` : netPrice;
}

// const netPrice = getNetPrice(20,10,true) as string
const netPrice = <string>getNetPrice(20, 10, true);

// Generics
interface Person {
  name: string;
  age: number;
}

const me: Person = {
  name: "Oybek",
  age: 23,
};

const clone = <T>(value: T): T => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
};

const books: string[] = ["a", "v", "f"];
const bookCopies = clone(books);
bookCopies.push("f");
