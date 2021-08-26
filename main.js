const recipesArray = [
    {
      meal: "pancakes",
      ingredients: ["eggs", "flour", "milk", "butter"],
      time: "0.5hour",
    },
    {
      meal: "tomato soup",
      ingredients: ["eggs", "flour", "milk", "butter"],
      time: "1hour",
    },
    {
      meal: "eggs with salad",
      ingredients: ["eggs", "flour", "milk", "butter"],
      time: "1hour",
    },
    {
      meal: "cake",
      ingredients: ["eggs", "flour", "milk", "butter"],
      time: "1hour",
    },
    {
      meal: "soup",
      ingredients: ["tomato", "flour", "milk", "butter"],
      time: "1hour",
    },
  ];
  
  
//   1) Create a prompt with the recipe names
//   2) Capture the user input 
//   3) Show the recipe details according to the entered recipe
//   4) Show error if the recipe is not in the list
//   5) Show the result in this format "Pankcake takes 0.5 Hrs and ingredients required are: eggs, flour, milk, butter"
  

  let Question = prompt("recipe names")

  for( let i=0; i<=recipesArray.length; i++)
  
{
    let resp=recipesArray[i];
    if ( resp.meal.toLowerCase()===Question.toLowerCase())
   {
       console.log( ` You :  ${ resp.meal}  Takes ${ resp.time} and ingredients required are: ${resp.ingredients }`);
       break;

   } 
   if(resp.meal===recipesArray[recipesArray.length-1].meal)
   {
       console.log('the recipe is not in the list');
   }
}
 