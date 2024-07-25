---
Project title - TokenVest: Decentralized Vesting DApp
Project status: In Progress
---

# TokenVest - Decentralized Vesting DApp

## Overview

TokenVest is a decentralized application (DApp) built using Next.js for the frontend, Tailwind CSS for styling, and Ethereum smart contracts written in Solidity. It enables organizations to manage token vesting schedules for stakeholders such as founders, investors, and community members. Stakeholders can claim their tokens after a specified vesting period.

### Key Features

- **Organization Registration**: Organizations can register themselves and their ERC20 tokens.
- **Stakeholder Management**: Admins can add stakeholders and set vesting periods.
- **Token Vesting**: Whitelisted stakeholders can claim tokens after the vesting period.
- **Ethereum Integration**: Interaction with Ethereum blockchain using ethers.js for seamless smart contract operations.

## Project Structure

```text
my-vesting-dapp/
│
├── contracts/
│   ├── OrganizationRegistry.sol
│   └── Vesting.sol
│
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── index.js
│   │   ├── AdminDashboard.js
│   │   ├── ConnectWallet.js
│   │   └── StakeholderPage.js
│   ├── ethers.js
│   └── styles/
│       ├── tailwind.css
│       └── globals.css
│
├── public/
│   ├── favicon.ico
│   └── ...
│
├── README.mdx
├── postcss.config.js
├── tailwind.config.js
└── package.json

```

## Setup Instructions

1. Clone Repository 

    ```
    git clone git@github.com:surafeldev/TokenVest.git

    cd TokenVest
    ```

2. Install Dependencies:

    ```
    npm install
    ```

3. Compile Smart Contract 

4. Configure Environment Variables

5. Run Development Server

    ```
    npm run dev
    ```

    Open http://localhost:3000 in your browser.


## Video Demo

    Watch a short demo video demonstrating the functionality and usage of the Dapp.


## contributers 

    surafel nigusie - Blockchain developer and UI/ UX Designer.


## License 

    This project is licensed under the MIT License.

