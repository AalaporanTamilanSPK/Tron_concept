
//get balances tron
var TronWeb = require('Tronweb')
var TronWeb = new TronWeb({
    //fullHost: 'https://api.trongrid.io',  // For Mainnet
    fullHost : 'https://api.shasta.trongrid.io',  // For Shasta testnet
    headers : { "TRON-PRO-API-KEY": 'your api key' },
    privateKey : 'you private key'
})
tronWeb.trx.getBalance('you address')
.then(result=> console.log(result));


//send transaction tronweb

async function send_trx() {
   var privateKey = ''

    var from_add = ""; // Account whose private key is used to initialise Tronweb
    var to_add = "";
    var amount = 1; // Value is in Sun : 1 TRX = 10 ** 6 Sun
    
    var transaction_object = await tronWeb.transactionBuilder.sendTrx(
                to_add,
                amount,
                from_add
            ).catch((err) => { console.log(err) });
    
    const signedtxn = await tronWeb.trx.sign(
            transaction_object,
            privateKey
        ).catch((err) => {console.log(err)});
    
    const receipt = await tronWeb.trx.sendRawTransaction(
            signedtxn
        ).catch((err) => { console.log(err);});
        console.log('- Output:', receipt, '\n');
    }
    
    send_trx();