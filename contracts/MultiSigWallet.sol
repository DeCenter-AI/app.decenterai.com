// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.9;


/// @title A Multisig wallet
/// @author DecenterAI
/// @notice Serves as treasury for decenter AI

contract MultiSigWallet {
    event Deposit(address indexed sender, uint amount);
    event Submit(uint indexed txId);
    event Approve(address indexed owner, uint indexed txId);
    event Revoke(address indexed owner, uint indexed txId);
    event Execute(uint indexed txId);

    struct Transaction {
        address  to;
        uint value;
        bytes data;
        bool executed;
    }

    address[] public owners;
    mapping(address => bool) public isOwner;
    uint public required;

    Transaction[] public transactions;
    mapping(uint => mapping(address => bool)) public approved;

    modifier onlyOwner() {
        require(isOwner[msg.sender],"not owner");
        _;
    }

    modifier txExists (uint _txId) {
        require(_txId < transactions.length, "tx does notnexist");
        _;
    }

    modifier notApproved(uint _txId) {
        require(!approved[_txId][msg.sender], "tx already approved");
        _;
    }

    modifier notExecuted(uint _txId) {
        require(!transactions[_txId].executed,"tx already executed");
        _;
    }


    /// @notice Deploys the smart contract and creates owners and approval number
    /// @dev Assigns _owners to wallet owners list
    //  @dev Assigns _required to number of approvals required
    constructor(address[] memory _owners, uint _required){
        require(_owners.length > 0, "Owners required");
        require(_required > 0 && _required <= _owners.length,"Invalid required number of owners");

        for(uint i; i < _owners.length; i++){
            address owner = _owners[i];

            require(owner != address(0), "Invalid owner");
            require(!isOwner[owner], "Owner is not unique");


            isOwner[owner] = true;
            //add owner
            owners.push(owner);
        }

        //set required number
        required = _required;
    }



    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    /** 
     *@notice Submits withdrawal transaction fro approval
     *@dev Function can only be called by a wallet owner
     *@param _to The address of the account that will receive the token
     *@param _value The value of eth `address` will receive
     *@param _data The call data for the transfer function
    */
    function submit(address _to , uint _value, bytes calldata _data) external onlyOwner{
        //add transaction to transaction list
        transactions.push(
            Transaction({
                to: _to,
                value: _value,
                data: _data,
                executed: false
            })
        );

        emit Submit(transactions.length - 1);
    }

    /**
    *@notice Approves transfer transaction
    *@dev Function can only be called by a wallet owner
    *@dev _txId must exist in submitted transactions
    *@dev _txId must be approved
    *@dev _txId must have not been executed
    *@param _txId The transaction id for the withdrawal transaction
     */
    function approve(uint _txId) external onlyOwner txExists(_txId) notApproved(_txId) notExecuted(_txId){
        //approve transaction
        approved[_txId][msg.sender] = true;
        emit Approve(msg.sender, _txId);
    }

    /**
    *@notice Checks number of approvals provided for a transaction
    *@dev Function can only be called withhin the smartcontract
    *@param _txId The transaction id to get number of approvals
    *@return count Returns a uint
     */
    function _getApprovalCount(uint _txId) private view returns (uint count){
        for(uint i; i < owners.length; i++){
            if(approved[_txId][owners[i]]){
                count += 1;
            }
        }
    }


    /**
    *@notice Executes the withdraw transaction
    *@dev _txId must exist in submitted transactions
    *@dev _txId must have not been executed
    *@param _txId The id of the withdraw transaction
     */
    function execute(uint _txId) external txExists(_txId) notExecuted(_txId){
        require(_getApprovalCount(_txId) >= required, "approvals < required");
        Transaction storage transaction = transactions[_txId];

        transaction.executed = true;
        //withdraw
       (bool success, ) = transaction.to.call{value: transaction.value}(transaction.data); 
       require(success, "tx failed");

       emit Execute(_txId);
    }


    /**
    *@notice Revokes approval for a withdrawal transaction
    *@dev Function can only be called by a wallet owner
    *@dev _txId must exist in submitted transactions
    *@dev _txId must have not been executed
    *@param _txId transaction Id for the withraw transaction
     */
    function revoke(uint _txId) external onlyOwner txExists(_txId) notExecuted(_txId){
        require(approved[_txId][msg.sender],"tx not approved");
        //revoke approval
        approved[_txId][msg.sender] = false;
        emit Revoke(msg.sender, _txId);
    }
}