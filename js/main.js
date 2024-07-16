
// var a = "Mammadrza"
// console.log(a)

// function demo(){
//     var a = "Rza muellim" 
//     console.log(a)
// }


// function startLesson(){
//     var a = "Rza" 
//     console.log(a)
// }



// console.log(a)





// == eger beraberdirse (tipini yoxlamir)
// === eger beraberdirse (tipini yoxlayir)

// != eger beraber deyilse (tipini yoxlamir)
// !== eger beraber deyilse (tipini yoxlayir)

// let username = "Rza2" //string
// let password = "123"
// let fingerprint = "qwerty1"




// let db_username = "Rza" //number
// let db_password = "123"
// let db_fingerprint = "qwerty"


// if(username === db_username && password === db_password || fingerprint === db_fingerprint){
//     alert("Welcome")
// }else{
//     alert("Username or password is wrong")
// }




// if(username === db_username){
//     if(password === db_password){
//         alert("Welcome")
//     }else{
//         alert("Password is wrong")
//     }
// }else{
//     alert("Username is wrong")
// }






// if(user_1 >= user_db1){
//     alert("Kecin")
// }else{
//     alert("Stop")
// }

// user_1 == user_db1 ? alert("Kecin") : alert("Stop")





// let user_2 = "Rza"
// let user_db2 = "Rza"

// if(user_1 == user_db1){
//     alert("yes")
// }else if(user_2 == user_db2){
//     alert("Welcome "+ user_2)
// }else{
//     alert("no")
// }





// var x = 5

// // x += 5
// x = x + 5
// console.log(x)




// let getHours = new Date().getHours()  
// let getMinutes = new Date().getMinutes()  
// let seconds = new Date().getSeconds()  
// console.log(`${getHours}:${getMinutes}:${seconds}`)


// let getMinutes = new Date().getMinutes()  

// switch(getMinutes) {
//     case 58:
//         document.body.style.backgroundColor = "red"
//         break;
//     case 59:
//         document.body.style.backgroundColor = "blue"
//         break;
//     case "Televizor":
//         alert("Televizor aktiv oldu")
//         break;
//     case "hersey":
//         alert("hersey aktiv oldu")
//         break;
//     default:
//       console.log("Gun tapilmadi")
//   }






//   let getMinutes = new Date().getMinutes()  

//   if(getMinutes == "00"){
//         document.body.style.backgroundColor = "blue"
//   }else if(getMinutes == "01"){
//         document.body.style.backgroundColor = "red"
//   }else if(getMinutes == "04"){
//         document.body.style.backgroundColor = "green"
//   }else{
//     console.log("Gun tapilmadi")
//   }






// function StudentMurad(){
//     console.log("Hello! My name is Murad Babayev. I am 13 years old. My student status is Active")
// }

// function studentIbo(){
//     console.log("Hello! My name is Ibrahim Aydinli. I am 14 years old. My student status is Deactive")
// }

// function openCard(){
//     console.log("Hello! My name is Murad Babayev. I am 13 years old. My student status is Active")
// }
// StudentMurad()
// studentIbo()
// openCard()

// function openCard(){
//     document.body.style.backgroundColor = "blue"
// }

// function changeBgColor(){
//     document.body.style.backgroundColor = "red"
// }

// function changeBgColorTransparent(){
//     document.body.style.backgroundColor = "white"
//     var a = 5
//     var b = 12
//     console.log(a+b)
// }




// function changeColor(color){
//     document.body.style.backgroundColor = color
// }


function student(  age,  lastname, firstname, status = "Active"){
    console.log(`Hello! My name is ${firstname} ${lastname}. I am ${age} years old. My student status is ${status}.`)
}


// student("Aydinli","Ibrahim",13, "Deactive")
// student("Aydinli","Nurjan",15)
// student("Babayev","Murad",13)


function get_data(){

    db_username = "hunt"
    db_password = "tester123"

    let username = document.getElementById('username')
    let password = document.getElementById('password')

  
    if(username.value === db_username && password.value === db_password){
        alert(`Welcome ${username.value}`)
    }else{
        alert("Username or password is wrong!")
    }

}


function get_user(){

    let username = document.getElementById('username')
    
    switch(username.value.toLowerCase()) {
        case "rza":
            document.body.style.backgroundImage = "url('https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/56073/article_full%403x.jpg')"
            document.body.style.backgroundSize = "cover"
            break;
        case "nurjan":
        case "nurcan":
            document.body.style.backgroundImage = "url('https://cdn.vox-cdn.com/thumbor/sDeJryk6-bbcZPf6bCiMFEujaS0=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6401113/c42ac6a0c2aaee69c79955d1d32c54b4_large.0.jpeg')"
            document.body.style.backgroundSize = "cover"
            break;
        default:
            document.body.style.background = "white"
    }
}



function demo(){
    let w = document.getElementById('w').value
    let h = document.getElementById('h').value
    let bg = document.getElementById('bg').value
    let float = document.getElementById('float').value

    let div = document.getElementById('demo')
    div.style.width = w
    div.style.height = h
    div.style.background = bg
    div.style.float = float
}