const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
// const p3 = 'state'
const p3 = Promise.reject('my err')

// p2.then(() => console.log('22'))
// ;(async() => {
//     const result = await Promise.all([p1, p2, p3]).catch(err => console.log(err))
//     console.log(result)
// })()

;(async() => {
    const result = await Promise.allSettled([p1, p2, p3]).catch(err => console.log(err))
    console.log(result)
})()

