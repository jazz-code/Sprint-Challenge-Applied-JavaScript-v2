// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector(".cards-container");

// axios.get(`https://lambda-times-backend.herokuapp.com/articles`).then(res => {
//   //   console.log(data.data.articles.bootstrap[0].authorName);
//   //   console.log(data.data.articles.javascript[0].headline);
//   //   console.log(data.data.articles.bootstrap[0]);
//   //   console.log(data.data.articles);
//   let articles = res.data.articles;
//   for (topic in articles) {
//     articles[topic].forEach(obj => {
//       cards.appendChild(article(obj));
//     });
//   }
// });
fetch("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => res.json())
  .then(data => {
    // const dataKeys = Object.keys(data);
    const categories = Object.keys(data.articles);
    // console.log('categories', categories)
    categories.forEach(cat => {
      console.log(cat);
      data.articles[cat].forEach(obj => {
        cards.appendChild(article(obj));
      });
    });
  });

function article(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = obj.headline;

  const author = document.createElement("div");
  author.classList.add("author");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = obj.authorPhoto;

  const name = document.createElement("span");
  name.textContent = `By ${obj.name}`;

  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgDiv);
  card.appendChild(img);
  card.appendChild(name);

  return card;
}
