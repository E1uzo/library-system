interface IBook {
    readonly title: string;
    checkout(): void;
}

abstract class Book implements IBook {
    protected _title: string;
    protected _author: string;
    protected _year: number;

    constructor(title: string, author: string, year: number) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    public get title(): string {
        return this._title;
    }

    public get author(): string {
        return this._author;
    }

    public get year(): number {
        return this._year;
    }

    abstract checkout(): void;
}

class LibraryBook extends Book {
    constructor(title: string, author: string, year: number) {
        super(title, author, year);
    }

    public checkout(): void {
        console.log(`[Бумажная книга] Книга "${this.title}" (Автор: ${this.author}) выдана на руки.`);
    }
}

class DigitalBook extends Book {
    constructor(title: string, author: string, year: number) {
        super(title, author, year);
    }

    public checkout(): void {
        console.log(`[Электронная книга] Книга "${this.title}" успешно загружена на устройство.`);
    }
}

class Library {
    private books: IBook[] = [];

    public addBook(book: IBook): void {
        this.books.push(book);
        console.log(`Система: Книга "${book.title}" успешно добавлена в библиотеку.`);
    }

    public checkoutBook(title: string): void {
        const foundBook = this.books.find(
            (book) => book.title.toLowerCase() === title.toLowerCase()
        );

        if (foundBook) {
            foundBook.checkout();
        } else {
            console.error(`Ошибка: Книга с названием "${title}" не найдена в библиотеке!`);
        }
    }
}

const libraryInstant = new Library();

const paperBook = new LibraryBook("Война и мир", "Лев Толстой", 1869);
libraryInstant.addBook(paperBook);

const digitalBook = new DigitalBook("Изучаем TypeScript", "Борис Черный", 2021);
libraryInstant.addBook(digitalBook);

libraryInstant.checkoutBook("Война и мир");
libraryInstant.checkoutBook("Изучаем TypeScript");
libraryInstant.checkoutBook("Преступление и наказание");
