// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const spanDate = document.createElement('span');
    spanDate.classList.add('date');
    spanDate.textContent = 'SMARCH 28, 2019';

    const title = document.createElement('h1');
    title.textContent = "Lambda Times";

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    spanTemp.textContent = `98°`;

    header.appendChild(spanDate);
    header.appendChild(title);
    header.appendChild(spanTemp);

    return header;
}
