import {inject} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Contracts} from './contracts';

@inject(EventAggregator, Contracts)
export class Contract {
	 constructor(eventAggregator, openContracts) {
	 	this.id = '';
	 	this.eventAggregator = eventAggregator;
	 	this.openContracts = openContracts;
	}
	


	activate(params) {
		this.id = 'Contract ' + params.id.toString();
		let contract = this.openContracts.getOrCreateContractByKey(params.id);
	}
}