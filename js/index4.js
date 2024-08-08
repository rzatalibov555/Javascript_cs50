




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




// let country = ['Azerbaycan', 'Turkey', 'Russia']

// let city = [
//         ['Baki', 'Sumqayit', 'Xirdalan', 'Gence', 'Susha', 'Ucar','Qusar'],
//         ['Istanbul', "Ankara","Trabzon"],
//         ['Moskva', 'Saint Petersburq', 'Kolininqrad']
// ]




// for(var i = 0; i < country.length; i++){
//     document.write(country[i]+"<br>")
    
//     document.write("<ul>")
//         for(var j = 0; j < city[i].length; j++){
//             document.write("<li>"+city[i][j]+"</li>")
//         }
//     document.write("</ul>")
// }




// let country = ['Azerbaycan', 'Turkey', 'Russia'];

// let city = [
//     ['Baki', 'Sumqayit', 'Xirdalan', 'Gence', 'Susha', 'Ucar', 'Qusar'],
//     ['Istanbul', 'Ankara', 'Trabzon'],
//     ['Moskva', 'Saint Petersburg', 'Kaliningrad']
// ];

// function addCountry() {
//     const countryInput = document.getElementById('country');
//     const newCountry = countryInput.value.trim();
//     if (newCountry !== "") {
//         country.push(newCountry);
//         city.push([]); // Add an empty array for cities
//         countryInput.value = ''; // Clear the input field
//         displayCountries();
//     }
// }

// function displayCountries() {
//     const countryList = document.getElementById('country-list');
//     countryList.innerHTML = ''; // Clear previous content
    
//     for (let i = 0; i < country.length; i++) {
//         const countryElement = document.createElement('div');
//         countryElement.innerHTML = country[i] + '<br>';
        
//         const cityList = document.createElement('ul');
//         for (let j = 0; j < city[i].length; j++) {
//             const cityItem = document.createElement('li');
//             cityItem.textContent = city[i][j];
//             cityList.appendChild(cityItem);
//         }
        
//         countryElement.appendChild(cityList);
//         countryList.appendChild(countryElement);
//     }
// }

// // Initial display
// displayCountries();




// console.log(country)

// document.write(country)













// let country = ['Azerbaycan', 'Turkey', 'Russia'];

// let city = [
//     ['Baki', 'Sumqayit', 'Xirdalan', 'Gence', 'Susha', 'Ucar', 'Qusar'],
//     ['Istanbul', 'Ankara', 'Trabzon'],
//     ['Moskva', 'Saint Petersburg', 'Kaliningrad']
// ];

// function addCountry() {
//     const countryInput = document.getElementById('country');
//     const newCountry = countryInput.value.trim();
//     if (newCountry !== "") {
//         country.push(newCountry);
//         city.push([]); // Add an empty array for cities
//         updateCountrySelect();
//         countryInput.value = ''; // Clear the input field
//         displayCountries();
//     }
// }

// function updateCountrySelect() {
//     const countrySelect = document.getElementById('country_data');
//     countrySelect.innerHTML = '<option value="">-SELECT-</option>'; // Clear previous options
//     for (let i = 0; i < country.length; i++) {
//         const option = document.createElement('option');
//         option.value = country[i];
//         option.textContent = country[i];
//         countrySelect.appendChild(option);
//     }
// }

// function addCity() {
//     const countrySelect = document.getElementById('country_data');
//     const selectedCountry = countrySelect.value;
//     const cityInput = document.getElementById('city');
//     const newCity = cityInput.value.trim();
    
//     if (selectedCountry !== "" && newCity !== "") {
//         const countryIndex = country.indexOf(selectedCountry);
//         if (countryIndex !== -1) {
//             city[countryIndex].push(newCity);
//             cityInput.value = ''; // Clear the input field
//             displayCountries();
//         }
//     }
// }

// function displayCountries() {
//     const countryList = document.getElementById('country-list');
//     countryList.innerHTML = ''; // Clear previous content
    
//     for (let i = 0; i < country.length; i++) {
//         const countryElement = document.createElement('div');
//         countryElement.innerHTML = country[i] + '<br>';
        
//         const cityList = document.createElement('ul');
//         for (let j = 0; j < city[i].length; j++) {
//             const cityItem = document.createElement('li');
//             cityItem.textContent = city[i][j];
//             cityList.appendChild(cityItem);
//         }
        
//         countryElement.appendChild(cityList);
//         countryList.appendChild(countryElement);
//     }
// }

// // Initial display
// displayCountries();
// updateCountrySelect();










// ===============================

let country = ['Azerbaycan', 'Turkey', 'Russia'];

let city = [
    ['Baki', 'Sumqayit', 'Xirdalan', 'Gence', 'Susha', 'Ucar', 'Qusar'],
    ['Istanbul', 'Ankara', 'Trabzon'],
    ['Moskva', 'Saint Petersburg', 'Kaliningrad']
];

function addCountry() {
    const countryInput = document.getElementById('country');
    const newCountry = countryInput.value.trim();
    if (newCountry !== "") {
        country.push(newCountry);
        city.push([]); // Add an empty array for cities
        updateCountrySelect();
        countryInput.value = ''; // Clear the input field
        displayCountries();
    }
}

function updateCountrySelect() {
    
    const countrySelect = document.getElementById('country_data');
    countrySelect.innerHTML = '<option value="">-SELECT-</option>'; // Clear previous options
    for (let i = 0; i < country.length; i++) {
        const option = document.createElement('option');
        option.value = country[i];
        option.textContent = country[i];
        countrySelect.appendChild(option);
    }
}

function addCity() {
    const countrySelect = document.getElementById('country_data');
    const selectedCountry = countrySelect.value;
    const cityInput = document.getElementById('city');
    const newCity = cityInput.value.trim();
    
    if (selectedCountry !== "" && newCity !== "") {
        const countryIndex = country.indexOf(selectedCountry);
        if (countryIndex !== -1) {
            city[countryIndex].push(newCity);
            cityInput.value = ''; // Clear the input field
            displayCountries();
        }
    }
}

function displayCountries() {
    const countryList = document.getElementById('country-list');
    countryList.innerHTML = ''; // Clear previous content
    
    for (let i = 0; i < country.length; i++) {
        const countryElement = document.createElement('div');
        countryElement.innerHTML = country[i] + '<br>';
        
        const cityList = document.createElement('ul');
        for (let j = 0; j < city[i].length; j++) {
            const cityItem = document.createElement('li');
            cityItem.textContent = city[i][j];
            cityList.appendChild(cityItem);
        }
        
        countryElement.appendChild(cityList);
        countryList.appendChild(countryElement);
    }
}

// Initial display
displayCountries();
updateCountrySelect();




