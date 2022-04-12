async function send_trx() {

    var from_add = ""; // Account whose private key is used to initialise Tronweb
    var to_add = "";
    var amount = 100000; // Value is in Sun : 1 TRX = 10 ** 6 Sun
    
    var transaction_object = await tronWeb.transactionBuilder.sendTrx(
                to_add,
                amount,
                from_add
            ).catch((err) => { console.log(err) });
    
    const signedtxn = await tronWeb.trx.sign(
            transaction_object,
            private_key
        ).catch((err) => {console.log(err)});
    
    const receipt = await tronWeb.trx.sendRawTransaction(
            signedtxn
        ).catch((err) => { console.log(err);});
        console.log('- Output:', receipt, '\n');
    }
    
    send_trx();