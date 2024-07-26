// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyToken.sol";

contract OrganizationRegistry {
    struct Organization {
        string name;
        address tokenAddress;
    }

    mapping(address => Organization) public organizations;
    address[] public organizationList;

    event OrganizationRegistered(address indexed orgAddress, string name, address tokenAddress);

    function registerOrganization(string memory _name, uint256 _initialSupply) public {
        MyToken token = new MyToken(_initialSupply);
        organizations[msg.sender] = Organization(_name, address(token));
        organizationList.push(msg.sender);

        emit OrganizationRegistered(msg.sender, _name, address(token));
    }

    function getOrganizations() public view returns (address[] memory) {
        return organizationList;
    }
}