// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.zz

const currentDay = dayjs().format('MMMM D, YYYY');

console.log(currentDay);

$(document).ready(function () {

  function updateClass() {

   let currentHour = dayjs().hour();

  let elements = document.querySelectorAll("[id]");

  elements.forEach(function(element) {

    let hour = parseInt(element.id);

    if (hour < currentHour) {
      element.classList.add("past");
    } else if (hour === currentHour) {
      element.classList.add("present");
    } else {
      element.classList.add("future");
    }
  });
}


$("#currentDay").text(currentDay);

  $(".saveBtn").on("click", function() {
    let timeBlockId = $(this).parent().attr("id");
    let userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);

    updateClass();
  });

 

 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
