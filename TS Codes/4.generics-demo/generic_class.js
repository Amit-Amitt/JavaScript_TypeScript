var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.display = function () {
        return this.content;
    };
    return Box;
}());
var b1 = new Box(10);
var b2 = new Box("Hello");
console.log(b1.display());
console.log(b2.display());
