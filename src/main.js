import { diffDates, diffToHtml } from "./modules/datecalc.js"; // 1
import { formatError, Duration } from "./modules/utils.js"; // 2
import { start, stop } from "./modules/timer.js";
import { toggleDiv } from "./modules/navigation.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const TimerForm = document.getElementById("timer");
const idSectionToggleElement = document.getElementById("section_toggle");
const TimeResult = document.getElementById("timecalc__result");
const StopButtonForm = document.getElementById("stopTimer");

dateCalcForm.addEventListener("submit", handleCalcDates);
idSectionToggleElement.addEventListener("click",toggleSectionHandler);

TimerForm.addEventListener("submit", handleCalcTime);
StopButtonForm.addEventListener("click", handlerStopTime);

function toggleSectionHandler(event) {

    event.preventDefault();
    
    toggleDiv(dateCalcForm, TimerForm);

};


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

let SetTimerID;


var sound = new Howl({
    src: ['../public/sound.mp3']
  });
  
  


function handleCalcTime(event) {

   // let { time } = event.target.elements;


    //TimerForm.innerHTML = "";

    event.preventDefault();
    const getElementTime = document.getElementsByName('time')[0];
    console.log(getElementTime.value);
    const getTimeValue = Duration.fromISOTime(getElementTime.value).toObject();
    console.log(getTimeValue);
    let getMillsecondTime = getTimeValue.hours*60*60*1000+getTimeValue.minutes*60*1000+getTimeValue.seconds*1000;
    console.log(getMillsecondTime);


   TimeResult.innerHTML = getMillsecondTime;
   
   clearInterval(SetTimerID);

   SetTimerID =setInterval(function (){
    getMillsecondTime =  getMillsecondTime-1000; 
    TimeResult.innerHTML = getMillsecondTime/1000
    
    if (getMillsecondTime <=0){
        sound.play();
        clearInterval(SetTimerID);
    } 

}

    , 1000);


    
    

    
};

function handlerStopTime (){
    clearInterval(SetTimerID);  
    TimeResult.innerHTML = "";
    sound.stop();
};



idSectionToggleElement.click();

