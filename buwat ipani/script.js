const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const letterPage = document.getElementById("letterPage");
const typing = document.getElementById("typing");
const music = document.getElementById("bgm");

const text = `
vann, im so proud of u cz u go to UPH for college scholarship n u do that by urself, i really proud, im so grateful to be ur bsf & fam 💟. 
but sadly, we cant meet each other as often as before. im sorry cz we just have a memories at kopken only WKWKWK, sedih..
sedih gabisa kasih masakan gue ke lu lagi HAHA.gue minta maaf kalau selalu kesel sama lu, mungkin gue jealous krna lu mostly spent ur time for ur other friend on roblox n dc(?), setiap main soalnya kayak lu tetep merhatiin ke dc aja gitu huhu.
maaf ya selama gue jadi temen, gue banyak kurangnya, belum bisa jadi tempat cerita lu yang baik. i hope u get a better friend who can be a home for u to share ur stories.
pilih temen di kuliah hati - hati ya van, belum tentu semua baik. gue juga berharap we dont become a dorothea JAHHAHA.
semangat ya, bangkitin lagi nama baik nyokap lu biar ga diremehin sama keluarga alm bokap lu, bangkitin nama abang lu, bangkitin juga nama lu sendiri kalau sukses ga harus nurutin kemauan mereka", 
jadi anak yang baik, SERING SERING IBADAH!!! Tuhan udah baik ngasih lu kesempatan buat kuliah by beasiswa jadi lu juga harus inget namanya terimakasih ke Tuhan(gue ga bermaksud kalau gue juga udh bener),
jangan lupa makann n minum, kurang2in roblox sama dc nya karna lu skrng udah di tahap yang lebih serius buat dijalanin n dilakuin. gue sama tina tetep dukung lu dari depok WKWKW, walau kita bertiga jarang bgt main, people come n go dan bakal punya kesibukan nya masing2. 
semoga kita masih sering ketemu yaw
`;

let i = 0;

function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

const envelope = document.getElementById("envelope");

openBtn.onclick = () => {

    openBtn.style.display = "none";

    envelope.style.transform = "translate(-50%,-50%) scale(1)";

    setTimeout(() => {

        envelope.classList.add("open");

    }, 800);

    setTimeout(() => {

        welcome.style.display = "none";

        envelope.style.display = "none";

        letterPage.style.display = "flex";

        music.play();

        typeWriter();

    }, 2500);
}


// ======================
// Sakura
// ======================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = 5 + Math.random() * 5 + "s";

    petal.style.fontSize = 15 + Math.random() * 20 + "px";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 250);


// ======================
// Stars
// ======================

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(star);

}
