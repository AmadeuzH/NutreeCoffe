let count = {
    americano : 0,
    espresso : 0,
    v60 : 0,
    kopisusu : 0,
    kopitubruk : 0,
    mierebus : 0,
    miegoreng : 0,
    telur : 0,
    basotahu : 0,
    airmineral: 0,
    tehbotol : 0,
    youghurt : 0,

};
const prices = {
  americano: 8000,
  espresso: 5000,
  v60: 8000,
  kopisusu: 10000,
  kopitubruk: 8000,
  mierebus: 5000,
  miegoreng: 5000,
  telur: 3000,
  basotahu : 10000,
  airmineral: 5000,
  tehbotol : 5000,
  youghurt : 5000,
};
window.onload = function () {
  for (let key in count) {
    const input = document.getElementById('angka' + key);
    if (input && (input.value === '' || input.value === null)) {
      input.value = 0;
    }
    updateDisplay(key);
  }
}

function updateTotal() {
  let total = 0;
  for (let item in count) {
    total += count[item] * prices[item];
  }
  document.getElementById('angkatotal_view').value = "Rp" + total.toLocaleString('id-ID');
document.getElementById('angkatotal').value = total;

}

function updateDisplay(id) {
    document.getElementById('value-' + id).innerText = count[id];
    // console.log(id + " = " + count[id]);

    
    // Update nilai input angka (misal: input id="angkaamericano")
  const angkaInputamericano = document.getElementById('angka' + id);

  if (angkaInputamericano) {
    angkaInputamericano.value = count[id];
  }
  let hiddenamericano = document.getElementById('angka'+id).value
  
if (hiddenamericano < 1) {
  document.getElementById('input-nama-'+ id).classList.add('visually-hidden')
  document.getElementById('angka'+id).classList.add('visually-hidden')
  
}else{
  document.getElementById('input-nama-'+id).classList.remove('visually-hidden')
  document.getElementById('angka'+id).classList.remove('visually-hidden')
 
}
let pilihmenu = document.querySelector('.mie');
let valuemierebus = parseInt(document.getElementById('angkamierebus').value);

if (valuemierebus >= 1) {
  pilihmenu.classList.remove('d-none');
  pilihmenu.setAttribute("required", "");
} else {
  pilihmenu.classList.add("d-none");
  pilihmenu.removeAttribute("required");
}
  updateTotal();
  }

  function increase(id) {
    count[id]++;
    updateDisplay(id);
    

  }


  function decrease(id) {
    if (count[id] > 0) {
      count[id]--;
      updateDisplay(id);
      
    }
  }




// americanomenu
let menuamericano = document.getElementById("menuamericano").innerText;
document.getElementById("input-nama-americano").value = menuamericano;
// espresso
let menuespresso = document.getElementById("menuespresso").innerText;
document.getElementById("input-nama-espresso").value = menuespresso;
// v60
let menuv60 = document.getElementById("menuv60").innerText;
document.getElementById("input-nama-v60").value = menuv60;
  // kopi susu
  let menukopisusu = document.getElementById("menukopisusu").innerText;
  document.getElementById("input-nama-kopisusu").value = menukopisusu;
// kopi tubruk
let menukopitubruk = document.getElementById("menukopitubruk").innerText;
document.getElementById("input-nama-kopitubruk").value = menukopitubruk;
// mie rebus
let menumierebus = document.getElementById("menumierebus").innerText;
document.getElementById("input-nama-mierebus").value = menumierebus;
// mie goreng
let menumiegoreng = document.getElementById("menumiegoreng").innerText;
document.getElementById("input-nama-miegoreng").value = menumiegoreng;
// telur
let menutelur = document.getElementById("menutelur").innerText;
document.getElementById("input-nama-telur").value = menutelur;
// basotahu
let basotahu = document.getElementById("menubasotahu").innerText;
document.getElementById("input-nama-basotahu").value = basotahu;
// yg
let youghurt = document.getElementById("menuyoughurt").innerText;
document.getElementById("input-nama-youghurt").value = youghurt;
// teh
let tehbotol = document.getElementById("menutehbotol").innerText;
document.getElementById("input-nama-tehbotol").value = tehbotol;
// air
let airmineral = document.getElementById("menuairmineral").innerText;
document.getElementById("input-nama-airmineral").value = airmineral;

    
function validateSelect() {
  const select = document.getElementById("mp");
  if (!select.value) {
    alert("Silakan pilih metode pembayaran.");
    return false;
  }
  return true;
}
