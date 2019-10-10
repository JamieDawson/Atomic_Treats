const UTIL = require("./lib/util");
const CONTENT = require("./content");
var console = require('console')
// GetContent
exports.function = function (searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT //contains all cakes.
  var chosenContent

    // Get content from local content.js file 
    // filter based on searchTerm (note that if you use a web API, then filtering can be done in the web API itself)
    if (searchTerm) {
      console.log("searchTerm is " + searchTerm)
      content = UTIL.findContent(content, searchTerm)
      console.log(content)
    }

    if (!searchTerm){
      console.log("no search term")
      return null;
    }
  
    //pick a random content
    if (content.length) {
      console.log("getting here?")
      var index = Math.floor(content.length * Math.random()) //chocolate would be 2 options. Returns number 0-1 in that case
      chosenContent = content[index]
    }

  
  // return content if exists, else null (No Result)
  if (chosenContent) {
    return {
      text: chosenContent.text,
      image: chosenContent.image,
      ingredients: chosenContent.ingredients,
      recipeSteps: chosenContent.recipeSteps
    }
  } else {
    return null;
  }
}