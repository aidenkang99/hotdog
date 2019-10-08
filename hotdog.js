var order = [];
const menu = [];
menu["hotdog"] = 3.25;
menu["fries"] = 2.00;
menu["drink"] = 1.5;
const BAR = 20;             // over $20 for Joe's Special
const DISCOUNTRATE = 0.1;   // 10% discount
const TAXRATE = 0.0625;

function parse(){
    var numHotdog = parseInt(document.getElementById("hotdog").value);
    var numFries = parseInt(document.getElementById("fries").value);
    var numDrink = parseInt(document.getElementById("drink").value);

    order["hotdog"] = numHotdog;
    order["fries"] = numFries;
    order["drink"] = numDrink;
    document.write('<link rel="stylesheet" href="hotdogResult.css">');
    for (prop in order){
        document.write("You want " + order[prop] + " " + prop + "<br />");
    }
    // creates a submit button
    var sub = document.createElement("INPUT");   
    sub.setAttribute("type", "submit");
    sub.setAttribute("id", "submit");
    sub.setAttribute("value", "Correct?");
    sub.setAttribute("onclick", "subtotal()");
    document.body.appendChild(sub);
}

function subtotal(){
    var subtotal = 0;
    subtotal += menu["hotdog"] * order["hotdog"];
    subtotal += menu["fries"] * order["fries"];
    subtotal += menu["drink"] * order["drink"];
    discount(subtotal);
}

function discount(subtotal){
    var afterDiscount = subtotal;
    if (subtotal >= BAR)
        afterDiscount = subtotal - (DISCOUNTRATE * subtotal);
    tax(subtotal, afterDiscount);
}

function tax(subtotal, afterDiscount){
    // round to two decimal places
    var taxAmount = parseFloat((afterDiscount * TAXRATE).toFixed(2));
    var total = afterDiscount + taxAmount;
    display(subtotal, afterDiscount, taxAmount, total);
}

function display(subtotal, afterDiscount, taxAmount, total){
    alert("Subtotal: " + subtotal + "\n"
        + "After Joe's Special (if you ordered more than $20): "
        + afterDiscount + "\n"
        + "Tax: " + taxAmount + "\n"
        + "Total: " + total);
}

