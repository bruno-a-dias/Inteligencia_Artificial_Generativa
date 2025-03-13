document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = encodeURIComponent(`Nome: ${name}\nEmail: ${email}`);
    const whatsappNumber = "5561999639758"; // Substitua pelo seu número
   
    const whatsappURL = `https://wa.me/${whatsappURL}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
   });
   