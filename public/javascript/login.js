console.log("Script loaded")
document.querySelector('.login').addEventListener("click", function(event){
    event.preventDefault()
    console.log('login button clicked');
    const username = document.querySelector('#username-login').value
    const password = document.querySelector('#password-login').value

    fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: { 'Content-Type': 'application/json'},
    }).then (function(res) {
        return res.json()
    }).then(function (data) {
        console.log(data)
    })
})