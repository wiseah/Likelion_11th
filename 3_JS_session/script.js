const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = padZero(now.getHours());
  let minute = padZero(now.getMinutes());
  let second = padZero(now.getSeconds());

  todayDiv.textContent = `${year}년 ${month}월 ${day}일`;
  timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
}

function padZero(data) {
  return data < 10 ? `0${data}` : data;
  // data가 10보다 작을때를 만족하면(?) 0${data} 리턴, 아니면(;) data그대로 리턴해라
}

getTime();
setInterval(getTime, 1000);
