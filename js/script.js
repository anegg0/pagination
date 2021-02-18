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
   let studentsUl = document.querySelector('.student-list');
   console.log(studentsUl);
   let li = document.createElement('li');
   li.classList.add('.student-item')
   studentsUl.appendChild(li);
   let divStudents = document.createElement('student-details');
  // set the innerHTML property of the variable you just created to an empty string
   studentList = '';

      //  const ul = document.querySelector('ul .student-list');
      // console.log(list.length);
  // loop over the length of the `list` parameter
//   for (let i = 0; i < list.length; i++) {
//     if (i >= startIndex && i <= endIndex -1) {
// li = document.createElement('li');
      //  const h3 = document.querySelector('h3');
      //  const divStudentDetails = document.querySelector('div #student-details');
      //  h3.textContent = `${list[i].name.first} ${list[i].name.last}`;

      // console.log(list[i].name.last) 
    } 
//   }
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements 
// }
showPage(data, 2);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(params) {
   
}


// Call functions
