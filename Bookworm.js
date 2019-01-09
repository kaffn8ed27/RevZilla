class Book {
    constructor({ title, author, genre }) {
        this.title = title
        this.author = author
        this.genre = genre
        this.available = true
    }
}

class Bookworm {
    constructor({ name, favoriteGenre }) {
        this.name = name
        this.favoritGenre = favoriteGenre
        this.booksOut = 0
        this.maxBooksOut = 3
    }

    checkOutBook(library = {}) {
        for (let book of library) {
            if (book.genre === this.favoritGenre) {
                if (book.available === true) {
                    if (this.booksOut < this.maxBooksOut) {
                        this.booksOut += 1
                        book.available = false
                        return (
                            console.log(`${this.name} says, 'I just checked out ${book.title} by ${book.author}!'`),
                            console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`))
                    } else {
                        return (
                            console.log(`${this.name} says, 'I want ${book.title} by ${book.author}, but I have too many books out already.'`),
                            console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`))
                    }
                }
            }
        }
        return (
            console.log(`${this.name} says, 'I didn't find any books I like.`),
            console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`))
    }
}

async function stockLibrary(books = []) {
    // fill the library with books
    var library = []
    for (let book of books) {
        library.push(book)
    }
    return library
}


let Kiss = new Book({ title: 'Kiss an Angel', author: 'Susan Elizabeth Phillips', genre: 'romance' })
let Grok = new Book({ title: 'Stranger in a Strange Land', author: 'Robert A. Heinlein', genre: 'sci-fi' })
let BigBrother = new Book({ title: '1984', author: 'George Orwell', genre: 'sci-fi' })
let BladeRunner = new Book({ title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', genre: 'sci-fi' })
let TheyRemember = new Book({ title: 'Jurassic Park', author: 'Michael Crichton', genre: 'sci-fi' })

stockLibrary([Grok, BigBrother, BladeRunner, Kiss, TheyRemember]).then((library) => {
    let Cindy = new Bookworm({ name: 'Cindy', favoriteGenre: 'romance' })
    let Patricia = new Bookworm({ name: 'Patricia', favoriteGenre: 'sci-fi' })
    Cindy.checkOutBook(library)
    Cindy.checkOutBook(library)
    console.log()
    Patricia.checkOutBook(library)
    Patricia.checkOutBook(library)
    Patricia.checkOutBook(library)
    Patricia.checkOutBook(library)
})
