export class Question {
    static create(question) {
        return fetch('https://podcast-quest-app-1c787-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name

                return question
            })
            .then(addToLocalStorage)
            .then(Question.renderQuestionsList)
    }

    static renderQuestionsList() {
        const questions = getQuestionsFromLocalStorage()
        const html = questions.length
            ? questions.map(toCard).join('')
            : `<div class="mui--text-headline">0 Questions</div>`

        const list = document.getElementById('q-list')
        list.innerHTML = html
    }

    static listToHtml(questions) {
        return questions.length ?
            `<ol>${questions.map(q => `<li>${q.value}</li>`).join('')}</ol>`
            : '<p>0 questions</p>'
    }

    static fetch(token) {
        if(!token) {
            return Promise.resolve('<p class="error">You not have token</p>')
        }

        return fetch(`https://podcast-quest-app-1c787-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${token}`)
            .then(response => response.json())
            .then(response => {
                if(response && response.error) {
                    return `<p class="error">${response.error}</p>`
                }

                return response ? Object.keys(response).map( key => ({
                    ...response[key],
                    id: key
                })) : []
            })
    }
}

function toCard(question) {
    return `
            <div class="mui--text-black-54">
                ${ new Date(question.date).toLocaleDateString() }
                ${ new Date(question.date).toLocaleTimeString() }
            </div>
            <div>${question.value}</div>
            <br>
`
}

function addToLocalStorage(question) {
    const allQuestions = getQuestionsFromLocalStorage();
    allQuestions.push(question)
    localStorage.setItem('questions', JSON.stringify(allQuestions))
}

function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}