let totalSeconds = 0;
let timerInterval;

function startTimer() 
{
  if (timerInterval) return; 

  const h = parseInt(document.getElementById("hours").innerText);
  const m = parseInt(document.getElementById("minutes").innerText);
  const s = parseInt(document.getElementById("seconds").innerText);

  totalSeconds = h * 3600 + m * 60 + s;

  if (totalSeconds <= 0) return;

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) 
    {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      return;
    }
    totalSeconds--;

    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    document.getElementById("hours").innerText = String(hrs).padStart(2, '0');
    document.getElementById("minutes").innerText = String(mins).padStart(2, '0');
    document.getElementById("seconds").innerText = String(secs).padStart(2, '0');
  }, 1000);
}

function resetTimer() 
{
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
}
