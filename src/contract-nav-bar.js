import {inject, ObserverLocator} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
import {Contracts} from './contracts';

@inject(ObserverLocator, EventAggregator, Router, Contracts)
export class ContractNavBar {
	constructor(observerLocator, eventAggregator, router, openContracts) {
		this.observerLocator = observerLocator;
		this.eventAggregator = eventAggregator;
		this.router = router;
		this.openContracts = openContracts;
		this.contracts = [];

	var subscription = this.observerLocator
      							.getArrayObserver(openContracts.contracts)
      							.subscribe(this.onOpenContractsChanged.bind(this));
  }

close(contractId) {
	this.openContracts.close(contractId);
}

	onOpenContractsChanged(param) {
		// let that = this;
		param.forEach(change => {
		if(change.removed.length > 0) {
			change.removed.forEach(removed => {
				let index = this.contracts.indexOf(this.contracts.find(elem => elem.id == removed.id));
				if(index >= 0) {
					this.contracts.splice(index, 1);
				}
			});
		}

		if(change.addedCount > 0) {
			let index = change.index;
			while(index < this.openContracts.contracts.length) {
				this.contracts.push({ id: this.openContracts.contracts[index].id });
				index++;
			}
		}
	}, this);

	}


   //  contractOpened(payload) {
   //  	let found = false;
			// this.contracts.forEach(elem => {
			// 	if(elem.id === payload.id) {
			// 		found = true;
			// 		elem.isActive = true;
			// 	}
			// 	else {
			// 		elem.isActive = false;
			// 	}
			// });
			// if(found)return;

   //  	let route ='#/contract/' + payload.id.toString();
			// this.contracts.push({id:payload.id, title:payload.id.toString(), isActive:true, href: route});
   //  }
}