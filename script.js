function menu() {
    var klik = document.getElementById('tombol');
    if (klik.style.display === 'none') {
        klik.style.display = 'block';
    } else {
        klik.style.display = 'none';
    }
}

function order() {
    document.getElementById('message');
    var konfirmasi = confirm("apakah anda akan memesan?");
    if (konfirmasi === true) {
        message = "ya";
    } else {
        message = "tidak";
    }
}