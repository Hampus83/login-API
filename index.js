const express = require('express');
const app = express();
const PORT = 8000;

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

const userInput = {
    username: "glenn",
    password: "glenn123"
}

let result = {
    success: false
}


const filterUsernames = () => {
    const filteredArray = userData.filter((data) => {
        // console.log('input:', userInput.username)
        // console.log('alla:', data.username)
        // console.log('result.success:', result.success)
        
        if (userInput.username === data.username && userInput.password === data.password) {
            result.success = true
            console.log('result.success i if-satsen1:',result.success);
            console.log('DET STÄMMMMMMMMMMMMMMMMER!!!!!')
            return data
        } 
        // else {
        //     result.success = false
        //     console.log('result.success i if-satsen2:',result.success);
        //     console.log('DET STÄMMER INTE?!?!????????')
        //     return data
        // }
        
    });
    console.log('filteredArray:',filteredArray)
    return filteredArray
}

app.use(express.json());

app.post('/api/login', (request, response) => {
    filterUsernames();
    const userInput = request.body
    console.log('userInput:', userInput);
    console.log('result.success i post', result.success)
    
    response.json(result);
});

app.post('/api/signup', (request, response) => {
    //använd filter!
});

app.listen(PORT, () => {
    console.log(`Servern är startad på PORT: ${PORT}`);
});
