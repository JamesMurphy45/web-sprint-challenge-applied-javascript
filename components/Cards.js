// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res)=>{
        //articles
        const bootstrap = res.data.articles.bootstrap
        const javascript = res.data.articles.javascript
        const jquery = res.data.articles.jquery
        const node = res.data.articles.node
        const technology =res.data.articles.technology
        
        //forEach article iterate
        bootstrap.forEach(item =>{
            const articles = cardMaker(item)
            cardsContainer.appendChild(articles)
        })
        javascript.forEach(item =>{
            const articles = cardMaker(item)
            cardsContainer.appendChild(articles)
        })
        jquery.forEach(item =>{
            const articles = cardMaker(item)
            cardsContainer.appendChild(articles)
        })
        node.forEach(item =>{
            const articles = cardMaker(item)
            cardsContainer.appendChild(articles)
        })
        technology.forEach(item =>{
            const articles = cardMaker(item)
            cardsContainer.appendChild(articles)
        })

    })
    .catch(err =>{
      console.log(err)
    })  


    function cardMaker(obj){
    //Create Elms
    const cardDiv = document.createElement('div')
    const headLineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const authorCardName = document.createElement('span')
    //Placement
    cardDiv.appendChild(headLineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imageContainer)
    imageContainer.appendChild(authorImage)
    authorDiv.appendChild(authorCardName)
    //Attrs
    cardDiv.classList.add('card')
    headLineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imageContainer.classList.add('img-container')
    authorImage.src = obj.authorPhoto

    //content
    headLineDiv.textContent = obj.headline
    authorCardName.textContent = obj.authorName
    //onClick Event
    cardDiv.addEventListener('click', event =>{
        console.log(headLineDiv.textContent)
    })

    //dont forget to return
    return cardDiv
}

