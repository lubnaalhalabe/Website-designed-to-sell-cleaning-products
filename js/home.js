var myover = document.getElementById('over'),
    myjacket =document.getElementById('jacket'),
    mydiman = document.getElementById('diman'),
    myrain =document.getElementById('rain');
    var mysamer=document.getElementById('samer');
    var mysam=document.getElementById('sam');
    var myver=document.getElementById('ver');
    var mydib=document.getElementById('dib');


myjacket.onmouseenter = nextdin;
myjacket.onmouseleave = nextdinn;
mydiman.onmouseenter = vextdin;
mydiman.onmouseleave = vextdinn;
myrain.onmouseenter = dextdin;
myrain.onmouseleave = dextdinn;
function nextdin() {
    'use strict';
    mysam.textContent='Add To Coat';
    mysam.style.backgroundColor = "#530411";
    myjacket.style.border = "7px solid #530411";
    myjacket.style.borderRadius="15px";
}
function nextdinn() {
    'use strict';
    mysam.textContent='';
    mysam.style.backgroundColor = "#f0f0f0";
    myjacket.style.border = "7px solid #f0f0f0";
}
function vextdin() {
    myver.textContent='Add To Coat';
    myver.style.backgroundColor = "#530411";
    mydiman.style.border = "7px solid #530411";
    mydiman.style.borderRadius="15px";
}
function vextdinn() {
    'use strict';
    myver.textContent='';
    myver.style.backgroundColor = "#f0f0f0";
    mydiman.style.border = "7px solid #f0f0f0";

}
function dextdin() {
    'use strict';
    mydib.textContent='Add To Coat';
    mydib.style.backgroundColor = "#530411";
    myrain.style.border = "7px solid #530411";
    myrain.style.borderRadius="15px";
}
function dextdinn() {
    'use strict';
    mydib.textContent='';
    mydib.style.backgroundColor = "#f0f0f0";
    myrain.style.border = "7px solid #f0f0f0";


}
var mykuku =document.getElementById('d');
var mykuk =document.getElementById('e');
var mykku =document.getElementById('c');
mykuku.onmouseenter = kukutext;
mykuku.onmouseleave = ukutext;
mykuk.onmouseenter = kukutext1;
mykuk.onmouseleave = ukutext1;
mykku.onmouseenter = kukutext2;
mykku.onmouseleave = ukutext2;
function kukutext() {
    mykuku.style.color = "rgb(7, 174, 252)";
    mykuku.style.borderBottom ="1px solid rgb(7, 174, 252)";
}
function ukutext() {
    mykuku.style.color = "black";
    mykuku.style.borderBottom = "none";
}
function kukutext1() {
    mykuk.style.color = "rgb(7, 174, 252)";
    mykuk.style.borderBottom ="1px solid rgb(7, 174, 252)";
}
function ukutext1() {
    mykuk.style.color = "black";
    mykuk.style.borderBottom = "none";
}
function kukutext2() {
    mykku.style.color = "rgb(7, 174, 252)";
    mykku.style.borderBottom ="1px solid rgb(7, 174, 252)";
}
function ukutext2() {
    mykku.style.color = "black";
    mykku.style.borderBottom = "none";
}