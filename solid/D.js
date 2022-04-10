// Dependency inversion principle

class Fetch {
    get(url) {
        console.log(url)
    }
}

class LocalStorage {
    get() {
        console.log('data from local storage')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    getData() {
        this.localStorage.get()
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    getData() {
        this.fetch.get('vk.com')
    }
}
class Database {
    // constructor() {
    //     this.fetch = new Fetch()
    // }

    constructor(client) {
        this.client = client
    }

    getData() {
        // return this.fetch.get('dot.com')
        return this.client.getData()
    }

}

const db = new Database(new FetchClient())
const lSDb = new Database(new LocalStorageClient())
db.getData()
lSDb.getData()