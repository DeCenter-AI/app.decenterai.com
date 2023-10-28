// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.9;

 import "./MultiSigWallet.sol";


/// @title A Multisig wallet
/// @author DecenterAI
/// @notice Serves as deposit contract

contract Payment {
    MultiSigWallet  public wallet;
    mapping(address => uint) public depositRecord;

    event Deposit(address indexed payer, uint _amount, bool status);
    event Erase(address indexed user);

    /**
    *@notice Deposits eth into the treasury
    *@param _amount The amount of eth deposited
     */
    function deposit(uint _amount) external payable{
        require(msg.value == _amount, "Invalid deposit amount");
        //deposit to treasury
        (bool success, ) = address(wallet).call{value: msg.value}(""); 
        //record deposit
        depositRecord[msg.sender] = msg.value;

        emit Deposit(msg.sender, _amount, success);
    }

    /**
    *@notice Removes deposit record for a user
    *@param _user Address of the depositor
     */
    function zeroDepositRecord(address _user) external {
        //remove record
        depositRecord[_user] = 0;
        emit Erase(_user);
    }
}