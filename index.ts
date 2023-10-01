const enum Color { Red, Green, Blue };  //starts with 0
var c: Color = Color.Green;

const enum Color1 { Red, Green, Blue };
var colorName: Color = Color["Green"];   //Not allowed with const enums
console.log(colorName);

const enum Color2 { Red = 1, Green = 2, Blue = 3 };  //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);