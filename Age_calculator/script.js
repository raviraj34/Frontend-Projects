function calculateAge(){


const today = new Date();
const birthdateInput = document.getElementById("birthdate").value;
const birthdateparts = birthdateInput.split("-");
const birthDay = birthdateparts[0];
const birthmonth = birthdateparts[1] - 1;
const birthyear = birthdateparts[2];
const birthDate = new Date(birthyear,birthmonth,birthDay);


console.log(birthdateInput);
console.log(birthdateparts);
console.log(birthDay);
console.log(birthmonth);
console.log(birthyear);


const isValidDate = (date) =>{
    return(
        Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
};

if(!isValidDate(birthDate)){

    alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
    return;

}



const ageInMilliseconds = today - birthDate;
const ageInseconds = Math.floor(ageInMilliseconds/1000);
const ageInMinutes = Math.floor(ageInseconds/60);
const ageInHours = Math.floor(ageInMinutes/60);
const ageInDays = Math.floor(ageInHours/24);
const ageInWeeks = Math.floor(ageInDays/7);
const ageInMonths = Math.floor(ageInDays/30.436875);
const ageInYears = Math.floor(ageInDays/365.25);


const resultcontainer = document.getElementById("result-container");
const result = document.getElementById("result");


result.innerHTML = `
<div class="result-item">
<h3>Age:</h3>
<p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
</div>
<div class="result-item">
<h3>Months passed:</h3>
<p> ${ageInMonths} </p>
</div>
<div class="result-item">
<h3>Weeks passed:</h3>
<p>${ageInWeeks} </p>
</div>
<div class="result-item">
<h3>Days passed:</h3>
<p>${ageInDays} </p>
</div>
<div class="result-item">
<h3>Hours passed:</h3>
<p>${ageInHours} </p>
</div>
<div class="result-item">
<h3>Minutes passed:</h3>
<p>${ageInMinutes} </p>
</div>
<div class="result-item">
<h3>Second passed:</h3>
<p>${ageInseconds} </p>
</div>
`;


resultcontainer.style.display = "block";




}



















const ageCalculatorForm = document.getElementById("Age_calculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
});