function funcA() {
    let a = 11

    function funcB() {
        let b = 1

        function funcC() {
            let c = 23

            console.log('C: ',a, b, c)
        }

        funcC()
        console.log('B: ', a, b)

    }

    funcB()
    console.log('A: ', a);
}

funcA()