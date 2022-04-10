const value = {
    undefined: undefined,
    false: false,
    null: null,
    empty: '',
    zero: 0,
}

console.log(value.empty || 'default empty')
console.log(value.empty ?? 'default empty')

console.log(value.null || 'default null')
console.log(value.null ?? 'default null')

console.log(value.false || 'default false')
console.log(value.false ?? 'default false')

console.log(value.zero || 'default zero')
console.log(value.zero ?? 'default zero')