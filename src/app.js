import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {

constructor() {
	this.id = 123;
}

  configureRouter(config, router){


    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome',      	moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'contract/:id', name: 'contract',			moduleId: './contract', 		title:'Contract' }
    ]);

    this.router = router;
  }

  addRoute() {
  	this.router.navigateToRoute('contract', { id: this.id++ });
  }
}


