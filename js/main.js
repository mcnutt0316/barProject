//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    let noSpace = drink.replace(/\\s+/g, '')

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${noSpace}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('.name').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('#random').addEventListener('click',randomDrink)



function randomDrink(){

  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then( res => res.json())
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('.name').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('.glass').innerText = data.drinks[0].strGlass
      document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
      //i think i will need to learn async and promises to do what i am trying below..
      // for (let i = 1; i <= 15; i++){
      //   const measure = `data.drinks[0].strMeasure${i}`
      //   console.log(measure)
      // }
      for(let i = 1; i <= 15; i++){
        console.log(`You need ${data.drinks[0].strMeasure[i]} of ${data.drinks[0].strIngredient[i]}`)
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
  });
}



