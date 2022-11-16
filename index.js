function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Date Time Card
(function currentTime() {
  // buat object date lalu simpan di variable date
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  // jika jam kurang dari 10, maka tambahkan 0 di depan jam ex: 05
  hh = hh < 10 ? "0${hh}" : hh;
  // jika menit kurang dari 10, maka tambahkan 0 di depan menit ex: 05
  mm = mm < 10 ? "0" + mm : mm;

  let getampm = hh >= 12 ? " PM" : " AM";
  if (hh >= 13) {
    hh -= 12;
  }

  let time = hh + ":" + mm + " ";

  document.getElementById("clock").innerText = time + getampm;
  document.getElementById("clock-2").innerText = time + getampm;
  document.getElementById("clock-3").innerText = time + getampm;
  // jalankan function currentTime setiap 1000ms /1 detik
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
})();
