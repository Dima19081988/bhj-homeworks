const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCounter = 0;
let lostCounter = 0;
const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function(){
        if (hole.className.includes('hole_has-mole')) {
            deadCounter++;
            dead.textContent = deadCounter;
        } else {
            lostCounter++;
            lost.textContent = lostCounter;
        }
        if (deadCounter === 10) {
            alert ("Winner");
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
        };
        if (lostCounter === 5) {
            alert ("Looser");
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
        }
    } 
}

