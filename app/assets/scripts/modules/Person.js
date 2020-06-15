class Person {
  constructor(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
  }
  greet() {
    console.log("Hello .. " + this.name + "and my color is " + this.favoriteColor + ".")
  }
}




//console.log("Hello .. " + this.name + "and my color is " + this.favoriteColor + ".")
export default Person