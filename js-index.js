setInterval(() => {
  let a;
  let time;
  let date;
  a = new Date();

  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  date = a.toLocaleDateString();

  document.getElementById("time").innerHTML = time + "<br> on " + date;
}, 1000);
