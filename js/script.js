/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    // create two variables which will represent the index for the first and last student on the page
   //  startIndex = (page parameter * items per page) - items per page
   const startIndex = (page * 9 ) - 9;
   // const endIndex = page parameter * items per page
   const endIndex = page  * 9;
  // select the element with a class of `student-list` and assign it to a variable
  // set the innerHTML property of the variable you just created to an empty string

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex ) {
let studentItem = `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
    </div>
  </li>`;
  studentList.insertAdjacentHTML('beforeend', studentItem);
    } 
  }
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements 
}
showPage(data, 2);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
// function addPagination(data) {
  // const pages
 // how many pages can be displayed?
//  let numberOfPages = Math.ceil(data.length / 9);
// // 
// for (let i = 0;i < numberOfPages.length; i++) 
// let pagesLeft = pages.length;
//   if (page content is less than 1) {
//     page element class is null 
//   } 
// } 

 //create an event listener that calls showpage with the relevant args



// Call functions
