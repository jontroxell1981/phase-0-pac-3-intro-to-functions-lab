function shout(string) {
    return string.toUpperCase()
  }

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(shout('hello'))
}

function logWhisper(string) {
    console.log(whisper('hello'))
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
    } 
    
    if (string.toUpperCase() === string) {
        return "YES INDEED!"
    }

    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}