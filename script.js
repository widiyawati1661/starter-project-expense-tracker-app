//ambil elemen menggunakan DOM
const deskripsiInput = document.getElementById("deskripsiMya")
const jumlahInput = document.getElementById("jumlahMya")
const tipeSelect = document.getElementById("tipeMya")

//ambil elemen menggunakan DOM saat sudah submit tombol stambah
const tombolTambah = document.getElementById("tombolTambahMya")
//tambah event klik di tombol tambah
tombolTambah.addEventListener("click", tambahTransaksi);

//tampung array transaksi yang diinput
//edit: ubah string menjadi array js
let transaksi =
JSON.parse(localStorage.getItem("transaksi")
) || [];

//function tambah transaksi
function tambahTransaksi(){
    //timestamp
    console.log("Hari ini");
    
    //ambil nilai input
    const deskripsiMya = deskripsiInput.value;
    const jumlahMya = Number(jumlahInput.value);
    const tipeMya = tipeSelect.value;
    //panggil nilai input
    console.log(deskripsiMya);
    console.log(jumlahMya);
    console.log(tipeMya);

    //ambil elemen list tiap transaksi
    const listTransaksi = document.getElementById("listTransaksiMya");
        //membuat data transaksi saat di klik
        transaksi.push({
        deskripsiMya,
        jumlahMya,
        tipeMya
    });
    //edit agar tersimpan di array js
    simpanData();
    //panggil function list data yang diinput
    renderData();
    //panggil function perhitungan saldo
    hitungSaldo();
}

//ambil elemen list tiap transaksi
const listTransaksi = document.getElementById("listTransaksiMya");

//menampilkan data ke Halaman
function renderData(){
    listTransaksi.innerHTML = "";
    transaksi.forEach(item => {
        const li = document.createElement("li");
        li.textContent = 
        `${item.deskripsiMya} - Rp${item.jumlahMya}`;

        listTransaksi.appendChild(li);
    });
    //munculkan filter
    const filter = filterKategori.value;
    let dataTampil = transaksi;
    if(filter !== "semua"){
        dataTampil = transaksi.filter(item =>
            item.tipeMya === filter
            );
    }
    dataTampil.forEach(item =>{
        const li = document.createElement("li");
        
        li.textContent =
        `${item.deskripsiMya} - ${item.jumlahMya}`;
        
        listTransaksi.appendChild(li);    
    });
}
    
//ambil elemen total tiap transaksi
const totalBalance = document.getElementById("totalMya")
//function hitunmg transaksi
function hitungSaldo(){
    let saldo = 0;

    transaksi.forEach(item => {
       
        if(item.tipeMya === "pemasukan"){
            saldo += item.jumlahMya;
        }else{
            saldo -= item.jumlahMya;
        }
    });
    totalBalance.textContent = saldo;
}

//event agar saat enter bisa langsung transaksi
deskripsiInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        tambahTransaksi();
    }
});

//event agar bisa edit
tipeSelect.addEventListener("change", function(){
    console.log(tipeSelect.value);
});

//buat tombol hapus
const tombolHapus = document.getElementById("tombolHapusMya");
tombolHapus.textContent = "Hapus";
//tambah event klik di tombol hapus
tombolHapus.addEventListener("click", function(){
    //konfirmasi hapus
    const yakin = confirm(
        "Yakin mau hapus?"
        );
    if(yakin){
        //hapus transaksi terakhir
        transaksi.pop();

        renderData();
        hitungSaldo();
    }
    
});

//buat fungsi buat simpan data di ubah dari string yang hanya string menjadi array js
function simpanData(){
    localStorage.setItem(
        "transaksi",
        JSON.stringify(transaksi)
        );
}

//declare functpion kategorpi agar bisa diubah
const filterKategori = document.getElementById("kategoriMya");
filterKategori.addEventListener("change", () => {
    renderData();    
});
