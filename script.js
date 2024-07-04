function shuffle(array) {     
    for (let i = array.length - 1; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let messages = ["You won", "You lost", "You lost"];
shuffle(messages);

function firstMessage() {       
    document.getElementById("messageToDisplay").innerHTML = messages[0];
}

function secondMessage() {       
    document.getElementById("messageToDisplay").innerHTML = messages[1];
}

function thirdMessage() {       
    document.getElementById("messageToDisplay").innerHTML = messages[2];
}