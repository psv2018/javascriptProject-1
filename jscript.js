var count = 1;

addEventsTolistenerForRemoveItem();
addEventsTolistenerForDeleteItem();
document.getElementById("confirmButtonId").addEventListener("click",confirmAll);

function addEventsTolistenerForRemoveItem() {
    var list = document.getElementsByClassName("removeItem");
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);
        list[i].addEventListener("click", removeItemsFunction);
    }
}

function addEventsTolistenerForDeleteItem() {
    console.log("dddd");
    var list = document.getElementsByClassName("deleteItem");
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener("click", deleteItemsFunction);
    }
}

function addEventsTolistenerForConfirmDeleteItem() {
    var list = document.getElementsByClassName("deleteItem");
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener("click", deleteItemsFunctionForConfirm);
    }

}

function addEventsTolistenerForConfirmRemoveItem() {
    var list = document.getElementsByClassName("removeItem");
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);
        list[i].addEventListener("click", removeItemsFunctionForConfirm);
    }
}
document.getElementById("addItem").addEventListener('click', function () {
    console.log("sdsdsadas");
    var inputValue1 = document.getElementById('item').value;
    var inputValue2 = document.getElementById('qty').value;

    if ((inputValue1 === '') || (inputValue2 == '')) {
        alert("You must write something!");
    } else {
        console.log(inputValue1 + " " + inputValue2)
        var textnode1 = document.createTextNode(inputValue1);
        var textnode2 = document.createTextNode(inputValue2);
        var linode = document.createElement("Li");
        var span1 = document.createElement("SPAN");
        var div = document.createElement("div");
        div.classList.add("buttons");
        var bt1 = document.createElement("BUTTON");
        bt1.classList.add("removeItem");
        bt1.innerHTML = '<i class="fa fa-remove" style="font-size:24px"></i>';
        bt1.addEventListener("click", removeItemsFunction);
        var bt2 = document.createElement("BUTTON");
        bt2.classList.add("deleteItem");
        bt2.innerHTML = ' <i class="fa fa-trash-o" style="font-size:24px"></i>';
        bt2.addEventListener("click", deleteItemsFunction);

        bt1.appendChild(document.createTextNode(''));
        bt2.appendChild(document.createTextNode(''));
        linode.appendChild(textnode1);
        span1.appendChild(textnode2);
        linode.appendChild(span1);
        div.appendChild(bt1);
        linode.appendChild(div);
        div.appendChild(bt2);
        var hid = document.createElement("input");
        hid.setAttribute("type", "hidden");
        hid.setAttribute("value", count++);
        div.appendChild(hid)
        linode.appendChild(div);
        document.getElementById("listId").appendChild(linode);
    }
});


function removeItemsFunction(e) {
    console.log(e.target.parentNode.parentNode.innerHTML);
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = e.target.parentNode.parentNode.innerHTML;
    var counterValue = tempDiv.querySelectorAll("input[type=hidden]")[0].value;
    console.log(counterValue);
    var li = document.getElementById("listId").getElementsByTagName("LI");
    for (i = 0; i < li.length; i++) {
        console.log(li[i].querySelectorAll("input[type=hidden]")[0].value);
        if (counterValue == li[i].querySelectorAll("input[type=hidden]")[0].value) {
            console.log(li[i].innerHTML);
            var local = li[i].innerHTML;
            var clist = document.getElementById("confirmedList");
            clist.innerHTML += "<li>" + local + "</li>";
            li[i].parentNode.removeChild(li[i]);
        }
    }
    addEventsTolistenerForConfirmDeleteItem();
    addEventsTolistenerForConfirmRemoveItem();
}

function deleteItemsFunction(e) {
    console.log(e.target.parentNode.parentNode.innerHTML);
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = e.target.parentNode.parentNode.innerHTML;
    var counterValue = tempDiv.querySelectorAll("input[type=hidden]")[0].value;
    console.log(counterValue);
    var li = document.getElementById("listId").getElementsByTagName("LI");
    for (i = 0; i < li.length; i++) {
        console.log(li[i].querySelectorAll("input[type=hidden]")[0].value);
        if (counterValue == li[i].querySelectorAll("input[type=hidden]")[0].value) {
            console.log(li[i].innerHTML);
            var local = li[i].innerHTML;
            li[i].parentNode.removeChild(li[i]);
        }
    }
}

function deleteItemsFunctionForConfirm(e) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = e.target.parentNode.parentNode.innerHTML;
    var counterValue = tempDiv.querySelectorAll("input[type=hidden]")[0].value;
    console.log(counterValue);
    var li = document.getElementById("confirmedList").getElementsByTagName("LI");
    for (i = 0; i < li.length; i++) {
        console.log(li[i].querySelectorAll("input[type=hidden]")[0].value);
        li[i].parentNode.removeChild(li[i]);
    }
}


function removeItemsFunctionForConfirm(e) {
    console.log(e.target.parentNode.parentNode.innerHTML);
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = e.target.parentNode.parentNode.innerHTML;
    var counterValue = tempDiv.querySelectorAll("input[type=hidden]")[0].value;
    console.log(counterValue);
    var li = document.getElementById("confirmedList").getElementsByTagName("LI");
    for (i = 0; i < li.length; i++) {
        console.log(li[i].querySelectorAll("input[type=hidden]")[0].value);
        if (counterValue == li[i].querySelectorAll("input[type=hidden]")[0].value) {
            console.log(li[i].innerHTML);
            var local = li[i].innerHTML;
            var clist = document.getElementById("listId");
            clist.innerHTML += "<li>" + local + "</li>";
            li[i].parentNode.removeChild(li[i]);
        }
    }
    addEventsTolistenerForDeleteItem();
    addEventsTolistenerForRemoveItem();
}

function confirmAll(){
    var li = document.getElementById("confirmedList").getElementsByTagName("LI");
    for (i = 0; i < li.length; i++) {
        li[i].style.textDecoration ="line-through";
        var listOfButton = li[i].getElementsByTagName("BUTTON");
        for (j = 0; j <listOfButton.length; j++) {
            listOfButton[j].disabled=true;
        }

    }
}