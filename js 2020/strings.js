const start = '       My life is hard end lonely '
const end = 'Its very sad           '

// console.log((start + end).trim())
console.log('vk'.padStart(6, 'www.').padEnd(10, '.com'))

function log(str, ...args) {
    console.log(str)
    console.log(...args)
}

const newStr = log`This text: ${start} and --- ${end}`