// Object Of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

// Create Object
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "John Doe";
book1.year = "2013";

// Should work
/* const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "John Doe" },
  year: { value: "2013" }
}); */

console.log(book1);
console.log(book1.getSummary());
