
document.getElementById('create-account-button').addEventListener('click', function() {
    window.location.href = 'signup.html';
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Here, you would typically send the data to your server
    // For the sake of this example, let's just log the data
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate a successful account creation
    var success = true; // This would be based on server response

    if (success) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('message').innerText = 'Error creating account. Please try again.';
    }
});
