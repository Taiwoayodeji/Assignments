class Book {
  constructor(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
  }

  getSummary() {
    return `Title: [${this.title}], Author: [${this.author}], Genre: [${this.genre}], Year: [${this.year}]`;
  }
}

let mybook = new Book("Amazing Grace", "Sean Bryan", "Religious", "2003");

console.log(mybook.title);
console.log(mybook.author);
console.log(mybook.getSummary());

document.getElementById("bookDetails").innerHTML = `
  <p><strong>Title:</strong> ${mybook.title}</p>
  <p><strong>Author:</strong> ${mybook.author}</p>
  <p><strong>Summary:</strong> ${mybook.getSummary()}</p>
`;
