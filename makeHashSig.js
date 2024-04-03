const shaMod = require('./Utilities/SHA512.js');

function makeHash (_cashKey, _exactAmount, _comptKey){
const hashr =(_initSeed)=> shaMod.sha512(_initSeed).replace(/[^1-9]/g,'').toString().slice(7,-7);
const cashKeyHash = hashr(_cashKey);
const trueExactAmount = cashKeyHash.charAt(23)+cashKeyHash.charAt(24)+cashKeyHash.charAt(25)+cashKeyHash.charAt(26)+cashKeyHash.charAt(27);
const trueComptKey = parseInt(cashKeyHash.charAt(28)+cashKeyHash.charAt(29)+cashKeyHash.charAt(30),10);
console.log(`${_cashKey}@${trueComptKey}>${trueExactAmount}`);
}
makeHash('aaaa1');
makeHash('bbbb1');
makeHash('cccc1');

//  const fs = require('fs');//CORE MODULE
//  const btcMod = require('./BTC_Control/BTC_Index.js');
 
// const trimmedSheet = [  'aaaa@1>16897', 'bbbb@2>38727', 'cccc@3>14453'];


// function writeComptrollersToGet (){
// const compKeysArray = fs.readFileSync('./Address_Control/pubArray.txt', 'utf-8').split(',');
// const compKeysTextArray=[];

//    for (let element of trimmedSheet){
//     compKeysTextArray.push(   compKeysArray[ element.split('@')[1].split('>')[0] ]   );
//    }

// fs.writeFileSync('./compKeys-Array-WRITE.txt', compKeysTextArray.toString());

// }
// writeComptrollersToGet();




function getComptrollersTxs(){

}










/*
function filterSubmClaims(_btcAddress){
btcMod.getBtcAddressInfo(_btcAddress);

const validCashKeys=[];

for (let element of trimmedSheet){

    if(fs.readFileSync('./BTC_Control/btc_addr-WRITE0.txt','utf-8').search(`"value":${element.split('>')[1]}`) > 7){
                                            validCashKeys.push(`${element.split('@')[0]}*${element.split('>')[1]}`);
                                            }
    }
return validCashKeys;


}   
console.log(filterSubmClaims("bc1q22swjy7rzl4skh8yllyjc6tehtd4mdsh0v0cs7"));
*/











//console.log(        returnBtcAddressInfo().search(`"value":${trimmedSheet[0].split('>')[1]}`)              );