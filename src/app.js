import './styles.css'
import {isValid, showModal} from "./utils";
import {Question} from "./question";
import {authWithEmailAndPassword, getAuthForm} from "./auth";

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const modalBtn = document.getElementById('modal-btn')
const submitBtn = form.querySelector('#submit')

input.addEventListener('input', () => submitBtn.disabled = !isValid(input.value))
form.addEventListener('submit', submitFormHandler)
modalBtn.addEventListener('click', openModal)
window.addEventListener('load', Question.renderQuestionsList)

function submitFormHandler(event) {
    event.preventDefault()

    if(isValid(input.value)){
        const question = {
            value: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true

        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })
    }
}

function openModal() {
    showModal('Authorization', getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(event) {
    event.preventDefault()

    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value
    btn.disabled = true
    authWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAfterAuth)
        .then(() => btn.disabled = true)
}

function renderModalAfterAuth(content) {
    if(typeof content === 'string') {
        showModal('Wrong!', content)
    } else {
        showModal('Questions!', Question.listToHtml(content))
    }
    console.log(content)
}