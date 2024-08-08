

const email_list = []
const user_list = []

res()

function res(){
    demo.innerHTML = localStorage.getItem("register")
    user_name_list.innerHTML = localStorage.getItem("user")
}

function removeLocal (){
    localStorage.removeItem("register")
    res()
}

function removeLocal_user(){
    localStorage.removeItem("user")
    res()
}

function removeLocal_all(){
    localStorage.clear()
    res()
}


const create_email = () => {
    let demo = document.getElementById("demo")
    let user_name_list = document.getElementById("user_name_list")

    let new_email = document.getElementById('new_email')
    let new_email_trim = new_email.value.trim()

    let user = document.getElementById('user')
    let user_new = user.value.trim()
    
    email_list.push(new_email_trim)
    user_list.push(user_new)

    new_email.value = ""
    user.value = ""



    localStorage.setItem("register", email_list);
    localStorage.setItem("user", user_list);
    res()
    
    
    console.log(email_list)
  
}