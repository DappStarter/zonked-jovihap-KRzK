require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift release saddle snake half argue army gift'; 
let testAccounts = [
"0xbc741b9b088b2250ef7bea898192e14bbf27c466f823c69bd812cd8e255af043",
"0x64c9932629684bc343cd49ea535246d02103a4ee470e8b04c1bc2da5e938ec94",
"0xe931cabb582f48d0d1d129e35895a7e3cf54782c2e75acf71225843b376614c3",
"0xa24cab9509d2d8d5db3bee89f1e355b289dc33afa675f173fa1d65c10650cc01",
"0xfd951fb189f13d4d2bc772bc4873476d6e63a56314292b61ee5e7594ab2551bf",
"0x3aa3dbd8de30011dd20d7e988209c838fc449bf4de5afe825b189f231d1b840b",
"0x2d5ed6f0f7a3a155f298bb7103dffe5bf13c3b0c79ac456d639e7411e8d46e88",
"0x277fa0db3ebc8872e29dee4968bdb419de9b6a54381050b4d4eeee3d623babd2",
"0xc10f3e74506663e15206bade3e19711e11fbfcdcff2f0b96881fcbb96bf5baf2",
"0xbd9607ecb299e65271a88a91d5e9195dd1c7faab247339ae6c6d60aecdbfbde9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

