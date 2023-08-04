// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  //let now=(dayjs())
  //alert(now.hour())
  $("#currentDay").get(0).innerText =dayjs().format()
  for (let i = 9; i < 18; i++) {
    $("#hour-"+i).get(0).getElementsByTagName("textarea")[0].value = localStorage.getItem("hour-"+i)
  }
  $("button.btn.saveBtn.col-2.col-md-1").click(function(){
    // alert("test alert this.id "+this.id)
    // alert("test alert this.parent.id : "+this.parentElement.id)
    // alert("test alert this.parent.textarea : "+this.parentElement.id)
    // alert( "this.parentElement.getElementsByTagName   :  "+
    //  this.parentElement.getElementsByTagName("textarea")[0].value)

    localStorage.setItem(this.parentElement.id,this.parentElement.getElementsByTagName("textarea")[0].value)

  });

});
var msgToDisplay="Wow Today is an awesome day !"

setInterval(function() {
    let currentTime = dayjs()
    let currentHour = currentTime.hour()
    $('#currentDay').text(currentTime.format('YYYY-MM-DD HH:mm:ss'));
    for(let hr=9; hr<18; hr++){
      $("#hour-"+hr).removeClass()
      if(hr<currentHour){
        $("#hour-"+hr).addClass("row time-block past")
      }else if(hr>currentHour){
        $("#hour-"+hr).addClass("row time-block future")
      }else {
        $("#hour-"+hr).addClass("row time-block present")
      }
    }
    msgToDisplay = "Here is your plan for the day !"
    if(currentHour>17){
       msgToDisplay = "It's after office hours !  See what you had planned for the day."
    }
    $("#msg").text(msgToDisplay)
  }, 1000);
