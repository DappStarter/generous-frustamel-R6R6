require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain soft install option blue suspect'; 
let testAccounts = [
"0x7eba8dd45cdf97af27baf94795e0cd7df4e33f08170c6c0c0c3004c9d8e86418",
"0xb87d01007d45edc719c5093d6847e4ad853443a6ead82842c29accaa65bf44a2",
"0x0da986852f37960d53976cc82a4783202200f0db0390d1ae6609da06027fa67c",
"0x85a0e15229bc982235143955dd7dac52d0019e24cd44d379df309a0bd1d4c66a",
"0x4034c845add808b5edd88cb4d0027f99544391dab53431ea8cd54d34ac396b5a",
"0x16ac6d0511a607579d498bf0bf9cbac05f94ff9912598b1f7aa6cc12ca151f3b",
"0x5a5fcb6a072e97b501fb3a38ebfa4e62617f22bfab282b0550acd29f500389e6",
"0xabb837b05da598c9565a93eb61be562e190764e392581b864bb54055984c5321",
"0x9bfe43840701eaa7e968ba24d2f44a715adbfd8c57d82da8f91c98d57f8b4562",
"0x5dfd4ae9e247a42247892c0de1d72aad0a5bb4e7db2aebfe3567c4b553f0d2ab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

