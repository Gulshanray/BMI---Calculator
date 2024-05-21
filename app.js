const form = document.querySelector("form")

//this uscase will give you empaty 
// const height = document.querySelector('#height').value

form.addEventListener("submit", function (e) {
  e.preventDefault();
     
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === "" || height === "" || isNaN(height)) {
    results.innerHTML = ` please give a valid height ${height}  `
  } else
    if (weight === "" || weight === "" || isNaN(weight)) {
      results.innerHTML = ` please give a valid weight ${weight}  `
    } else {
      const bmi = (weight / ((height * height / 10000)).toFixed(2))
      //show the results 
results.innerHTML = `<span style="background-color: brown; color: white; border-radius: 5px; text-align: center; padding: 5px">Your BMI is: ${bmi}</span>`;
    }



})