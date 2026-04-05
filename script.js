const form = document.getElementById("form");

function myWork(){

    const gitHub = "https://github.com/NhlakaM";

    window.open(gitHub, "_blank");
}

function contact(){

    const whatsappNum = `https://wa.me/+27748495566`;

    window.open(whatsappNum, "_blank");
}

form.addEventListener("submit", function(e){
    e.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        document.getElementById("response").textContent = "Fill in all fields";
        return;
    }

    document.getElementById("response").textContent = "Submit was successful";
    
    const phoneNumber = "+27748495566";
    const text = `Name:${name}%0Email:${email}%0Message:${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");


    form.reset();

})