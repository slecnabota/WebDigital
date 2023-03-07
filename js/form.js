function CustomValidation(input) {
	this.invalidities = [];
	this.validityChecks = [];
	this.inputNode = input;
	this.registerListener();
}

CustomValidation.prototype = {
	addInvalidity: function(message) {
		this.invalidities.push(message);
	},
	getInvalidities: function() {
		return this.invalidities.join('. \n');
	},
	checkValidity: function(input) {
		for ( let i = 0; i < this.validityChecks.length; i++ ) {

			let isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			}
		} 
	},
	checkInput: function() { 

		this.inputNode.CustomValidation.invalidities = [];
		this.checkValidity(this.inputNode);

		if ( this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '' ) {
			this.inputNode.setCustomValidity('');
		} else {
			let message = this.inputNode.CustomValidation.getInvalidities();
			this.inputNode.setCustomValidity(message);
		}
	},
	registerListener: function() {

		let CustomValidation = this;

		this.inputNode.addEventListener('keyup', function() {
			CustomValidation.checkInput();
		});


	}

};

let usernameValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length>=3){
				document.getElementById('usrname').classList.add('icon');
			}
			else{
				document.getElementById('usrname').classList.remove('icon');
			}
			return input.value.length < 3;
		},
	},
	{
		isInvalid: function(input) {
			let illegalCharacters = input.value.match(/[^a-zA-Z]/g);
			return illegalCharacters ? true : false;
		},
	}
];
let passwordValidityChecks = [
	{
		isInvalid: function(input) {
			return input.value.length < 8 | input.value.length > 100;
		},
	},
	{
		isInvalid: function(input) {
			if(input.value.match(/[0-9]/g) && input.value.length>8){
				document.getElementById('tel').classList.add('icon');
			}
			else{
				document.getElementById('tel').classList.remove('icon');
			}
			return !input.value.match(/[0-9]/g);
		},
	},
	{
		isInvalid: function(input) {
			return input.value.match(/[a-z]/g);
		},
	},
	{
		isInvalid: function(input) {
			return input.value.match(/[A-Z]/g);
		},
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
		},
	}
];

let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

usernameInput.CustomValidation = new CustomValidation(usernameInput);
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

passwordInput.CustomValidation = new CustomValidation(passwordInput);
passwordInput.CustomValidation.validityChecks = passwordValidityChecks;


let inputs = document.querySelectorAll('input:not([type="submit"])');


let submit = document.querySelector('input[type="submit"]');
let form = document.getElementById('registration');

function validate() {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].CustomValidation.checkInput();
	}
}

submit.addEventListener('click', validate);
form.addEventListener('submit', validate);