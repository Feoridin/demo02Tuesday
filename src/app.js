"use strict:";

function calculateAnnualRate(monthlyRate){
    let annualRate = monthlyRate * 12;
    return annualRate;
}

function selectPlan(planName, monthlyRate){
    console.log(planName + " plan selected!");
    console.log("$" + monthlyRate + "/mo");

    let annualRate = calculateAnnualRate(monthlyRate);
    console.log("$" + annualRate + "/yr");

    let planElement = document.getElementById('planname');
    planElement.innerHTML = planName;

    let monthlyRateElement = document.getElementById('monthlyrate');
    monthlyRateElement.innerHTML = "$" + monthlyRate + "/mo";

    let annualRateElement = document.getElementById('annualrate');
    annualRateElement.innerHTML = "$" + annualRate + "/mo";

    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);

    let gooduntilElement = document.getElementById('gooduntil');
    gooduntilElement.innerHTML = nextYear.toDateString();

}