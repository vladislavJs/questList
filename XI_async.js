// // console.log('Send to server')
// //
// // setTimeout(() => {
// //     console.log('preparing Data')
// //
// //     const data = {
// //         name: 'data'
// //     }
// //
// //     setTimeout(() => {
// //         data.updated = true
// //         console.log('Data received', data)
// //     }, 2000)
// // }, 2000)
// //
//
// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('preparing Data')
//
//         const data = {
//             name: 'data'
//         }
//
//         resolve(data)
//     }, 2000)
// })
//
// // firstPromise.then((data) => {
// //     const secondPromise = new Promise(r => {
// //         setTimeout(() => {
// //             console.log('second step')
// //             data.updated = true
// //             r(data)
// //         }, 1000)
// //     })
// //
// //     secondPromise.then((data) => {
// //         console.log(data, ' was finished')
// //
// //     })
// //
// // })
//
// firstPromise.then(data => {
//     return new Promise(resolve => {
//         console.log('data now this', data)
//         setTimeout(() => {
//             data.updated = true
//             console.log('data was changed')
//             resolve(data)
//         }, 2000)
//     })
// }).then(finalData => {
//     return new Promise((resolve, reject) => {
//         console.log('last step')
//         setTimeout(() => {
//             console.log('Final data - ', finalData)
//             resolve(finalData)
//         }, 2000)
//     })
// }).then((finalData) => {
//     console.log('final data')
// }).then(() => {
//     console.log('another one')
// })


// const sleep = ms => new Promise(resolve => {
//     setTimeout(() => {
//         resolve()
//     }, ms)
// })

// sleep(2000).then(() => console.log('2ffff'))
// sleep(3000).then(() => console.log('3ffff'))
// sleep(4000).then(() => console.log('4ffff'))
//
// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//     console.log('all')
// })
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//     console.log('race')
// })


const sleep = ms => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, ms)
})

const url = 'https://jsonplaceholder.typicode.com/todos'

const myFetch = (url) => new Promise((r) => {
    setTimeout(() => {
        const data = {
            url: url,
            name: 'fetch'
        }
        r(data)
    }, 2000)
})

// function newAwait() {
//     console.log('started')
//     return sleep(2000)
//         .then(() => console.log('started 2'))
//         .then(() => myFetch(url))
//         .then(data => data)
// }
//
// newAwait().then((data) => console.log('finished', data))

async function newTimes() {
    try {
        await sleep(4000)
        console.log('11')
        const data = await myFetch(url)
        console.log(data)
    } catch (e) {
        console.log(e)
    } finally {

    }

}

newTimes()