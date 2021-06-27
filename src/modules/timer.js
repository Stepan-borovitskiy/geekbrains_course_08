import { sound } from "./utils.js"

let SetTimerID;

let currentTimer;

let timerListner = ()=>{};

export function listenTimer(fn){
    timerListner = fn;
};


export function startTimer(getMillsecondTime){

    clearInterval(SetTimerID);

     SetTimerID =setInterval(function (){
             getMillsecondTime =  getMillsecondTime-1000; 
             timerListner(getMillsecondTime);
             //TimeResult.innerHTML = getMillsecondTime/1000;
        
         if (getMillsecondTime <=0){
             sound.play();
             clearInterval(SetTimerID);
        } 
    
     }
    
         , 1000);

};

export function stopTimer(){
    clearInterval(SetTimerID);  
    //TimeResult.innerHTML = "";
    sound.stop();
    
    
};