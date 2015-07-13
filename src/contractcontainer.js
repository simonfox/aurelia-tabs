import {inject} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Contracts} from './contracts';

@inject(EventAggregator, Contracts)
export class ContractContainer {
	 constructor(eventAggregator, openContracts) {
	 	this.id = '';
	 	this.eventAggregator = eventAggregator;
	 	this.openContracts = openContracts;
	 	this.contract = null;
	}
	

	activate(params) {
		this.id = 'Contract ' + params.id.toString();
		this.contract = this.openContracts.getOrCreateContractByKey(params.id);
	}
}