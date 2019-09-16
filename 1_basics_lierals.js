/* console.log(window);
console.log(navigator.appVersion); */
/* window.alert(1); */

// Object Literal
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));
