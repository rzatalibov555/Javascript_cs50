




// function demo(){
    
    

//     let input = document.getElementById('input')
    
//     users.push(input.value)


//     console.log(users)

// }


// onkeydown = (e) => {
    
//     if(e.key == "Enter"){
//         let input = document.getElementById('input')
//         users.push(input.value)
//         input.value = ""
    
//         console.log(users)
//     }
// }

// let country = ['Azerbaycan', 'Turkey', 'Russia',"Rza","Murad","Xaliq","Ibrahim"]

// let demo = () => {

    
//         let input = document.getElementById('input')

        

//         country.push(input.value)
        
//         input.value = ""

//         for( let i = 0; i < country.length; i++){
//             let result = document.getElementsByClassName('result')
//             console.log(result[i])
//             result[0].innerHTML = country[i]
//         }
//         console.log(country)
// }




let country = ['Azerbaycan', 'Turkey', 'Russia']

let city = [
        ['Baki', 'Sumqayit', 'Xirdalan', 'Gence', 'Susha', 'Ucar','Qusar'],
        ['Istanbul', "Ankara","Trabzon"],
        ['Moskva', 'Saint Petersburq', 'Kolininqrad']
]




for(var i = 0; i < country.length; i++){
    document.write(country[i]+"<br>")
    
    document.write("<ul>")
        for(var j = 0; j < city[i].length; j++){
            document.write("<li>"+city[i][j]+"</li>")
        }
    document.write("</ul>")
}





// console.log(country)

// document.write(country)