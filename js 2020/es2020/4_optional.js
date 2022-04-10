const b1 = {
    bank: {
        name: 'b1',
        currency: {
            value: 12
        }
    }
}

const b2 = {
    bank: {}
}

function getValue(b) {
    return b?.value?.currency?.value
    // return b.bank.currency.value
}

console.log(getValue(b2));