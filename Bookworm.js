/*  A class for a record of a book
    Constructor params (destructured):
        title:  String - the title of the book
        author: String - the book's author
        genre:  String - the book's genre
                Bookworms use this to figure out if they want to read the book

    Properties:
        title, author, genre - see constructor params of the same names
        avaialable: boolean - default: true; changes to false if a Bookworm checks out the book
*/
class Book {
    constructor({ title, author, genre }) {
        // use params to set properties
        this.title = title
        this.author = author
        this.genre = genre

        this.available = true // If true, a Bookworm may check this book out
    }
}

/*  A class for an avid reader of Books
    Constructor params (destructured):
        name:           String - What the Bookworm is usually called
        favoriteGenre:  String - The only genre of books this Bookworm will read
    
    Properties:
        name, favoriteGenre - same as constructor params
        booksOut:       Number - count of how many books the Bookworm has out. default: 0
        maxBooksOut:    Number - maximum number of books the Bookworm may check out at once. default: 3
*/
class Bookworm {
    constructor({ name, favoriteGenre }) {
        // use params to set properties
        this.name = name
        this.favoritGenre = favoriteGenre

        this.booksOut = 0
        this.maxBooksOut = 3
    }

    /*  Method for browsing a given library and checking out a book
        Params:
            library:    Array - the Books available to the Bookworm
    */
    checkOutBook(library = []) {
        // go through each book in turn
        for (let book of library) {
            // read the genre of the current book
            if (book.genre === this.favoritGenre) {
                // see if the book is currently checked out
                if (book.available) {
                    // check if the Bookworm has reached her/his limit of Books checked out
                    if (this.booksOut < this.maxBooksOut) {
                        // add one to the Bookworm's count of books out
                        this.booksOut += 1
                        // mark the current Book as unavailable
                        book.available = false
                        // break loop when a suitable book is checked out
                        return (
                            console.log(`${this.name} says, 'I just checked out ${book.title} by ${book.author}!'`),
                            console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`))
                    } else { // Bookworm can't check out any more books
                        // break loop since Bookworm can't check out any more books
                        return (
                            console.log(`${this.name} says, 'I want ${book.title} by ${book.author}, but I have too many books out already.'`),
                            console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`))
                    }
                }
            }
        }
        /*  Bookworm looped through all Books
            This happens when either:
                - there are no Books matching the Bookworm's favorite genre, or
                - none of the Books in the favorite genre are available
        */
        return (
            console.log(`${this.name} says, 'I didn't find any books I like.`),
            console.log(`${this.name} has ${this.booksOut} ${this.booksOut === 1 ? 'book' : 'books'} checked out.`))
    }
}

// constructing a few Books
let Kiss = new Book({ title: 'Kiss an Angel', author: 'Susan Elizabeth Phillips', genre: 'romance' })
let Grok = new Book({ title: 'Stranger in a Strange Land', author: 'Robert A. Heinlein', genre: 'sci-fi' })
let BigBrother = new Book({ title: '1984', author: 'George Orwell', genre: 'sci-fi' })
let BladeRunner = new Book({ title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', genre: 'sci-fi' })
let TheyRemember = new Book({ title: 'Jurassic Park', author: 'Michael Crichton', genre: 'sci-fi' })

// putting the books in an array - a library for the Bookworms to browse
let library = [Grok, BigBrother, BladeRunner, Kiss, TheyRemember]

// Cindy will only check out romance novels
let Cindy = new Bookworm({ name: 'Cindy', favoriteGenre: 'romance' })
// Patricia will only check out science fiction books
let Patricia = new Bookworm({ name: 'Patricia', favoriteGenre: 'sci-fi' })

// Cindy checks out the only romance novel in this library
Cindy.checkOutBook(library)
// No more romance novels available, so Cindy doesn't check out any books
Cindy.checkOutBook(library)

// a blank line so the output is more readable
console.log()

// Patricia checks out her first book
Patricia.checkOutBook(library)
// Patricia checks out her second book
Patricia.checkOutBook(library)
// Patricia checks out her third book
Patricia.checkOutBook(library)
// Patricia tries to check out a fourth book, but the max is 3 so she can't
Patricia.checkOutBook(library)
