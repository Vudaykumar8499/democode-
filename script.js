document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;

    const output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = `
        <h3>Entered Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
    `;

    this.reset();
});
