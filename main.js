import { diffDates, diffToHtml } from "/datecalc.js"; // 1
import { formatError } from "/utils.js"; // 2
import { start, stop } from "/timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const TimerForm = document.getElementById("timer");

dateCalcForm.addEventListener("submit", handleCalcDates);
TimerForm.addEventListener("submit", handleCalcTime);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    
    console.log('submit');

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 43
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
};

function handleCalcTime(event) {

    //dateCalcResult.innerHTML = "";
    event.preventDefault();
    
    console.log('submit');

};
