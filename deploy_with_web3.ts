[
	{
		"inputs": [],
		"name": "print",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]import { deploy } from './web3-lib'

const contractABI = [
	{
		"inputs": [],
		"name": "print",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];

(async () => {
    try {
        const result = await deploy('HelloWorld3', [], { abi: contractABI })
        console.log(`address: ${result.address}`)
    } catch (e) {
        console.log(e.message)
    }
})()
