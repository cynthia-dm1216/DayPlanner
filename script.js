let dateNo = moment();

let currentTime = dateNo.format('Hr')
currentTime = parseInt(currentTime)

$("#currentDay").text(dateNo.format("MMMM Do YYYY, h:mm:ss a"));
//console.log ("current day and time"


//save button click event
var firstusertask_9AM = document.getElementById("first_toDo");
var secondusertask_10AM = document.getElementById("second_toDo");
var thirdusertask_11AM = document.getElementById("third_toDo");
var fourthusertask_Noon = document.getElementById("fourth_toDo");
var fifthusertask_1PM = document.getElementById("fifth_toDo");
var sixthusertask_2PM= document.getElementById("sixth_toDo");
var seventhusertask_3PM = document.getElementById("seventh_toDo");
var eigthusertask_4PM = document.getElementById("eigth_toDo");
var ninethusertask_5PM = document.getElementById("nineth_toDo");
var tenthusertask_6PM = document.getElementById("tenth_toDo");
var eleventhusertask_7PM = document.getElementById("eleventh_toDo");
var twelvethusertask_8PM= document.getElementById("twelveth_toDo");
var thirdteenusertask_9PM = document.getElementById("thirdteen_toDo");


$("button").on("click",function(){
    var task_obj = {
      value_9AM: firstusertask_9AM.value,
      value_10AM: secondusertask_10AM.value, 
      value_11AM: thirdusertask_11AM.value,  
      value_Noon: fourthusertask_Noon.value,
      value_1PM: fifthusertask_1PM.value,
      value_2PM: sixthusertask_2PM.value,
      value_3PM: seventhusertask_3PM.value,
      value_4PM: eigthusertask_4PM.value,
      value_5PM: ninethusertask_5PM.value,
      value_6PM: tenthusertask_6PM.value,
      value_7PM: eleventhusertask_7PM.value,
      value_8PM: twelvethusertask_8PM.value,
      value_9PM: thirdteenusertask_9PM.value,
    }
    localStorage.setItem("toDo_9AM", task_obj.value_9AM);
    console.log(task_obj);
    localStorage.setItem("toDo_10AM", task_obj.value_10AM);
    localStorage.setItem("toDo_11AM", task_obj.value_11AM);
    localStorage.setItem("toDo_Noon", task_obj.value_Noon);
    localStorage.setItem("toDo_1PM", task_obj.value_1PM);
    localStorage.setItem("toDo_2PM", task_obj.value_2PM);
    localStorage.setItem("toDo_3PM", task_obj.value_3PM);
    localStorage.setItem("toDo_4PM", task_obj.value_4PM);
    localStorage.setItem("toDo_5PM", task_obj.value_5PM);
    localStorage.setItem("toDo_6PM", task_obj.value_6PM);
    localStorage.setItem("toDo_7PM", task_obj.value_7PM);
    localStorage.setItem("toDo_8PM", task_obj.value_8PM);
    localStorage.setItem("toDo_9PM", task_obj.value_9PM);
    })

    var toDo_9AMlocalStorage = localStorage.getItem("toDo_9AM");
    var toDo_10AMlocalStorage = localStorage.getItem("toDo_10AM");
    var toDo_11AMlocalStorage = localStorage.getItem("toDo_11AM");
    var toDo_NoonlocalStorage = localStorage.getItem("toDo_Noon");
    var toDo_1PMlocalStorage = localStorage.getItem("toDo_1PM");
    var toDo_2PMlocalStorage = localStorage.getItem("toDo_2PM");
    var toDo_3PMlocalStorage = localStorage.getItem("toDo_3PM");
    var toDo_4PMlocalStorage = localStorage.getItem("toDo_4PM");
    var toDo_5PMlocalStorage = localStorage.getItem("toDo_5PM");
    var toDo_6PMlocalStorage = localStorage.getItem("toDo_6PM");
    var toDo_7PMlocalStorage = localStorage.getItem("toDo_7PM");
    var toDo_8PMlocalStorage = localStorage.getItem("toDo_8PM");
    var toDo_9PMlocalStorage = localStorage.getItem("toDo_9PM");
   

   firstusertask_9AM.value = toDo_9AMlocalStorage;
    console.log(toDo_9AMlocalStorage)
    secondusertask_10AM.value = toDo_10AMlocalStorage;
    thirdusertask_11AM.value = toDo_11AMlocalStorage;
    fourthusertask_Noon.value = toDo_NoonlocalStorage;
    fifthusertask_1PM.value = toDo_1PMlocalStorage;
    sixthusertask_2PM.value = toDo_2PMlocalStorage;
    seventhusertask_3PM.value = toDo_3PMlocalStorage;
    eigthusertask_4PM.value = toDo_4PMlocalStorage;
    ninethusertask_5PM.value = toDo_5PMlocalStorage;
    tenthusertask_6PM.value = toDo_6PMlocalStorage;
    eleventhusertask_7PM.value = toDo_7PMlocalStorage;
    twelvethusertask_8PM.value = toDo_8PMlocalStorage;
    thirdteenusertask_9PM.value = toDo_9PMlocalStorage;

    $(".input-row").each(function(){
      var inputEl = $(this);
      console.log(inputEl);
      if (inputEl.data().time < dateNo) {
        inputEl.addClass('past');
      };
      if (inputEl.data().time == dateNo) {
        inputEl.addClass('present');
      };
      if (inputEl.data().time > dateNo) {
        inputEl.addClass('future');
      };
    })