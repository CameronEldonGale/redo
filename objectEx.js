
//an example of an object
var ben = {
  name: "Ben",
  age: 9001,
}

// to access the value of the property name from the object ben would look like

ben.name   // same as "Ben"

//or

ben['name']  // The brackets will parse the string


function over9000( expectedObject){
  //if i passed it ben, expectedObject = ben, so expectedObject.age is the same as ben.age or 9001
  if (expectedObject.age > 9000) { 
    return "It's over 9000!"
  }
}

//passing "ben" thru the over9000 function
over9000(ben); //will return the string "It's over 9000!"

/*
and ben is the same as saying
    {
    name: "ben",
    age: "9001",
 }
 */
