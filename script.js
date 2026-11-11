// ===== 1. SAPAAN BERDASARKAN JAM =====
var sapaan = document.getElementById("sapaan");
var jamSekarang = new Date().getHours();

if (jamSekarang < 11) {
  sapaan.textContent = "Selamat pagi!";
} else if (jamSekarang < 15) {
  sapaan.textContent = "Selamat siang!";
} else if (jamSekarang < 18) {
  sapaan.textContent = "Selamat sore!";
} else {
  sapaan.textContent = "Selamat malam!";
}


// ===== 2. MODE GELAP / TERANG =====
var tombolTema = document.getElementById("tombolTema");

tombolTema.addEventListener("click", function () {
  document.body.classList.toggle("gelap");

  if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
});


// ===== 3. TAMPIL / SEMBUNYI SKILL =====
var tombolSkill = document.getElementById("tombolSkill");
var daftarSkill = document.getElementById("daftarSkill");

tombolSkill.addEventListener("click", function () {
  daftarSkill.classList.toggle("sembunyi");

  if (daftarSkill.classList.contains("sembunyi")) {
    tombolSkill.textContent = "Tampilkan Skill";
  } else {
    tombolSkill.textContent = "Sembunyikan Skill";
  }
});


// ===== 4. VALIDASI FORM KONTAK =====
var formKontak = document.getElementById("formKontak");
var hasilForm = document.getElementById("hasilForm");

formKontak.addEventListener("submit", function (event) {
  event.preventDefault(); // supaya halaman tidak reload

  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    hasilForm.textContent = "Semua kolom harus diisi!";
    hasilForm.className = "error";
  } else if (email.indexOf("@") === -1) {
    hasilForm.textContent = "Email tidak valid, harus ada tanda @";
    hasilForm.className = "error";
  } else {
    hasilForm.textContent = "Terima kasih, " + nama + "! Pesan kamu sudah terkirim.";
    hasilForm.className = "sukses";
    formKontak.reset();
  }
});


// ===== 5. JAM DIGITAL DI FOOTER =====
var elemenJam = document.getElementById("jam");

function tampilkanJam() {
  var sekarang = new Date();
  elemenJam.textContent = "Waktu sekarang: " + sekarang.toLocaleTimeString("id-ID");
}

tampilkanJam();
setInterval(tampilkanJam, 1000);
