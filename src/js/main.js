import angular from 'angular';
import 'angular-ui-router';

// import utilities
import { config } from './utilities/config';

// import controllers
import { RootController } from './controllers/root.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { Nexus5Controller } from './controllers/nexus5.controller.js'; 
// import services

angular
.module('app', ['ui.router'])
.config(config)
.controller('RootController', RootController)
.controller('HomeController', HomeController)
.controller('Nexus5Controller', Nexus5Controller);
