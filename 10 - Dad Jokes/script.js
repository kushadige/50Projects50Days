// https://icanhazdadjoke.com/

const jokeEl = document.getElementById('joke');
const getJoke = document.getElementById('get-joke');

getJoke.addEventListener('click', generateJoke);

generateJoke();

// function generateJoke() {
//     // const http = new XMLHttpRequest();

//     // http.open('GET', 'https://icanhazdadjoke.com/', true);
//     // http.setRequestHeader('Accept', 'application/json');

//     // http.onload = function(){
//     //     if(this.status === 200){
//     //         jokeEl.innerHTML = JSON.parse(this.responseText).joke;
//     //     }
//     // }

//     // http.send();
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => jokeEl.innerHTML = data.joke);
// }

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config);

    const data = await response.json();

    jokeEl.innerHTML = data.joke;
}