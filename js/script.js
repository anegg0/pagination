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
This function will create and insert/append the elements needed to display a "page" of nine students
it takes a set of data and a number as arguments and builds a set of 9 HTML/DOM elements each representing a subset of the inputed data (studentItem)
*/
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  let studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
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
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

/*
This function will create and insert/append the elements needed for the pagination buttons,
it takes a set of data as arguments, builds a set of HTML/DOM elements each representing a navigation button and 'listens' to a click event on any button to call the showPage
function.
*/
function addPagination(list) {
  // create a variable to calculate the number of pages needed

  let numOfPages = Math.ceil(data.length / 9);
  console.log(numOfPages);
  // select the element with a class of `link-list` and assign it to a variable
  const linkList = document.querySelector(".link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";
  // loop over the number of pages needed
  for (let i = 1; i <= numOfPages; i++) {
    const button = `<li>
  <button type="button">${i}</button>
</li>`;
    linkList.insertAdjacentHTML("beforeend", button);
    const firstButton = document.querySelector("button");
    firstButton.className = "active";

    linkList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const active = document.querySelector(".active");
       active.className = "";
       const activeButton = e.target.className = 'active';
       let numButton = e.target.textContent;
        showPage(data, numButton);
      }
    });
  }
}

showPage(data, 1);

addPagination(data);
