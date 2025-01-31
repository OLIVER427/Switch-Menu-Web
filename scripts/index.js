// gotta have that system clock (thanks random person on stack overflow, mine would have been way too complicated)
var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);
function gameFrame() {

document.getElementById('clock').innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    requestAnimationFrame(gameFrame);
}
gameFrame();
