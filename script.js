const deskripsiInput = document.getElementById("deskripsiMya")
const jumlahInput = document.getElementById("jumlahMya")
const tipeSelect = document.getElementById("tipeMya")

const tombolTambah = document.getElementById("tombolTambahMya")
tombolTambah.addEventListener("click", tambahTransaksi);
function tambahTransaksi(){
    const deskripsiMya = deskripsiInput.value;
    const jumlahMya = Number(jumlahInput.value);
    const tipeMya = tipeSelect.value;

    console.log(deskripsiMya);
    console.log(jumlahMya);
    console.log(tipeMya);
}

const listTransaksi = document.getElementById("listTransaksiMya")
let transaksi = [];
transaksi.push({
    deskripsiMya,
    jumlahMya,
    tipeMya
});

function renderData(){
    listTransaksi.innerHTML = "";
    transaksi.forEach(item => {
        const li = document.createElement("li");
        li.textContent = 
        `${item.deskripsiMya} - Rp${item.jumlahMya}`;

        listTransaksi.appendChild(li);
    });

    renderData();
}

const totalBalance = document.getElementById("totalMya")
function hitungSaldo(){
    let saldo = 0;

    transaksi.forEach(item => {
       
        if(itemm.tipeMya === "pemasukan"){
            saldo +=item.jumlahMya;
        }else{
            saldo -= item.jumlahMya;
        }
    });
    totalBalance.textContent = saldo;
}

deskripsiInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        tambahTransaksi();
    }
});

tipeSelect.addEventListener("change", function(){
    console.log(tipeSelect.value);
});

const tombolHapus = document.createElement("button");
tombolHapus.textContent = "Hapus";
tombolHapus.addEventListener("click", function(){
    transaksi.splice(index, 1);
    renderData();
    hitungSaldo();

});

alert("Data berhasil ditambahkan");

const yakin = confirm(
    "Yakin mau hapus?"
);
if(yakin){
    //yakin
}

const nama = orompt(
    " Masukan nama pengguna"
);

console.log(location.href);

location.reload();

location.setItem(
    "transaksi",
    JSON.stringify("transaksi")
);

transaksi = JSON.parse(
    localStorage.getItem("transaksi") || []
)