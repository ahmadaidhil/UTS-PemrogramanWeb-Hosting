function validasiForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;
    let output = document.getElementById("output");

    output.innerText = "";

    if (email.includes("@") && nama != "" && pesan != "") {
        output.innerText = "Pesan berhasil dikirim ✅";
    } else {
        output.innerText = "Ada kesalahan input ❌";
    }

}