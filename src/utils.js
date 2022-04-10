export function isValid(val) {
    return val.length >= 10
}

export function showModal(title, body) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    const html = `
        <h1>${title}</h1>
        <div class="modal-content">${body}</div>
    `

    modal.innerHTML = html
    mui.overlay('on', modal);

}