// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const divTopics = document.querySelector(".topics");

axios.get(`https://lambda-times-backend.herokuapp.com/topics`).then(data => {
  console.log("response", data.data.topics);
  const dataTopics = data.data.topics;
  dataTopics.forEach(() => {
    const element = tabComponent();
    divTopics.appendChild(element);
  });
});

function tabComponent() {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = "Topic Here";

  return tab;
}
