const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

const userData = [
    {
        username: "hampus83",
        password: "12345",
        email: "jhmacgyver@gmail.com"
    },
    {
        username: "glenn",
        password: "glenn123",
        email: "glenn_hysen@hotmail.com"
    },
    {
        username: "Ada_L",
        password: "codingisfun",
        email: "ada_lovelace@yahoo.com"
    }
];

let loginResult = {
    success: false
}

app.post('/api/login', (request, response) => {
    
    const userInput = request.body;

    const filteredUser = userData.filter(userData => userInput.username == userData.username && userInput.password == userData.password)

    console.log(filteredUser);

    if (filteredUser.length > 0) {
        loginResult.success = true;
    } else {
        loginResult.success = false;
    }

    response.json(loginResult);
});

let signupResult = {
    success: false,
    usernameExists: false,
    emailExists: false
}

app.post('/api/signup', (request, response) => {
    const userInput = request.body;
    // console.log(userInput);

    const filteredUsername = userData.filter(userData => userInput.username == userData.username);
    const filteredEmail = userData.filter(userData => userInput.email == userData.email);

    if (filteredUsername.length > 0) {
        signupResult.usernameExists = true
    } else {
        signupResult.usernameExists = false
    }

    if (filteredEmail.length > 0) {
        signupResult.emailExists = true
    } else {
        signupResult.emailExists = false
    }

    if (signupResult.usernameExists == true || signupResult.emailExists == true) {
        signupResult.success = false;
    } else {
        signupResult.success = true;
    }

    console.log('username exist:', filteredUsername);
    console.log('email exist', filteredEmail);

    response.json(signupResult);

});

app.listen(PORT, () => {
    console.log(`Servern är startad på PORT: ${PORT}`);
});
