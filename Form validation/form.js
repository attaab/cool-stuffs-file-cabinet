// this is a form data
var form = {
	register:document.getElementById('register'),
	email: document.getElementById('email'),
	pass1: document.getElementById('pass1'),
	pass2: document.getElementById('pass2')
};
// the next line handles form submission
form.register.addEventListener("submit",submitHandler);
 
 // handles email
 form.email.addEventListener("change", emailHandler);

 // handles the first pass
 form.pass1.addEventListener("keypress", spaceHandler);

 // handles the pass 2
 form.pass2.addEventListener("keypress", spaceHandler);

var confirmEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
 function submitHandler(e){
 	var msg = "";
 	if (!confirmEmail.test(form.email.value)) {
 		msg += "\nPlease Check Email Address";
 	}
 	if (form.pass1.value =="" || form.pass1.value !== form.pass2.value) {
 		msg += "\nYour Passwords do not match";
 	}
 	if (msg !== "") {
 		msg == "\nPlease check " + msg;
 	}else{
 		msg == "\nForm is valid...";
 	};
 	alert(msg);
 	 e.preventDefault();
 };
 function emailHandler(e){
 	if (e.target.value == "") {
 		alert("you forgot your Email");
 	}
 };
 // in character code space is 32; every letter has a charcode
 function spaceHandler(e){
 	if(e.charCode == 32){
 		e.preventDefault();
 	}
 }
