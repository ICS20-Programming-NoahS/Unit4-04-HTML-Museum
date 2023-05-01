// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function determines whether or not the user gets a discount based on their age and the day of the week
 */
function MuseumDiscount() {
  
  //get the variables such as day of the week and user age
  let result = "";
  let userAge = parseInt(document.getElementById("user-age").value);
  let select = document.getElementById("days");
  let dayOfWeek = select.options[select.selectedIndex].value;

  // if user age is less than 5 or greater than 95
  if (userAge < 5 || userAge > 95) {
    result = "You get in for free! Enjoy the museum!";
  }

  // if user age is between 12 and 21 or it is tuesday or it is thursday
  else if ((userAge > 12 && userAge < 21) || (dayOfWeek == "tuesday") || (dayOfWeek == "thursday")) {
    result = "You get a discount! Enjoy the museum!";
  }

  // if they are not eligible for a discount
  else {
    result = "Please pay full price. Enjoy the museum!";
  }
 
  // Displays what discount the user will get
  document.getElementById("result").innerHTML = result;
}