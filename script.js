function shuffle(array) {
    let currentIndex = array.length 
    while (currentIndex != 0) {      
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--        
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

let messages = ["câștigător", "necâștigător", "necâștigător"]
shuffle(messages)
console.log(messages)

function firstMessage() {   
    document.getElementById("messageToDisplay").innerHTML = messages[0]   
}

function secondMessage() {   
    document.getElementById("messageToDisplay").innerHTML = messages[1]   
}

function thirdMessage() {   
    document.getElementById("messageToDisplay").innerHTML = messages[2]   
}