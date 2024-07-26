// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vesting {
    struct Stakeholder {
        uint256 amount;
        uint256 releaseTime;
        bool claimed;
    }

    mapping(address => Stakeholder) public stakeholders;
    IERC20 public token;

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function addStakeholder(address _stakeholder, uint256 _amount, uint256 _releaseTime) public {
        stakeholders[_stakeholder] = Stakeholder(_amount, _releaseTime, false);
    }

    function claimTokens() public {
        Stakeholder storage stakeholder = stakeholders[msg.sender];
        require(block.timestamp >= stakeholder.releaseTime, "Tokens are not yet vested");
        require(!stakeholder.claimed, "Tokens already claimed");

        stakeholder.claimed = true;
        token.transfer(msg.sender, stakeholder.amount);
    }
}
