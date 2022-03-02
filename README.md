# Hardhat Starter Project

Hardhat Starter Project using yarn and typescript.

### References
[Project Setup](https://hardhat.org/guides/project-setup.html)  
[Hardhat + typescript](https://hardhat.org/guides/typescript.html)  
[Hardhat Config](https://hardhat.org/config/)  
[Create a task](https://hardhat.org/guides/create-task.html) 

### Project Setup
```bash
mkdir hardhat-template
yarn init
yarn add hardhat
yarn add --dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
yarn add --dev ts-node typescript
yarn add --dev chai @types/node @types/mocha @types/chai
touch hardhat.config.ts
mkdir contracts scripts test
```
---

### Default Setup
```bash
touch .gitignore
touch README.md
```

---

### Commands
```bash
# check available user defined scripts / global commands
npx hardhat
# run local hardhat blockchain (open a separate terminal)
npx hardhat node
# compile contracts
npx hardhat compile
# deploy contracts on specified network
npx hardhat run --network localhost scripts/deploy-hello.ts
```