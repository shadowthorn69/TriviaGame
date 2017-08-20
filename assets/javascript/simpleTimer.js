var timeleft = 30;
  var Timer = setInterval(function(){
    timeleft--;
      document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0)
          clearInterval(Timer);
  },1000);