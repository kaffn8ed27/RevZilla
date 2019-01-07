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
        this.maxBooksOut = 5
    }

    checkOutBook(library) {
        for (let book of library) {
            if (book.genre === this.favoritGenre) {
                if (book.available === true) {
                    if (this.booksOut < this.maxBooksOut) {
                        this.booksOut += 1
                        book.available = false
                        console.log(`${this.name} says, 'I just checked out ${book.title} by ${book.author}!'`)
                    } else {
                        console.log(`${this.name} says, 'I want ${book.title} by, but I have too many books out already.'`)
                    }
                } else {
                    console.log(`${this.name} says, 'I want to read ${book.title}, but it's checked out.'`)
                }
            } else {
                console.log(`${this.name} says, 'I couldn't find any books I liked.'`)
            }
            return console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`)
        }
    }
}

async function stockLibrary() {
    // fill the library with books
}

let Patricia = new Bookworm({ name: 'Patricia', favoriteGenre: 'sci-fi' })
let Cindy = new Bookworm({ name: 'Cindy', favoriteGenre: 'romance' })

let Grok = new Book({ title: 'Stranger in a Strange Land', author: 'Robert A. Heinlein', genre: 'sci-fi' })
let BigBrother = new Book({ title: '1984', author: 'George Orwell', genre: 'sci-fi' })
let BladeRunner = new Book({ title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', genre: 'sci-fi' })
let Kiss = new Book({ title: 'Kiss an Angel', author: 'Susan Elizabeht Phillips', genre: 'romance' })

let Library = stockLibrary()

Patricia.checkOutBook(Library)
Cindy.checkOutBook(Library)

// Patricia.checkOutBook(Library)
// Patricia.checkOutBook(Library)
// Patricia.checkOutBook(Library)

// Cindy.checkOutBook(Library)