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

axios.get(`https://lambda-times-backend.herokuapp.com/articles`).then(data => {
  //   console.log(data.data.articles.bootstrap[0].authorName);
  //   console.log(data.data.articles.javascript[0].headline);
  console.log(data.data.articles);
});

// function Articles(obj) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const headline = document.createElement("div");
//   headline.classList.add("headline");
//   headline.textContent = ``;

//   const author = document.createElement("div");
//   author.classList.add("author");
//   const imgDiv = document.createElement("div");
//   imgDiv.classList.add("img-container");

//   const img = document.createElement("img");
//   img.src = ``;
//   const name = document.createElement("span");
//   name.textContent = `By `;

//   card.appendChild(headline);
//   card.appendChild(author);
//   card.appendChild(imgDiv);
//   imgDiv.appendChild(img);
//   author.appendChild(name);

//   return card;
// }

function javascript(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = ``;

  const author = document.createElement("div");
  author.classList.add("author");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = ``;
  const name = document.createElement("span");
  name.textContent = `By `;

  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgDiv);
  imgDiv.appendChild(img);
  author.appendChild(name);

  return card;
}

function jquery(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = ``;

  const author = document.createElement("div");
  author.classList.add("author");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = ``;
  const name = document.createElement("span");
  name.textContent = `By `;

  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgDiv);
  imgDiv.appendChild(img);
  author.appendChild(name);

  return card;
}

function node(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = ``;

  const author = document.createElement("div");
  author.classList.add("author");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = ``;
  const name = document.createElement("span");
  name.textContent = `By `;

  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgDiv);
  imgDiv.appendChild(img);
  author.appendChild(name);

  return card;
}

function technology(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = ``;

  const author = document.createElement("div");
  author.classList.add("author");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = ``;
  const name = document.createElement("span");
  name.textContent = `By `;

  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgDiv);
  imgDiv.appendChild(img);
  author.appendChild(name);

  return card;
}
