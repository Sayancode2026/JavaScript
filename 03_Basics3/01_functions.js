function loginUserMessage(username="Baban"){
    if(!username){
        console.log("Please enter your user name");
        return
    }
    return  `${username} just logged in`
}

console.log(loginUserMessage("Sayan"));
