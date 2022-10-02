var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = "Hello";
var tshirt = {
    name: "fasda",
    price: 12
};
// interface ProductInterface {
//     color?: string,
// }
var shirt = {
    name: "fasda",
    price: 12
};
var photoshoot = {
    startTime: new Date(),
    endTime: new Date(),
    name: "fda",
    price: 342
};
function purchaseItem(item) {
    console.log(item.price);
    return item;
}
purchaseItem({
    name: "fad",
    price: 321
});
purchaseItem(photoshoot);
// Enums
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
var InventoryItemClass = /** @class */ (function () {
    function InventoryItemClass(name, price) {
        (this.name = name), (this.price = price);
    }
    InventoryItemClass.prototype.buy = function () {
        return this;
    };
    return InventoryItemClass;
}());
var Product2 = /** @class */ (function (_super) {
    __extends(Product2, _super);
    function Product2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "gray";
        return _this;
    }
    return Product2;
}(InventoryItemClass));
var Service2 = /** @class */ (function (_super) {
    __extends(Service2, _super);
    function Service2(name, price, startTime, endTime) {
        var _this = _super.call(this, name, price) || this;
        (_this.startTime = startTime), (_this.endTime = endTime);
        return _this;
    }
    Service2.prototype.emailBody = function () {
        return "fsad";
    };
    Service2.prototype.emailSubject = function () {
        return "fsad";
    };
    return Service2;
}(InventoryItemClass));
function sendEmail(emailable, to) {
    console.log(to);
}
var aa = new Product2("fgds", 432);
aa.size = Sizes.medium;
aa.color = "green";
aa.buy();
var pShoot = new Service2("fda", 32, new Date("October 2, 2022"), new Date("October 1, 2022"));
pShoot.buy();
sendEmail(pShoot, "fdasdf");
// Type Assertions
var theCanvas = document.getElementById("the-canvas");
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "".concat(netPrice) : netPrice;
}
// const netPrice = getNetPrice(20,10,true) as string
var netPrice = getNetPrice(20, 10, true);
var me = {
    name: "Oybek",
    age: 23
};
var clone = function (value) {
    var json = JSON.stringify(value);
    return JSON.parse(json);
};
var books = ["a", "v", "f"];
var bookCopies = clone(books);
bookCopies.push("f");
