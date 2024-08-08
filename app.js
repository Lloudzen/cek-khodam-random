document.getElementById('khodamForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})

function generateKhodam(nama){
    const khodams = [
        `Maiki Sumedang` ,
        `Sapi Berkacamata` ,
        `Rusdi Sungut Lele` ,
        `Naga Ireng` ,
        `Manusia Mewing` ,
        `Dukun Sagapung` ,
        `Harimau Sigma` ,
        `El Gasing` ,
        `DJ Alok` ,
        `Manusia Serigala` ,
        `Fuad Batako` ,
        `Eko Raja Kumis` ,
        `Sepuh Raja Kikir` ,
        `Golem Kerikil` ,
        `Ucup Psikopat` ,
        `Anjing Galak` ,
        `Windah Gosong` ,
        `Manusia Hitam Legam` ,
        `Setan Merah` ,
        `Raja Iblis` ,
        `Panglima Perang Iblis` ,
        `Leluhur bandar Vokep` ,
        `Brock Lesnar` ,
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}