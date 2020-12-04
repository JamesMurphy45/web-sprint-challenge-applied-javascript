// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //Element Creation
   const headerDiv = document.createElement('div')
   const headerDate = document.createElement('span')
   const headerTitle = document.createElement('h1')
   const headerTemp = document.createElement('span')
  
   //Class Assignment
   headerDiv.classList.add('header')
  
   //Placement
   headerDiv.appendChild(headerDate)
   headerDiv.appendChild(headerTitle)
   headerDiv.appendChild(headerTemp)
  
  //return div
  return headerDiv
  }
  
  const header = document.querySelector('.header-container')
  const header1 = Header(header1)
  header.appendChild(header1)
