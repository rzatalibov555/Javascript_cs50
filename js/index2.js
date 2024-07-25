


function chCar(){
    let car_select = document.getElementById('car_select').value
    
    document.getElementById('car_img').src = `img/${car_select }`
}


// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//   document.getElementById("demo").innerHTML = "Happy Birthday!"
// }

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }

         
// function chColor_h(e){
//     console.log(e)
//     e.style.background = "blue"
// }

// function chColor_o(e){
//     e.style.background = "purple"
// }

// function chColor_t(e){
//     e.style.background = "transparent"
// }

// function chColor_r(e){
//     e.style.background = "red"
// }

// function chBodyColor(){
//     document.body.style.background = "yellow"
// }


// ArrowDown
// ArrowUp
// ArrowLeft
// ArrowRight

// var Top_side  = 0
// var Left_side = 0


// onkeydown = (e) => {
//     console.log(`${e.key}`)
//     var myDiv = document.getElementById('demo')
    
//     if(e.key == "ArrowDown"){
//         myDiv.style.top = Top_side+"px"
//         Top_side += 20
//     }

//     if(e.key == "ArrowUp"){
//         myDiv.style.top = Top_side+"px"
//         Top_side -= 20
//     }
    

//     if(e.key == "ArrowLeft"){
//         myDiv.style.left = Left_side+"px"
//         Left_side -= 20
//     }

//     if(e.key == "ArrowRight"){
//         myDiv.style.left = Left_side+"px"
//         Left_side += 20
//     }
    
    
    
    
    
    
    
    
    
    
//     // if(e.keyCode > 57 || e.keyCode < 48){
//     //     alert("Ancaq reqem elave ede bilersiniz")
//     // }else{
//     //     console.log(e.key)
//     // }
// }

// onclick = () => {
//     alert("clicked!!!")
// }




function start1(e,text){
    e.style.background = "red"

    document.getElementById("demo").innerHTML = e.value
}

function start2(){
    document.getElementById('input').style.background = "blue"
}



function addPhoto(){
    let inp = document.getElementById('inp').value
    document.body.style.backgroundImage = `url(${inp})`
    document.body.style.backgroundSize = "cover"
    

}