let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

let settings = {
    "async":true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(respose){
    btc.innerHTML=respose.bitcoin.usd;
    eth.innerHTML=respose.ethereum.usd;
    doge.innerHTML=respose.dogecoin.usd;
});


//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd
//used jquery cdn