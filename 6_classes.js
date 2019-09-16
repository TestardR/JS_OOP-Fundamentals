class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  revise(newYear) {
    this.year = newYear;
  }

  static topBookStore() {
    console.log("Barnes & Noble");
  }
}

const book1 = new Book("My life", "Romain", "2014");

/* console.log(book1);
console.log(book1.getSummary());
console.log(book1.revise("2020"));
console.log(book1.getSummary());
 */

Book.topBookStore();
