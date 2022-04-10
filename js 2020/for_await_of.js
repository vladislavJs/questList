const delay = (id, time) => new Promise(resolve => {
    setTimeout(() => resolve(id), time)
})

// delay(1, 400).then((id) => console.log('finished', id))
// delay(4, 200).then((id) => console.log('finished', id))

const promises = [
    delay(1, 2000),
    delay(2, 4000),
    delay(3, 6000),
]
// async function all() {
//     for(let promise of promises){
//         console.log(promise)
//         promise.then(() => console.log(promise))
//
//     }
// }

async function all() {
    for(const promise of await Promise.all(promises)) {
        console.log(promise)
    }
}

async function modern() { //new
     for await (const promise of promises) {
        console.log(promise)
    }
}

modern()