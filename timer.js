function startTimer(input){
    let timerContainer = document.querySelector(input.selector);
    let endTime = input.finalTime;
    let showEndTime = input.showEndTime;
    let isShowSec = input.showSec? true : false;
    let showText = input.showText;

    if(!endTime.year || !endTime.month || !endTime.date){
        alert('缺少完整年月日');
    }else{
        let endYear = endTime.year; 
        let endMon = endTime.month-1; 
        let endDate = endTime.date; 
        let endHr = endTime.hour? endTime.hour:0; 
        let endMin = endTime.min? endTime.min:0; 
        let endSec = endTime.sec? endTime.sec:0;
    
        let mrlTimer = window.setInterval(function() {
            let time = new Date();
            let nowTime = time.getTime();
            time.setFullYear(endYear);
            time.setMonth(endMon);
            time.setDate(endDate);
            time.setHours(endHr);
            time.setMinutes(endMin);
            time.setSeconds(endSec);
            
            let endTime = time.getTime();
            let offsetTime = (endTime - nowTime) / 1000;
            let endTimeText = `<p>距離${endYear}年${endMon+1}月${endDate}日 ${endHr}點${endMin}分${endSec}秒 還有</p>`
            let resultElement = '';
            if(offsetTime<=0){
                resultElement = getResultHTML(showText,isShowSec,0,0,0,0);
                window.clearInterval(mrlTimer);
            }else{
                let sec ,min, hr, day;
                sec = parseInt(offsetTime % 60);
                min = parseInt((offsetTime / 60) % 60);
                hr = parseInt((offsetTime / 60 / 60)% 24);
                day = parseInt(offsetTime / 60 / 60 /24);
                resultElement = getResultHTML(showText,isShowSec,day,hr,min,sec);
            }
            timerContainer.innerHTML= showEndTime ? endTimeText + resultElement : resultElement;
        }, 1000);
    }
}

function getResultHTML(showText, showSec, day, hr, min, sec){
    let result;
    if(showText && showSec){
        result = `<span class="timer timer-day">${day}</span>天<span class="timer timer-hour">${hr}</span>時<span class="timer timer-min">${min}</span>分<span class="timer timer-sec">${sec}</span>秒`;
    }else if(!showText && showSec){
        result = `<span class="timer timer-day">${day}</span><span class="timer timer-hour">${hr}</span><span class="timer timer-min">${min}</span><span class="timer timer-sec">${sec}</span>`;
    }else if(showText && !showSec){
        result = `<span class="timer timer-day">${day}</span>天<span class="timer timer-hour">${hr}</span>時<span class="timer timer-min">${min}</span>分`;
    }else if(!showText && !showSec){
        result = `<span class="timer timer-day">${day}</span><span class="timer timer-hour">${hr}</span><span class="timer timer-min">${min}</span>`;
    }else{
        result = `<span class="timer timer-day">${day}</span>天<span class="timer timer-hour">${hr}</span>時<span class="timer timer-min">${min}</span>分<span class="timer timer-sec">${sec}</span>秒`;
    }
    return result;
}