let string = "Sesi 4.2";
console.log(string);

//01
let string2 = "1. Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP. (CEO, CTO, HR, PROGRAMMER) Contoh  Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru";
console.log(string2);

let jabatan = 'CTO'

if (jabatan == 'CEO'){
    console.log("Jika saya sebagai CEO maka tugas saya adalah mampu bertanggung jawab atas perusahaan yang ia pimpin.")
    }else if(jabatan == 'CTO'){
        console.log("Jika saya sebagai CTO maka tugas saya adalah untuk mengembangkan strategi untuk meningkatkan revenue suatu perusahaan, serta melakukan analisis seperti ROI dan cost benefit.")
    }else if(jabatan == 'HR'){
        console.log("Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru.")
    }else if(jabatan == 'PROGRAMMER'){
        console.log("Jika saya sebagai PROGRAMMER maka tugas saya adalah merancang program-program dan perangkat lunak menggunakan berbagai bahasa pemrograman.")
}

//02
let string3 = "2. Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.";
console.log(string3);

let nilaiA = 5
let nilaiB = 9

if(nilaiA > nilaiB){
    console.log("nilai A lebih besar dari nilai B")
    }else if(nilaiA < nilaiB){
        console.log("nilai A lebih kecil dari nilai B")
    }else if(nilaiA = nilaiB){
        console.log("nilai A sama dengan nilai B")
}

//03
let string4 = "3. Gunakan switch case untuk mengetahui nama hari berdasarkan angka. Hari minggu dimulai dari angka 1 dan seterusnya";
console.log(string4);

Senin = 1
Selasa = 2
Rabu = 3 
Kamis = 4
Jumat = 5
Sabtu = 6
Minggu = 7

let hari = 7;

switch(hari){
    case 1: {console.log("ini adalah hari Senin"); break;}
    case 2: {console.log("ini adalah hari Selasa"); break;}
    case 3: {console.log("ini adalah hari Rabu"); break;}
    case 4: {console.log("ini adalah hari Kamis"); break;}
    case 5: {console.log("ini adalah hari Jumat"); break;}
    case 6: {console.log("ini adalah hari Sabtu"); break;}
    case 7: {console.log("ini adalah hari Minggu"); break;}
    default: {console.log("ini adalah tahun 2021"); break;}
}

//04
let string5 = "4. Gunakan switch case untuk membuat sebuah game sederhana. [UP, RIGHT, BOTTOM, LEFT]";
console.log(string5);

let arah = 'BOTTOM'

switch(arah){
    case 'UP': {console.log("naik ke atas"); break;}
    case 'RIGHT': {console.log("belok ke kanan"); break;}
    case 'BOTTOM': {console.log("turun ke bawah"); break;}
    case 'LEFT': {console.log("belok ke kiri"); break;}
    default: {console.log("ini dalam sebuah game"); break;}
}
