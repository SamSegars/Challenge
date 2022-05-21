i = 1;
ships = []
shipID = 0;
class Shipment{
  constructor(name){
    this.name = name;
    this.inventory = [];

    this.adds = function (item){
      this.inventory.push(item);
    }
  }
  
}
const listArray = [];
function shipmentCreater(){
   list.innerText="";
  for (let n = 0; n < listArray.length; n++){
    list.insertAdjacentHTML("beforeend", "<br>");
    list.insertAdjacentText("beforeend", listArray[n] + " ");
    list.insertAdjacentHTML("beforeend", "<button onclick=assign("+n+")>Assign</button>");
}
  list.insertAdjacentHTML("beforeend", "<br><p></p><button onclick=printList()>Done</button>");
}
function printList(){
    list.innerText="";
    for (let n = 0; n < listArray.length; n++) {
    list.insertAdjacentHTML("beforeend", "<br>");
    list.insertAdjacentText("beforeend", listArray[n] + " ");
    list.insertAdjacentHTML("beforeend", "<button onclick=edit("+n+")>Edit</button>");
    list.insertAdjacentHTML("beforeend","<button onclick=del("+n+")>Delete</button>");
  }
}
function addItem() {
  list = document.getElementById("list");
  item = document.getElementById("itemName").value;
  listArray.push(item);
printList();

  i++;
}
function del(n) {
  listArray.splice(n,1);
  printList();
}
function edit(n){
  list.innerHTML = "<input id=edit>";
  list.insertAdjacentHTML("beforeend", "<button onclick=submit("+n+")>Submit</button>");
}
function submit(n){
  edits = document.getElementById("edit").value;
  listArray.splice(n, 1, edits);
  printList();
  }

function createShip(){
  shipname = document.getElementById("shipName").value;
  if (shipname.length == 0) {
    alert("Insert Shipment Name")
  }
  else{
  name = document.getElementById("shipName").value;
  Shipments = new Shipment(name);
  ships.push(Shipments)
  shipmentCreater()}
  }

function assign(n){
  Shipments.adds(listArray[n]);
  listArray.splice(n,1)
  shipmentCreater();
  alert(Shipments.inventory);
  alert(Shipments.name);
}
function viewShip(){
  list.innerText = "";
  for (let n = 0; n < ships.length; n++){
    list.insertAdjacentHTML("beforeend", "<button onclick=viewShipInv("+n+")>"+ ships[n].name +"</button><br><p></p>");
  }
}
function viewShipInv(n){
  list.innerText = "";
  for (let p = 0; p < ships[n].inventory.length; p++){
  list.insertAdjacentText("beforeend", ships[n].inventory[p]);
  list.insertAdjacentHTML("beforeend", "<br>")
  }
  list.insertAdjacentHTML("beforeend", "<br><button onclick=printList()>Done</button>")
}