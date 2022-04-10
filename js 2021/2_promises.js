function createPromise(val, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val)
        }, time)
    })
}

const p1 = createPromise(1, 1500)
const p2 = createPromise(2, 2500)
const p3 = createPromise(3, 3500)

async function start() {
    const result = await Promise.any([p1, p2, p3])
    // result
}

start()
