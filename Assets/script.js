
const currentDay = dayjs().format('MMMM D, YYYY');
console.log(currentDay);

const currentHour = dayjs().hour();
console.log(currentHour);

$(document).ready(function () {

  $("#currentDay").text(currentDay);

  $(".saveBtn").on("click", function() {
    let timeBlockId = $(this).parent().attr("id");
    let userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  function eachTimeSlot() {
      currentHour;
      $(".time-block").each(function() {
        let timeBlock = parseInt($(this).attr("id").split("hour"));

        if (timeBlock < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
        }

        if (timeBlock === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        }

        if (timeBlock > currentHour) {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        } 
    })
  }

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
 
 eachTimeSlot();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
