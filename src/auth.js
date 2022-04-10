export function getAuthForm() {
    return `
        <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="email" id="email" required>
                    <label for="email">Your email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="password" id="password" required>
                    <label for="password">Your Password</label>
                </div>
                <button
                        type="submit"
                        class="mui-btn mui-btn--raised mui-btn--primary"
                >
                    Log In
                </button>
            </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyCN6R46ftWOpJdULwYSA8vx0vZsy3I8j_k'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({email, password, returnSecureToken: true}),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => response.idToken)
}