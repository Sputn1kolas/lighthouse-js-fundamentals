var whichSchool = function(age){
  if (age <= 13 ){
    console.log("Elementary School");
  } else {
    if (age <= 18) {
      console.log("Secondary School");
    } else {
      console.log("Lighthouse Labs");
    }
  }
}

whichSchool(22);
whichSchool(10);
whichSchool(15);

// boom