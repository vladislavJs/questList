let a = 'variable a'
let b = 'variable b'

{
    a = 'scope variable a'
    let b = 'scope variable b'

    console.log('scope: ', a, b)

}

console.log('global', a, b)