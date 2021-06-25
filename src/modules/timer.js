export function start() {
    alert(123);
	window.timerId = window.setInterval(timer, 1000);
    
};

//Эта функция останавливает таймер
export function stop() {
    alert(123);
	window.clearInterval(window.timerId);
};

//TimerForm.addEventListener("submit", handleCalcTime);

function handleCalcTime(event) {

    //dateCalcResult.innerHTML = "";
    event.preventDefault();
    
    console.log('submit');

};

function setTimeInterval (){

    

};
