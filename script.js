async function fetchData() {
    try {

        const loadingElement = document.getElementById('loading')

        const joke = document.getElementById('joke-container')

        loading.style.display = 'block'
        joke.style.display = 'none'

        const response = await fetch('https://icanhazdadjoke.com/slack')
        // console.log(response);

        const jsonData = await response.json();
        console.log(jsonData);

        loading.style.display = 'none'
        joke.style.display = 'block'

        loadData(jsonData)
    } catch (e) {
        console.log(e);
    }
}

function loadData(jsonData) {
    const jokeText = document.getElementById('text')
    jokeText.innerHTML = jsonData.attachments[0].text;
}


fetchData()



