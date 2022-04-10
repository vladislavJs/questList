// Single Responsibility Principle

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    // toHTML() {
    //     return `
    //         <div><h1>${this.title}</h1><p>${this.text}</p></div>
    //     `
    // }
}

class PrintNews {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
             <div><h1>${this.news.title}</h1><p>${this.news.text}</p></div>
        `
    }
}


const page = new News('Horror nightmare', 'This happens, but why?')
page.update('We dont know how this work')

// console.log(page.toHTML().trim())

const print = new PrintNews(page)
console.log(print.html().toUpperCase().trim())
