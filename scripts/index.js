// gotta have that system clock (thanks random person on stack overflow, mine would have been way too complicated)

let albumSfx = new Audio('assets/sfx/Album.wav')
let clickSfx = new Audio('assets/sfx/Click.wav')
let controllerSfx = new Audio('assets/sfx/Controller.wav')
let errorSfx = new Audio('assets/sfx/Error.wav')
let eshopSfx = new Audio('assets/sfx/Eshop.wav')
let enterGameSfx = new Audio('assets/sfx/Game.wav')
let homeSfx = new Audio('assets/sfx/Home.wav')
let newsSfx = new Audio('assets/sfx/News.wav')
let settingsSfx = new Audio('assets/sfx/Settings.wav')
let tooFarSfx = new Audio('assets/sfx/TooFar.wav')
let userSfx = new Audio('assets/sfx/User.wav')


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
    } else {
      gamesPos = 4
    }
      document.getElementById('gameConCon').style.left = gamesPos + "vw"
  }
  if (event.key == "ArrowLeft") {
    if (gamesPos != 4) {
      gamesPos += 19
    } else {
      gamesPos = -129
    }
    document.getElementById('gameConCon').style.left = gamesPos + "vw"
  }
})

function openNews() {
  newsSfx.play()
  document.body.style.transitionDuration = "200ms"
  document.body.style.opacity = "0%"
  setTimeout(() => {
    document.body.style.opacity = "100%"
setTimeout(() => {
  document.body.style.transitionDuration = "0ms"
}, 200);
  }, 1000);
}

function gameFrame() {
time = new Date();
document.getElementById('clock').innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).slice(0, -2)
document.getElementById('AmPm').innerHTML = time.toLocaleString('en-US', { hour: 'numeric',hour12: true }).replace(/[0-9]/g, '');

if (navigator.onLine) {
    document.getElementById('wifi').src = "assets/images/icons/wifiIcon.png"
  } else {
    document.getElementById('wifi').src = "assets/images/icons/nowifi.png"
}
}
gameFrame();