const schedules = document.querySelectorAll(".chronogram-container p");
const visorCharacters = document.querySelectorAll(".numbers, .sign, .period");
const actualHours = document.querySelector("[data-actual-h]");
const actualPeriod = document.querySelector("[data-actual-p]");
const actualMinutes = document.querySelector("[data-actual-m]");
const actualDate = document.querySelector("[data-actual-date]");
const buttons = document.querySelectorAll(`.button-right, .button-left,
[data-resert-btn], [data-start-btn], [data-stop-btn]`);
const targetHours = document.querySelector("[data-target-hours]");
const targetMinutes = document.querySelector("[data-target-minutes]");
const targetPeriod = document.querySelector("[data-target-period]");
const intervalHours = document.querySelector("[data-interval-hours]");
const intervalMinutes = document.querySelector("[data-interval-minutes]");
const intervalPeriod = document.querySelector("[data-interval-period]");
const currentHours = document.querySelector("[data-current-hours]");
const currentMinutes = document.querySelector("[data-current-minutes]");
const currentPeriod = document.querySelector("[data-current-period]");
const signs = document.querySelectorAll("[data-sign]");
const on = document.querySelector("[data-button-on]");
const off = document.querySelector("[data-button-off]");
const plussButtonDTH = document.querySelector("[data-pluss-btn-dt-h]");
const lessButtonDTH = document.querySelector("[data-less-btn-dt-h]");
const plussButtonDTM = document.querySelector("[data-pluss-btn-dt-m]");
const lessButtonDTM = document.querySelector("[data-less-btn-dt-m]");
const plussButtonIH = document.querySelector("[data-pluss-btn-i-h]");
const lessButtonIH = document.querySelector("[data-less-btn-i-h]");
const plussButtonIM = document.querySelector("[data-pluss-btn-i-m]");
const lessButtonIM = document.querySelector("[data-less-btn-i-m]");
const resertButton = document.querySelector("[data-resert-btn]");
const startButton = document.querySelector("[data-start-btn]");
const stopButton = document.querySelector("[data-stop-btn]");
const body = document.body;
const audioEnd = document.getElementById("end");
const audioPause = document.getElementById("pause");

body.onload = function(){
    initialize();
}

var initialize = function(){
    var machine = new ScheduleMachine(currentHours,currentMinutes,currentPeriod);
    var compute = new Numbers(machine.numbersShape.hoursStorageInterval,intervalHours,
    machine.numbersShape.minutesStorage,intervalMinutes,targetHours,targetMinutes);
    var numbersDTH = new Numbers(machine.numbersShape.hoursStorage,targetHours,null,
    null,null,null,true);
    var numbersDTM = new Numbers(machine.numbersShape.minutesStorage,targetMinutes,null,
    null,null,null,true);
    var numbersIH = new Numbers(machine.numbersShape.hoursStorageInterval,intervalHours);
    var numbersIM = new Numbers(machine.numbersShape.minutesStorage,intervalMinutes);
    on.addEventListener("click", work);
    off.addEventListener("click", oFFAll); 
    (()=>{
        var time = new ScheduleMachine(actualHours,actualMinutes,actualPeriod);
        setInterval(()=>{
            time.currentTime();
            var date = new Date;
            var day = date.getDate();
            var month = date.getMonth();
            if(day < 10)day = `0${day}`;
            if(month < 10)month = `0${month+1}`;
            actualDate.innerHTML = `${month}/${day}/${date.getFullYear()}`;       
        },1);
    })();
    function buttonsOn(){
        plussButtonDTH.addEventListener("click", pbDTH);
        lessButtonDTH.addEventListener("click", lbDTH);
        plussButtonDTM.addEventListener("click", pbDTM);
        lessButtonDTM.addEventListener("click", lbDTM);
        plussButtonIH.addEventListener("click", pbIH);
        lessButtonIH.addEventListener("click", lbIH);
        plussButtonIM.addEventListener("click", pbIM);
        lessButtonIM.addEventListener("click", lbIM);
    }
    function buttonsOff(){
        plussButtonDTH.removeEventListener("click", pbDTH);
        lessButtonDTH.removeEventListener("click", lbDTH);
        plussButtonDTM.removeEventListener("click", pbDTM);
        lessButtonDTM.removeEventListener("click", lbDTM);
        plussButtonIH.removeEventListener("click", pbIH);
        lessButtonIH.removeEventListener("click", lbIH);
        plussButtonIM.removeEventListener("click", pbIM);
        lessButtonIM.removeEventListener("click", lbIM);
    }
    function work(){
        on.removeEventListener("click", work);
        resertButton.addEventListener("click", resert);
        startButton.addEventListener("click", start);
        stopButton.addEventListener("click", stop)
        machine.on();
        buttonsOn();
    }
    function oFFAll(){
        on.addEventListener("click", work);
        numbersDTH.resert();
        numbersDTM.resert();
        numbersIH.resert();
        numbersIM.resert();
        machine.off();
        stop();
        resertButton.removeEventListener("click", resert);
        startButton.removeEventListener("click", start);
        stopButton.removeEventListener("click", stop)
        buttonsOff();
        startButton.style.backgroundColor = "white";
        resertButton.style.backgroundColor = "white";
        stopButton.style.backgroundColor = "white";
    }
    var resert = function(){
        startButton.addEventListener("click", start);
        numbersDTH.resert();
        numbersDTM.resert();
        numbersIH.resert();
        numbersIM.resert();
        compute.resert();
        machine.default();
        buttonsOn();
    }
    var start = function(){
        startButton.removeEventListener("click", start);
        compute.contdown();
        buttonsOff();
    }
    var stop = function(){
        startButton.addEventListener("click", start);
        compute.stop();
        buttonsOn();
    }
    var pbDTH = () => {
        numbersDTH.increase();
        numbersDTH.checkPeriod();
    }
    var lbDTH = () => {
        numbersDTH.decrease();
        numbersDTH.checkPeriod();
    }
    var pbDTM = () => {
        numbersDTM.increase();
    }
    var lbDTM = () => {
        numbersDTM.decrease();
    }
    var pbIH = () => {
        numbersIH.increase();
    }
    var lbIH = () => {
        numbersIH.decrease();
    }
    var pbIM = () => {
        numbersIM.increase();
    }
    var lbIM = () => {
        numbersIM.decrease();
    }
}

const ScheduleMachine = function(h,m,p){
    this.h = h;
    this.m = m;
    this.p = p;
    this.on = function(){
        this.resert();
        this.interval = setInterval(()=>{
            this.mode.time();
            this.currentTime();
        },1);
    }
    this.off = function(){
        signs.forEach(it => {it.innerHTML = ""});
        clearInterval(this.interval);
        visorCharacters.forEach(it => {it.innerHTML = "";});
        buttons.forEach(it => {it.style.color = "black";});
    }
    this.resert = function(){
        signs.forEach(it => {it.innerHTML = ":"});
        this.default();
    }
    this.mode = { 
        generalAppearance: document.querySelectorAll(".numbers, .sign, .button-right," +
        ".button-left, .period, [data-resert-btn], [data-start-btn], [data-stop-btn]"),
        night: function(){
            this.generalAppearance.forEach(it => {it.style.color = "green";});
        },
        day: function(){
            this.generalAppearance.forEach(it => {it.style.color = "black";});
        },
        time: function(){       
            var date = new Date;
            var hours = date.getHours();
            if(hours >= 18 || hours <= 5){
                this.night();
            }else{
                this.day();
            }
        },
    }
    this.numbersShape = {
        hoursStorage: ["00","01","02","03","04","05","06","07","08","09","10","11",
        "12","01","02","03","04","05","06","07","08","09","10","11"],
        hoursStorageInterval: ["00","01","02","03","04","05","06","07","08","09",
        "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
        minutesStorage: ["00","01","02","03","04","05","06","07","08","09","10","11",
        "12","13","14","15","16","17","18","19","20","21","22","23","24","25","26",
        "27","28","29","30","31","32","33","34","35","36","37","38","39","40","41",
        "42","43","44","45","46","47","48","49","50","51","52","53","54","55","56",
        "57","58","59","00"]
    }
    this.currentTime = function(){
        var date = new Date;
        var hours = date.getHours();
        var hoursShaped = this.numbersShape.hoursStorage.length;
        for(var iH = 0; iH < hoursShaped; iH++){
            if(iH == hours){
                this.h.innerHTML = this.numbersShape.hoursStorage[iH];
            }
        }
        var minutes = date.getMinutes();
        var minutesShaped = this.numbersShape.minutesStorage.length;
        for(var iM = 0; iM < minutesShaped; iM++){  
            if(iM == minutes){
                this.m.innerHTML = this.numbersShape.minutesStorage[iM];
            }
        }
        if(hours >= 12 && minutes > 0){
            this.p.innerHTML = "PM";
        }else{
            this.p.innerHTML = "AM";
        }
        if(this.h != actualHours){
            schedules.forEach(i =>{
                var id = i.getAttribute("id");
                if(id <= hours){
                    var place = document.querySelector(".chronogram-container");
                    place.scrollTop = (document.getElementById(id).offsetTop - place.offsetTop);
                }
            });
        }
    }
        
    this.default = function(){
        targetHours.innerHTML = "00";
        targetMinutes.innerHTML = "00";
        targetPeriod.innerHTML = "AM";
        intervalHours.innerHTML = "00";
        intervalMinutes.innerHTML = "00";
    }
}

class Numbers{
    constructor(content,place,content2,place2,place3,place4,v){
        this.place = place;
        this.content = content;
        this.place2 = place2;
        this.content2 = content2;
        this.place3 = place3;
        this.place4 = place4;
        this.verify = v;
        this.i = 0;
    }
    resert(){
        clearInterval(this.intervalLT);
        clearInterval(this.compute);
        startButton.style.backgroundColor = "white";
        resertButton.style.backgroundColor = "red";
        stopButton.style.backgroundColor = "white";
        audioEnd.pause();
        audioPause.pause();
        this.i = 0;
    }
    increase(){
        if(this.verify == true){
            this.i++;
            this.contentL = this.content.length;
            if(this.i < this.contentL){
                this.place.innerHTML = this.content[this.i];
            }else{
                this.i--;
            }
        }else{
            var i = Number(this.place.innerHTML);
            i++;
            this.contentL = this.content.length;
            if(i < this.contentL){
                this.place.innerHTML = this.content[i];
            }else{
                i--;
            }
        }
    }
    checkPeriod(){
        if(this.i < 12){
            targetPeriod.innerHTML = "AM";
            
        }else if(this.i >= 12){
            targetPeriod.innerHTML = "PM";
        }
    }
    decrease(){
        if(this.verify == true){
            if(this.i > 0){
                this.i--;
                this.place.innerHTML = this.content[this.i];
            }else{
                this.i++;
            }
        }else{
            var i = Number(this.place.innerHTML);
            if(i > 0){
                i--;
                this.place.innerHTML = this.content[i];
            }else{
                i++;
            }
        }
    }
    contdown(){
        startButton.style.backgroundColor = "red";
        resertButton.style.backgroundColor = "white";
        stopButton.style.backgroundColor = "white";
        var placeIH = this.place;
        var contentIH = this.content;
        var placeIM = this.place2;
        var contentIM = this.content2;
        var placeTH = this.place3
        var placeTM = this.place4;
        var timeH = Number(this.place.innerHTML)
        var timeM = Number(this.place2.innerHTML)
        const timeHC = Number(this.place.innerHTML)
        const timeMC = Number(this.place2.innerHTML)

        this.intervalLT = setInterval(()=>{;
            if(placeTH.innerHTML == currentHours.innerHTML &&
            placeTM.innerHTML == currentMinutes.innerHTML &&
            targetPeriod.innerHTML == currentPeriod.innerHTML){
                audioEnd.load();
                audioEnd.play();
                clearInterval(this.compute);
                clearInterval(this.intervalLT);
            }
        },1);
        if(placeIH.innerHTML != "00" || placeIM.innerHTML != "00"){
            this.compute = setInterval(()=>{
                if(placeIH.innerHTML > 0 && placeIM.innerHTML == 0){
                    timeH--;
                    timeM = 59;
                    placeIM.innerHTML = contentIM[timeM];
                    placeIH.innerHTML = contentIH[timeH];
                    
                }else if(placeIM.innerHTML > 0){
                    timeM--;
                    placeIM.innerHTML = contentIM[timeM];
                }
                if(placeIM.innerHTML == 0 && placeIM.innerHTML == 0){
                    audioPause.load();
                    audioPause.play();
                    timeH = timeHC;
                    timeM = timeMC;
                    placeIM.innerHTML = contentIM[timeM];
                    placeIH.innerHTML = contentIH[timeH];
                }
            },60000);
        }
    }
    stop(){
        startButton.style.backgroundColor = "white";
        resertButton.style.backgroundColor = "white";
        stopButton.style.backgroundColor = "red";
        clearInterval(this.intervalLT);
        clearInterval(this.compute);
        audioEnd.pause();
        audioPause.pause();
    }
}