const smoothCoef = 0.05;
const smoothScroll = document.querySelector(".smooth-scroll");
const smoothScrollBar = document.querySelector(".smooth-scrollbar");

function onResize(e) {
  smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
}

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

window.addEventListener("resize", onResize);
onResize();

let prevY = window.scrollY;
let curY = window.scrollY;
let y = window.scrollY;
let dy;

function loop(now) {
  curY = window.scrollY;
  dy = curY - prevY;
  y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
  prevY = y;
  smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

