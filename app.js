document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn = document.getElementById('add')
    const subBtn = document.getElementById('sub')
    const output = document.querySelector('#output')

    function getValues() {
        const val1 = +num1.value
        const val2 = +num2.value

        return[val1, val2]
    }
    function addHandler() {
        const[val1, val2] = getValues()
        const result = val1 + val2
        showResult(result)
    }
    function subHandler() {
        console.trace()
        const[val1, val2] = getValues()
        const result = val1 - val2
        showResult(result)
    }

    function showResult(result) {
        debugger
        output.closest('.card').style.display = 'block'
        output.innerHTML = `Result: ${result}`
    }

    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)
})

