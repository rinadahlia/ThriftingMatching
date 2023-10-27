// console.log("hehe");
let database = [
  {
    id: 1,
    category: "Jaket",
    name: "Jaket pria parka",
    size: "L",
    price: 180000,
    img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/10/17/82738d0d-46dc-4422-8ed7-b0b083c240b3.jpg",
  },
  {
    id: 2,
    category: "T-shirt",
    name: "Tshirt Kaos Guilty Pleasure Black",
    size: "M",
    price: 150000,
    img: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/2/17/8279280c-f6da-4ab5-9395-eebaaa4d9d90.jpg",
  },
  {
    id: 3,
    category: "T-shirt",
    name: "Kaos polos pria katun",
    size: "S",
    price: 30000,
    img: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/9/22/e97adda8-4441-446f-9d3a-cc017f157efc.jpg",
  },
  {
    id: 4,
    category: "Pants",
    name: "Celana panjang chino",
    size: "L",
    price: 68000,
    img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/7/30/ad17f2d9-4890-4c65-ab97-0b8018a05b2f.jpg",
  },
  {
    id: 5,
    category: "Pants",
    name: "Celana bahan",
    size: "M",
    price: 60000,
    img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/26/39d65aff-9c83-473c-adda-3e6236581e6e.png",
  },
  {
    id: 6,
    category: "Jaket",
    name: "Jaket kulit asli",
    size: "M",
    price: 200000,
    img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/23/e2d6c11d-655a-419c-afc8-795e5bed112b.jpg",
  },
  {
    id: 7,
    category: "Kemeja",
    name: "French Ivy Crinkle Short Sleeve",
    size: "S",
    price: 150000,
    img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/27/44b130e5-3187-4f0c-8a0c-2d401c41ae28.jpg",
  },
  {
    id: 8,
    category: "Kemeja",
    name: "Platini Kemeja Salur Motif Garis Pendek Katun",
    size: "L",
    price: 165000,
    img: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/12/19/f52dc886-e096-4849-8ac8-7a4b52d2db71.jpg",
  },
];

function search() {
  let hasilSearch = document.getElementById('"form-subscribe-Search');
  let filter = hasilSearch.value.toUpperCase();
  let result = [];
  for (let baju of database) {
    let pencarianSesuai = true;
    while (pencarianSesuai === true) {
      for (let i = 0; i < hasilSearch.value.length; i++) {
        if (baju.name[i] !== hasilSearch.value[i]) {
          pencarianSesuai = false;
        }
      }

      if (pencarianSesuai === true) {
        result.push(baju);
        pencarianSesuai = false;
      }
    }
  }
  database = result;
  listData();
}

let cartData = [];

let userData = [
  {
    username: "Maulana",
    password: "Maulaja",
  },
];

function listData() {
  let template = "";

  for (let i = 0; i < database.length; i++) {
    template += `
      <div
      class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
    >
        <img
          class="h-50 w-full object-cover object-center"
          src="${database[i].img}"
          alt="Product Image"
        />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
            ${database[i].name}
          </h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
            Category: ${database[i].category}
          </p>
          <div class="flex items-center">
            <p
              class="mr-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              $ ${database[i].price}
            </p>
            <div>
             <button onclick= "display();find_data(${database[i].id})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-5 right-5 h-10 w-16" >Buy</button>
            </div>
          </div>
        </div>
  
      </div>
    </div>
      `;
  }
  let a = document.getElementById("cards");
  a.innerHTML = template;
}

listData();

function find_data(id) {
  let produk = {};

  for (let i = 0; i < database.length; i++) {
    const obj = database[i];

    if (id === obj.id) {
      produk = obj;
      break;
    }
  }
  console.log(produk);
  return produk;
}

function checkout(produk) {
  console.log(`hehe`);
  let template1 = `<h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>
          <p>${produk.nama} <span class="price">$${produk.price}</span></p>
          <hr>
          <p>Total <span class="price" style="color:black"><b>$${produk.price}</b></span></p>`;

  document.getElementsById("container2").innerHTML = template1;
}

function display() {
  document.getElementById("home").style = "display:none";
  document.getElementById("teszzzz").style = "display:block";
}

// document.getElementById("teszzzz").innerHTML = `ceek`

function addCart(id) {
  let produk = database.find((perData) => perData.id === id);
  let cart = cartData.find((perCart) => perCart.id === produk.id);
}

module.exports = {
  find_data,
  checkout,
  listData,
};
exports.id = id;
