const IYA = document.querySelector('#iya');
const TIDAK = document.querySelector('#tidak');

const handleButtonClick = (isTruth) => {
    document.querySelectorAll('tombol').forEach((tombol) => {
        tombol.remove();
    });

    const kontainerDiv = document.querySelector('.kontainer > div');
    kontainerDiv.style.backgroundColor = isTruth ? '#6FD240' : '#E12E2E';
    document.getElementById("header").innerHTML = isTruth ? "Anda Benar!" : "Anda Berbohong!";
    const pElement = document.querySelector('.kontainer > div > div > div:first-child > p');
    pElement.innerText = isTruth ? 'Anda adalah seorang Mahasiswa' : 'Anda adalah seorang Teknisi';
    const imgElement = document.querySelector('.kontainer > div > img');
    imgElement.setAttribute('src', isTruth ? 'foto/mahasiswi.png' : 'foto/teknisi.png');
};

TIDAK.addEventListener('click', () => {
    handleButtonClick(true);
});

IYA.addEventListener('click', () => {
    handleButtonClick(false);
});
