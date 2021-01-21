let nameInput = document.getElementById("floatingInput");
let messageTxtarea = document.getElementById("floatingTextarea");	
let nameModal = document.querySelector("span");
let  messageModal = document.querySelector("p");

(function loadScript() {

    let scriptEl = document.createElement("script");
	scriptEl.type = "text/javascript";
	scriptEl.src = "https://smtpjs.com/v3/smtp.js";
    let script = document.getElementsByTagName("script")[0];
	script.parentNode.insertBefore(scriptEl, script);
})();

function showData() {
	
	let myName = "Dorota Kargul";
	let message = "Have a nice day!";
	
	Email.send({
		/*Host : "smtp.yourisp.com",
		Username : "username",
		Password : "password",
		To : 'them@website.com',*/
		From : myName,
		//Subject : "This is the subject",
		Body : message
	}).then(
		message => alert(message)
	);
	
	nameInput.value = myName;
	messageTxtarea.value = message;
	nameModal.innerHTML = myName;
	messageModal.innerHTML = message;
}	

nameInput.addEventListener("focus", showData, {
	once: true
});
