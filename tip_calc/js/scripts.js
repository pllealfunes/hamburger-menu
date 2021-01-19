"use strict"

var bill = document.getElementById("bill_amount");
var split = document.getElementById("split_bill");
var tip = document.getElementById("tip");
var button = document.getElementById("sbmtBtn");

button.addEventListener("click", function(e) {

    if (split.value != "" && bill.value != "") {
        //Change tip selection into a number
        var percent = parseFloat(tip.value);

        //Change bill amount into a number
        var startBill = parseFloat(bill.value);
        //console.log(startBill);

        //Multiply percent by amount to get the tip amount to add to the bill
        var newBill = (startBill * percent) / 100;
        //console.log(newBill);

        //Change the amount of people splitting the bill into a number
        var people = parseFloat(split.value);
        //console.log(people);

        //Add the starting bill amount to the tip amount and divide the totol by the amount of people
        var total = ((startBill + newBill) / people).toFixed(2);
        document.getElementById("total").innerHTML = "Each Person Pays:" + " " + "$" + total;
        e.preventDefault();
    }

    else if (split.value == "" && bill.value != "") {
        //Change tip selection into a number
        var percent = parseFloat(tip.value);

        //Change bill amount into a number
        var startBill = parseFloat(bill.value);
        //console.log(startBill);

        //Multiply percent by amount to get the tip amount to add to the bill
        var newBill = (startBill * percent) / 100;
        //console.log(newBill);

        //Add bill amount and tip to get total
        var total = (startBill + newBill).toFixed(2);
        document.getElementById("total").innerHTML = "Total:" + " " + "$" + total;
        
        e.preventDefault();
    } 
    
    if(tip.value == ""){
      document.getElementById("total").innerHTML = "Please Fill Out The Form"; 
        e.preventDefault();
    }
}, false);