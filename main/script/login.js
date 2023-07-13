let form = document.forms[0]
let error = document.querySelectorAll('.form__error')
// user
let userBlock = document.querySelector('.form__name')
let userName = userBlock.querySelector('.form__input')
let userError = userBlock.querySelector('.form__error')
// password
let passwordBlock = document.querySelector('.form__password')
let password = passwordBlock.querySelector('.form__input')
let passwordError = passwordBlock.querySelector('.form__error')

let btn = document.querySelector('.btn')
let formError = error[error.length - 1]

let users = {name: 'Admin', password: '12345', access: false}

btn.addEventListener('click', err)
userName.addEventListener('blur', validLogin)
password.addEventListener('blur', validPassword)
form.addEventListener('submit', submitForm)

function err() {
	return !!(validLogin() + validPassword())
}

function submitForm(event) {
	if (error) {
		alert('submit')
		info()
	} else {
		alert('not submit')
	}
	event.preventDefault()
}

function info(event) {
	if (users.name === userName.value && users.password === password.value) {
		users.access = true
		formError.style.color = 'green'
		formError.textContent = 'Вход успешен'
	} else {
		users.access = false
		formError.style.color = 'rgb(201, 18, 18)'
		formError.textContent = 'Не верный логин или пароль'
	}
	formError.style.display = 'block'

	users.access ? alert('Вход') : alert('Не вход')
}

function validLogin() {
	if (userName.value.length === 0) {
		userError.textContent = 'Поле должно быть заполнено'
		userError.style.display = 'block'
		return false
	}
	if (userName.value.length < 4) {
		userError.textContent = 'Не меньше 4 символов'
		userError.style.display = 'block'
		return false
	} else {
		userError.style.display = 'none'
		return true
	}
}
function validPassword() {
	if (password.value.length === 0) {
		passwordError.textContent = 'Поле должно быть заполнено'
		passwordError.style.display = 'block'
		return false
	}
	if (password.value.length < 5) {
		passwordError.textContent = 'Не меньше 5 символов'
		passwordError.style.display = 'block'
		return
	} else {
		passwordError.style.display = 'none'
		return true
	}
}
