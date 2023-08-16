//input elements
const heightInput= document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultInput = document.getElementById('result')

//BMI funtion
function bmiCalculator() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value); 
    const bmi = weight / (height * height);

    if (isNaN(bmi)) {
        resultInput.innerText = 'Please enter valid weight and height.';
    } else {
        let alert;
        if (bmi < 18.5) {
            alert = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            alert = 'Normal Weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            alert = 'Overweight';
        } else {
            alert = 'Obese';
        }

        resultInput.innerText = `Your BMI is: ${bmi.toFixed(2)} (${alert})`;
    }
}
