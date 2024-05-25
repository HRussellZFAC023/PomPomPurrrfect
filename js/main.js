
const sky = document.querySelector('.sky');
const grass = document.querySelector('.grass');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCloud() {

    const cloud = document.createElement('div');
    cloud.className = 'cloud';

    cloud.style.left = `${getRandom(0, 100)}%`;
    cloud.style.top = `${getRandom(0, 50)}%`;

    const puffCount = getRandom(1, 12);
    for (let i = 0; i < puffCount; i++) {
        const puff = document.createElement('div');
        puff.className = 'puff';

        puff.style.left = `${getRandom(-50, 50)}%`;
        puff.style.top = `${getRandom(-50, 50)}%`;


        cloud.appendChild(puff);
    }


    sky.appendChild(cloud);
}


const cloudCount = getRandom(5, 10);
for (let i = 0; i < cloudCount; i++) {
    createCloud();
}



function createClover() {
    const clover = document.createElement('div');
    clover.className = 'clover';

    clover.style.left = `${getRandom(0, 100)}%`;
    clover.style.top = `${getRandom(0, 100)}%`;
    const stem = document.createElement('div');
    stem.className = 'stem';
    clover.appendChild(stem);
    const leafCount = getRandom(1, 4);
    for (let i = 0; i < 4; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';


        clover.appendChild(leaf);
    }



    clover.style.transform = `rotate(${getRandom(0, 360)}deg)`;
    grass.appendChild(clover);
}


const cloverCount = getRandom(5, 10);
for (let i = 0; i < cloverCount; i++) {
    createClover();
}


let yesCount = 10;
const yes = () => {
    yesCount++;
    document.getElementById("message").innerText = happyMessages[(yesCount - 1) % happyMessages.length];

    const newHeart = document.createElement("div");
    newHeart.style.position = "absolute";
    newHeart.style.left = `${getRandom(0, 100)}%`;
    newHeart.style.top = `${getRandom(0, 100)}%`;
    newHeart.style.transform = `translate(-50%, -50%)`;
    newHeart.style.fontSize = "3rem";
    newHeart.style.zIndex = "9999";

    newHeart.classList.add("heart");
    newHeart.innerText = "💖";

    document.body.appendChild(newHeart);
    const tamagotchi = document.querySelector(".tamagotchi");
    tamagotchi.append(newHeart);

    setTimeout(() => {
        newHeart.remove();
    }, 2000);
    tamagotchi.classList.add("jiggle");
    setTimeout(() => {
        tamagotchi.classList.remove("jiggle");
    }, 1000);

    if (yesCount === 15) {
        document.getElementById("crack").style.display = "block";
    }


    if (yesCount >= 20) {
        document.getElementById("egg").style.display = "none";
        document.getElementById("pompom").style.display = "block";
        document.getElementById("ghostie").style.display = "none";

    }
}
const no = () => {
    const newHeart = document.createElement("div");
    newHeart.style.position = "absolute";
    newHeart.style.left = `${getRandom(0, 100)}%`;
    newHeart.style.top = `${getRandom(0, 100)}%`;
    newHeart.style.transform = `translate(-50%, -50%)`;
    newHeart.style.fontSize = "3rem";
    newHeart.style.zIndex = "9999";

    newHeart.classList.add("heart");
    newHeart.innerText = "💔";

    document.body.appendChild(newHeart);
    document.querySelector(".tamagotchi").append(newHeart);
    setTimeout(() => {
        newHeart.remove();
    }, 2000);


    if (yesCount === 0) {
        document.getElementById("egg").style.display = "none";
        document.getElementById("ghostie").style.display = "block";
        document.getElementById("pompom").style.display = "none";
    } else {
        document.getElementById("message").innerText = sadMessages[(yesCount - 1) % sadMessages.length];
        yesCount--;
    }
}



const happyMessages = [
    "pom pom pom purrin?🥹",
    "will u smack my oshiri?🫣",
    "jiggle my oshiri?🤭",
    "jiggle my pompom?😚",
    "would you eat my purin?😋",
    "wanna have a taste of me?😉"


]

const sadMessages = [
    "notice the butt senpai?🥺",
    "purrin's oshiri is feeling low, pls give it a gentle hello?🥺",
    "my pompom's not jiggly, it's feeling quite still-y 💀 say hi to my butt?",
    "no smacks on the oshiri, it's feng quite weary.. smack me?👉👈",
    "my oshiri's in a slump, could I get a lil rump bump?🥺",
    "my butt is sad, can you give it a pat?🥺",
    "talk to my booty?😏"

];

/*
pom pom pom purin
will u smack my oshiri
jiggle my oshiri
jiggle my pompom

*/