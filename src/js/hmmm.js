const UpiSound = new Audio("src/js/hmmm.mp3");

const params = new URLSearchParams(document.location.search);
var amount = params.get("amount");
var message = params.get("message");
var upi_id = params.get("upi");
var upilink = `upi://pay?pn=via%20hmmmPay&pa=${upi_id}&cu=INR&am=${amount}`

if(!amount){
    document.getElementById("button").innerText = "Copy Url"
}else{

var qrlink = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upilink)}&size=400x400&color=105-255-107&bgcolor=1a1a1a`
document.getElementById("qr").src = qrlink
document.getElementById("details").innerHTML = `Scan with any upi app<br><span id="url" style="padding: 0em 1.2em;"><b>${upi_id}</b> has requested you and payment of <b>₹${amount}</b> for <b>${message}</b></span>`
}

function upiOpen(){
    UpiSound.play()
    if(!amount){
       navigator.clipboard.writeText((document.getElementById("url").innerText).replace("you can click to edit",""));
       document.getElementById("button").innerText = "Copied to Clipboard"
    }else{
        window.open(upilink, "_self");
    }
    
}

function github(){
    window.open("https://github.com/healer-op");
}
//?upi=sigmachad@ibl&amount=30.00&message=HmmmmPay