function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());

  var d = new Date();
  var now = new Date();
  var n =  now.getMilliseconds()  - endtime.getMilliseconds() ;

  var milliseconds = n ;
  var seconds = t;//Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'milliseconds': milliseconds
  };
}
window.onload = function (){
              // new Date(year, month,  day,  hours,  minutes,  seconds,  milliseconds);
  var deadline = new Date(2047, 7,      1,    0,      0,        0,        0);
  initializeClock('clockdiv', deadline);
  
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  console.log(clock);
  // var daysSpan = clock.querySelector('.days');
  // var hoursSpan = clock.querySelector('.hours');
  // var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  // var milliseconds = clock.querySelector('.milliseconds');
  

  function updateClock() {
    var t = getTimeRemaining(endtime);

    // daysSpan.innerHTML = t.days;
    // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    // minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-12,10);
    // milliseconds.innerHTML = ('0' + t.milliseconds).slice(-3);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick", updateClock);
  
  updateClock();
}

