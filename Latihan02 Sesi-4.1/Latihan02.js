// Angka
let number1 = 9;
let number2 = 9.9;

console.log(number1);
console.log(number2);

// Huruf
let string = 'My name is Harcen';
let string2 = "I lives in Parakan city";

console.log(string);
console.log(string2);

// Analogi
let Pintar = true;
let Bodoh = false;

console.log(Pintar);
console.log(Bodoh);

// null
let dataPertama = null;
let dataKedua = null;
let dataKetiga = "";

console.log(dataPertama);
console.log(dataKedua);
console.log(dataKetiga);

// Biodata singkat
var orang = {
    namaPertama : "Harcen",
    namaAkhir : "Gaming",
    umur : 22,
    warnaFavorit : "Merah"
};

console.log(orang);

// var
var myName = 'Harcen';

console.log(myName);

// Exercise
let string3 = "Exercise sesi ke-4";

console.log(string3);

// sesi 4.1
let string4 = "Sesi 4.1";

console.log(string4);

//1. Console log data diri
// Nama
// Asal daerah
// Tanggal lahir
// Umur
// Posisi pekerjaan
var biodata = {
    nama : "Harcen",
    asalDaerah : "Kab. Temanggung",
    tanggalLahir : "03 Juli 1998",
    umur : 22,
    posisiPekerjaan : "belum bekerja"
};

// 2. Membuat interaksi kepada user
// a. Prompt data berikut:
// Nama user
// Asal Negara
// b. Confirm data user. Apakah data yang diisi sudah benar?
// c. Alert “Terima kasih sudah mengisi form”
prompt("Nama user");
prompt("Asal Negara");

console.log(prompt);

// atau
function myData() {
    var data = prompt("Nama user", "");
    if (data != null) {
        document.getElementById("demo").innerHTML = "Nama User: " + data + "";
    }
}
console.log(myData);

function myData2() {
    var data = prompt("Asal Negara", "");
    if (data != null) {
        document.getElementById("demo").innerHTML = "Asal Negara: " + data + "";
    }
}
console.log(myData2);

confirm("Apakah data yang diisi sudah benar?");
console.log(confirm);

alert("Terima kasih sudah mengisi form");
console.log(alert);

// 3. Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1
// console.log(biodata); hasil data dari biodata

// 4. Berikan multiple comments pada fitur soal nomor 2
/*
nama user & asal negara
console.log(prompt);
atau
console.log(myData);
console.log(myData2);

konfirmasi & perhatian
console.log(confirm);
console.log(alert);
*/

// 5. Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1. 
// Lalu panggil dan tampilkan dengan menggunakan console log
var biodata = {
    nama : "Harcen",
    asalDaerah : "Kab. Temanggung",
    tanggalLahir : "03 Juli 1998",
    umur : 22,
    posisiPekerjaan : "belum bekerja"
};

console.log(biodata);

// 6. Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.
// 25 + 10
// 100 * 2
// 99 / 2
// 99 % 2
let a = 25
a += 10
console.log(a);

let b = 100
b *= 2
console.log(b);

let c = 99
c /= 2
console.log(c);

let d = 99
c %= 2
console.log(d);

// selesai
let string5= "Sudah selesai sesi 4.1";

console.log(string5);





