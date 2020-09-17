var counter = 0;

$("#reset").click( function () {
  counter = 0;
  $("#counter").html(counter);
  $("#counter").css("color","black")
});

$("#add").click(function (){
    
    counter++;
    
    $("#counter").html(counter);
    if (counter < 0 ){
        $("#counter").css("color","red");
      } else if (counter > 0){
        $("#counter").css("color","green");
      } else {
        $("#counter").css("color","black");
      }
});

$("#subtract").click(function (){
    
    counter--;
    
    $("#counter").html(counter);
    if (counter < 0 ){
        $("#counter").css("color","red");
      } else if (counter > 0){
        $("#counter").css("color","green");
      } else {
        $("#counter").css("color","black");
      }
});