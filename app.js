
let shortcut  = [];



function Add(){
let Storage = JSON.parse(localStorage.getItem("ShortStorage")) || [];
let Names = document.getElementById("names").value;
let Url = document.getElementById("url").value;


    // pusig my inputed text and save to local storage 
    Storage.push({InputName: Names, InputUrl: Url});
    localStorage.setItem("ShortStorage", JSON.stringify(Storage));

    document.getElementById("names").innerHTML = Names;

    // mypost = PostStorage;
    shortcut = Storage;
    showShortcut();

    document.getElementById("names").value = "";
    document.getElementById("url").value = "";

    overlay.classList.remove("show-overlay");
    


}


let Storage = JSON.parse(localStorage.getItem("ShortStorage")) || [];
let shortutCont = document.getElementById("shortut-container"); 
function showShortcut(){

    shortutcontainer.innerHTML = "";
    let shortCount = 0
    shortcut.forEach(function(Storage, index){
   // assign a class to the newest shortcut
    let addClass = index === shortcut.length - 1 ? "add-new" : "";
    shortCount ++;
    shortutcontainer.innerHTML +=

        `
        
        <div class="add-cont">
        <div class="remove-cont" id="action">
				<li>Edit Shortcut</li>
				<li onclick="remove(${shortCount - 1})">Remove</li>
		</div>
        <span class="dotted" onclick="showaction()">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </span>
        <a href="${Storage.InputUrl}" target="blank">
			<div class="add">
            <p class="add-new" ${addClass}>${Storage.InputName.charAt(0)}</p>
			</div>
			<label id="name">${Storage.InputName}</label>
        </a>
		</div>
       
        `
    });

}



shortcut = JSON.parse(localStorage.getItem("ShortStorage")) || [];
showShortcut();


function remove(shortCount){
    let Storage = JSON.parse(localStorage.getItem("ShortStorage")) || [];
    Storage.splice(shortCount, 1);
    localStorage.setItem("ShortStorage", JSON.stringify(Storage));
    // mypost = PostStorage.reverse();
    shortcut = Storage;
    showShortcut();
}



// ==================================

let overlay = document.getElementById("overlay");

function AddShortcut(){
    overlay.classList.add("show-overlay");
}

function cancel(){
    overlay.classList.remove("show-overlay");
}



function showaction(){
    let action = document.getElementById("action");
    action.classList.toggle("show-action");
}

function closeaction(){
    let action = document.getElementById("action");
    action.classList.remove("show-action");
}


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }




