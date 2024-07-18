
function openChatbox(){
    document.getElementById("chatbox").style.right = "0px"
}

function closeChatbox(){
    document.getElementById("chatbox").style.right = "-250px"
}

function chatbox(){
    let chat = document.getElementById("chatbox")
    chat.classList.toggle("up_0")

    let Status = document.getElementById("close")
    let button = document.getElementById("button")
    
    if(Status.textContent == "Open"){
        document.getElementById("close").innerHTML = "Close"
        Status.style.background = "red"
        button.style.background = "blue"
    }else{
        document.getElementById("close").innerHTML = "Open"
        Status.style.background = "Green"
          button.style.background = "green"
    }
}