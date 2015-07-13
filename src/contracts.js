import {Contract} from './contract';

export class Contracts {
	
	constructor() {
		this.contracts = [];
	}

	getOrCreateContractByKey(contractId) {
		
		let contract = this.contracts.find(elem => elem.id === contractId);
		if(!contract) {
			contract = new Contract(contractId);
			this.contracts.push(contract);
		}
		return contract;
	}

	close(contractId) {
		let index = this.contracts.indexOf(this.contracts.find(elem => elem.id === contractId));
		this.contracts.splice(index, 1);
	}
}