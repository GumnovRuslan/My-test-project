let loginForm = document.forms[0]
let loginUserName = loginForm.elements.username
let loginPassword = loginForm.elements.password
let loginSubmit = loginForm.elements.submitLogin
let errorForm = document.querySelector('.errorForm')
let errorLogin = document.querySelector('.errorLogin')
let errorPassword = document.querySelector('.errorPassword')

let user = {name: 'Lito', password: '12345', access: false}

loginSubmit.addEventListener('click', info)
loginUserName.addEventListener('blur', validationLogin)
loginPassword.addEventListener('blur', validationPassword)

function info() {
	let name = loginUserName.value
	let password = loginPassword.value
	if (user.name === name && user.password === password) {
		user.access = true
		errorForm.style.color = 'green'
		errorForm.innerHTML = 'Вход успешен'
	} else {
		errorForm.style.color = 'rgb(201, 18, 18)'
		errorForm.innerHTML = 'Не верный логин или пароль'
	}
	errorForm.style.visibility = 'visible'

	console.log(user.access)
}

function validationLogin() {
	if (loginUserName.value.length <= 3) {
		errorLogin.innerHTML = 'Поле должно быть больше 3 символов'
		errorLogin.style.visibility = 'visible'
	} else {
		errorLogin.style.visibility = 'hidden'
	}
}
function validationPassword() {
	if (loginPassword.value.length <= 4) {
		errorPassword.innerHTML = 'Поле должно быть больше 4 символов'
		errorPassword.style.visibility = 'visible'
	} else {
		errorPassword.style.visibility = 'hidden'
	}
}
