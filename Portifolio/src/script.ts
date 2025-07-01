function sendMail(event) {
    event.preventDefault(); 

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_6mu3m8w", "template_02sekg1", params)
        .then((response) => {
            alert("Your message has been sent successfully!");
            document.forms["contact"].reset(); 
            location.reload();
            console.log('Success!', response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send the message. Please try again.");
            console.error('Error:', error);
        });
}