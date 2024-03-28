let products = [
    {
        productid: 1,
        image: "download.jpeg",
        productname: "Redme 12 5G",
        price: 10999,
        quantity: 0,
    },
    {
        productid: 2,
        image: "realme.jpg",
        productname: "Realme 11 5G",
        price: 22999,
        quantity: 0,
    },
    {
        productid: 3,
        image: "girls.jpg",
        productname: "Nothing 5G",
        price: 33999,
        quantity: 0,
    }
]

function displayproduct(products) {
    if (products.length > 0) {


        let first_row = document.querySelector("#first_row_items");
        let display_content = ``;

        for (let item of products) {
            display_content += `
    <tr><td>${item.productid}</td>
    <td><img src=${item.image} alt="" width="30px" height="30px"></td>
    <td>${item.productname}</td>
    <td>${item.price} <i class="bi bi-currency-rupee"></i></td>
    <td>
        <i class="bi bi-plus-circle-fill" onclick="increaseValue(${item.productid})"></i>
        <span id="quantity"> ${item.quantity}</span>
        <i class="bi bi-dash-circle-fill" onclick="decreaseValue(${item.productid})"></i>
    </td>
    <td id="totalPrice">${item.price*item.quantity}<span><i class="bi bi-currency-rupee"></i></span></td>
    </tr>`
            // first_row.innerHTML=display_content

        }
        first_row.innerHTML = display_content;
    }
}

displayproduct(products)
// first_row=document.querySelector("#first_row_items").innerHTML=display_content;

// displayproduct(products);
function increaseValue(id) {
    let filteredvalue = products.map(function (item) {
        if (item.productid === id) {
            return { ...item, quantity: ++item.quantity }
        }
        return item
    })

displayproduct(filteredvalue);

}
function decreaseValue(id) {
    let filteredvalue = products.map(function (item) {
        if (item.productid === id) {
            return { ...item, quantity: (item.quantity > 0) ? (--item.quantity) : 0 };
    }
        return item
})

displayproduct(filteredvalue);

}

//grand total calculation
let grandtotal_display=document.querySelector("#grand_total");

function grandtotal()
{let total=0
    for(let i of products){
        total+=(i.quantity*i.price)

    }
    console.log(total)
    grandtotal_display.textContent=total;

}




