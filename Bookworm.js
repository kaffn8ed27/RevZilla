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

    checkOutBook(library = []) {
        for (let book in library) {
            if (book.genre === this.favoritGenre) {
                if (book.available === true) {
                    if (this.booksOut < this.maxBooksOut) {
                        this.booksOut += 1
                        book.available = false
                        console.log(`${this.name} says, 'I just checked out ${book.title} by ${book.author}!'`)
                        break
                    } else {
                        console.log(`${this.name} says, 'I want ${book.title} by, but I have too many books out already.'`)
                        break
                    }
                }
            }
        }
       return console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`)
    }
}

async function stockLibrary(books = {}) {
    // fill the library with books
    var library = []
    for (let book of books) {
        library.push(book)
    }
    return library
}


let Grok = new Book({ title: 'Stranger in a Strange Land', author: 'Robert A. Heinlein', genre: 'sci-fi' })
let BigBrother = new Book({ title: '1984', author: 'George Orwell', genre: 'sci-fi' })
let BladeRunner = new Book({ title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', genre: 'sci-fi' })
let Kiss = new Book({ title: 'Kiss an Angel', author: 'Susan Elizabeth Phillips', genre: 'romance' })

// var library = []
// library.push(Kiss)
// library.push(Grok)
// library.push(BigBrother)
// library.push(BladeRunner)

stockLibrary([Grok, BigBrother, BladeRunner, Kiss]).then((library) => {
let Cindy = new Bookworm({ name: 'Cindy', favoriteGenre: 'romance' })
let Patricia = new Bookworm({ name: 'Patricia', favoriteGenre: 'sci-fi' })
console.log(library)
Patricia.checkOutBook(library)
Cindy.checkOutBook(library)

    // Patricia.checkOutBook(library)
    // Patricia.checkOutBook(library)
    // Patricia.checkOutBook(library)

    // Cindy.checkOutBook(library)
})

