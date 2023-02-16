  function Timer0(){
  function getTimeFromSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR',{
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const timer1 = document.querySelector('.timer1');
  const Start = document.querySelector('.Start');
  const Stop2 = document.querySelector('.Stop2');
  const Reset = document.querySelector('.Reset');
  let seconds = 0;
  let timer;

  function startTimer(){
    timer = setInterval(
      function(){
        seconds++;
        timer1.innerHTML = getTimeFromSeconds(seconds)
      },1000
    );
  }

  document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('Start')){
      clearInterval(timer);
      startTimer();
      timer1.style.color= 'rgb(188, 255, 3)'  
    }
    if(el.classList.contains('Stop2')){
      clearInterval(timer);
      timer1.style.color= 'red'  
    }
    if(el.classList.contains('Reset')){
      clearInterval(timer);
      timer1.style.color= 'rgb(188, 255, 3)'
      seconds = 0;
      timer1.innerHTML = '00:00:00';  
    }
  });
}
Timer0();