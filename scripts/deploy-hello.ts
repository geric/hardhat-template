import hre from "hardhat"

async function main() { 
    const contract = await hre.ethers.getContractFactory("HelloWorld");
    const contractInstance = await contract.deploy();
    console.log(`HelloWorld Contract deployed to: ${contractInstance.address}`);
}

main();