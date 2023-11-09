// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "hardhat/console.sol";

contract Contract {
    /*
  Basically, it checks whether the codesize of the account is non-zero. Normal wallets don’t have code, so it should be zero (and the above should return false).
  */
    function isContract(address account) internal view returns (bool) {
        uint size;
        assembly {
            size := extcodesize(account)
        }
        return size > 0;
    }

    /*
  Note that if your idea is to prevent your smart contract from being called by other smart contracts, the above can be circumvented (in the constructor method, codesize is still 0, so another smart contract can call you from there, and your check will think that this is a wallet, since there’s no code on that account yet).
  tx.origin == msg.sender, which will be true for normal wallets and false for smart contracts (since tx.origin is always a normal wallet - only normal wallets can initiate transactions - while msg.sender is whoever is calling you
  */
    function isContractV2(address account) internal view returns (bool) {
        uint size;
        assembly {
            size := extcodesize(account)
        }
        return size > 0;
    }
}
