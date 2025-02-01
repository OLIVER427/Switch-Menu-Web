// gotta have that system clock (thanks random person on stack overflow, mine would have been way too complicated)
let browser
let time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);
if (navigator.userAgent.includes("Chrome")) {
  //alert('Hello chromium based browser!')
  document.getElementById("profileIcon").src = "assets/images/icons/chromium.png"
  browser = " Chromium based"
} else if (navigator.userAgent.includes("Firefox")) {
  //alert('Hello firefox!')
  document.getElementById("profileIcon").src = "assets/images/icons/firefox.png"
  browser = " Firefox"
} else {
  document.getElementById("profileIcon").src = "assets/images/icons/unknown.png"
  browser = "n unknown"

}
let gamesPos = 4
document.addEventListener('keydown', (event) => {
  if (event.key == "ArrowRight") {
    if (gamesPos != -129) {
      gamesPos -= 19
    }
      document.getElementById('gameCon').style.left = gamesPos + "vw"
  }
  if (event.key == "ArrowLeft") {
    if (gamesPos != 4) {
      gamesPos += 19
    }
    document.getElementById('gameCon').style.left = gamesPos + "vw"
  }
})

function gameFrame() {
time = new Date();
document.getElementById('clock').innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).slice(0, -2)
document.getElementById('AmPm').innerHTML = time.toLocaleString('en-US', { hour: 'numeric',hour12: true }).replace(/[0-9]/g, '');
requestAnimationFrame(gameFrame);

if (navigator.onLine) {
    document.getElementById('wifi').src = "assets/images/icons/wifiIcon.png"
  } else {
    document.getElementById('wifi').src = "assets/images/icons/nowifi.png"
}
}
gameFrame();