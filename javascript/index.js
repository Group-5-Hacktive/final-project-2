function formatAMPM(date) {
    // ambil jam
    let hours = date.getHours();
    // ambil menit
    let minutes = date.getMinutes();
  
    // tentukan am atau pm dengan check jam nya, jika jam nya lebih dari samadengan 12, maka return pm, sebaliknya return am
    let ampm = hours >= 12 ? "PM" : "AM";
  
    // jam di modulo 12 untuk format 12 jam
    hours = hours % 12;
  
    // di sini di check lagi, apakah dia bernilai 0? karena 0 itu false maka dia check nya hours ?
    // ingat 0 bernilai false
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // check jika jam  kuran dari 10, maka tambahkan 0 di depannya
    hours = hours < 10 ? `0${hours}` : hours;
  
    // check jika minute kurang dari 10, maka tambahkan 0 di depannya
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    // tampung di variable strTime
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  
  document.getElementById("realtime").innerText = formatAMPM(new Date());
 

  function formatAMPM(date) {
    // ambil jam
    let hours = date.getHours();
    // ambil menit
    let minutes = date.getMinutes();
  
    // tentukan am atau pm dengan check jam nya, jika jam nya lebih dari samadengan 12, maka return pm, sebaliknya return am
    let ampm = hours >= 12 ? "PM" : "AM";
  
    // jam di modulo 12 untuk format 12 jam
    hours = hours % 12;
  
    // di sini di check lagi, apakah dia bernilai 0? karena 0 itu false maka dia check nya hours ?
    // ingat 0 bernilai false
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // check jika jam  kuran dari 10, maka tambahkan 0 di depannya
    hours = hours < 10 ? `0${hours}` : hours;
  
    // check jika minute kurang dari 10, maka tambahkan 0 di depannya
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    // tampung di variable strTime
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  document.getElementById("realtime2").innerText = formatAMPM(new Date());

  function formatAMPM(date) {
    // ambil jam
    let hours = date.getHours();
    // ambil menit
    let minutes = date.getMinutes();
  
    // tentukan am atau pm dengan check jam nya, jika jam nya lebih dari samadengan 12, maka return pm, sebaliknya return am
    let ampm = hours >= 12 ? "PM" : "AM";
  
    // jam di modulo 12 untuk format 12 jam
    hours = hours % 12;
  
    // di sini di check lagi, apakah dia bernilai 0? karena 0 itu false maka dia check nya hours ?
    // ingat 0 bernilai false
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // check jika jam  kuran dari 10, maka tambahkan 0 di depannya
    hours = hours < 10 ? `0${hours}` : hours;
  
    // check jika minute kurang dari 10, maka tambahkan 0 di depannya
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    // tampung di variable strTime
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  document.getElementById("realtime3").innerText = formatAMPM(new Date());