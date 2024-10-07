function validasi_jumlah() {
    var input_jumlah = document.getElementById('jumlah-pesanan');
    if(input_jumlah.value <= 0) {
        alert("Jumlah Pesanan Harus Diatas 0");
    }
}