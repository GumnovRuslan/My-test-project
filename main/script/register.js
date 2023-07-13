let form = document.forms[0]
let error = document.querySelectorAll('.form__error')
// let formBlock = document.querySelectorAll('.form__block')

let codeBlock = document.querySelector('.code')
let codeInput = codeBlock.querySelector('.code__input')

let userBlock = document.querySelector('.form__name')
let username = userBlock.querySelector('.form__input')
let userError = userBlock.querySelector('.form__error')

let passwordBlock = document.querySelector('.form__password')
let password = passwordBlock.querySelector('.form__input')
let passwordError = passwordBlock.querySelector('.form__error')

let passwordSecondBlock = document.querySelector('.form__second-password')
let passwordSecond = passwordSecondBlock.querySelector('.form__input')
let passwordSecondError = passwordSecondBlock.querySelector('.form__error')

let btnRegister = form.registerBtn
let formError = error[error.length - 1]

username.addEventListener('blur', validName)
password.addEventListener('blur', validPassword)
passwordSecond.addEventListener('blur', validSecondPassword)
btnRegister.addEventListener('submit', register)
btnRegister.addEventListener('click', register)
codeInput.addEventListener('input', checkCode)

let users = []
let code
let user

function validName() {
	if (username.value.length === 0) {
		userError.style.display = 'none'
		return false
	}
	if (username.value.length <= 3) {
		userError.style.display = 'block'
		return false
	} else {
		userError.style.display = 'none'
		return true
	}
}

function validPassword() {
	if (password.value.length === 0) {
		passwordError.style.display = 'none'
		return false
	}
	if (password.value.length < 5) {
		passwordError.style.display = 'block'
		return false
	} else {
		validSecondPassword()
		passwordError.style.display = 'none'
		return true
	}
}

function validSecondPassword() {
	if (passwordSecond.value !== password.value) {
		passwordSecondError.style.display = 'block'
		return false
	} else {
		passwordSecondError.style.display = 'none'
		return true
	}
}

function register(event) {
	event.preventDefault()
	let valid = validName() && validPassword() && validSecondPassword()
	if (!valid) {
		formError.style.display = 'block'
		return false
	}
	user = new User(username.value, password.value) // <==
	code = randomCode() // <==
	console.log(code)
	alert('Введите пароль из консоли для подтверждения')
	codeBlock.style.display = 'block'
	formError.style.display = 'none'
	btnRegister.disabled = true
	// btnRegister.style.cursor = 'text'
}

function checkCode() {
	if (codeInput.value.length >= 6) {
		if (codeInput.value.toUpperCase() === code) {
			console.log('code true')
			user.access = true
			users.push(user)
			console.log(users)
			codeBlock.style.display = 'none'
			btnRegister.disable = false
			formError.style.cssText = 'color: green; display: block'
			formError.textContent = 'Регистрация выполнена'
		} else {
			console.log('code false')
		}
	}
}

function randomCode() {
	let str = 'abcdefghijklmnopqrstuvwxyz' // 26
	let num = '0123456789' // 10
	let code = ''
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * 2 + 1)
		if (random === 1) {
			let l = str[Math.floor(Math.random() * str.length)]
			code += l
		} else {
			let n = num[Math.floor(Math.random() * num.length)]
			code += n
		}
	}
	return code.toUpperCase()
}

function User(name, password) {
	this.name = name
	this.password = password
	this.access = false
}

// Popup
let popup = document.querySelector('.popup')
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=800,height=500,left=100,top=100`
popup.onclick = () => {
	window.open('/main/html/forgot.html', 'test', params)
}
