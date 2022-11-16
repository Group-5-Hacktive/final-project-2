function formatAMPM(date) {

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
  
    hours = hours ? hours : 12; 
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  
  document.getElementById("realtime").innerText = formatAMPM(new Date());
 

  function formatAMPM(date) {
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
  
    hours = hours ? hours : 12;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  document.getElementById("realtime2").innerText = formatAMPM(new Date());

  function formatAMPM(date) {
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
  
    hours = hours ? hours : 12;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  document.getElementById("realtime3").innerText = formatAMPM(new Date());