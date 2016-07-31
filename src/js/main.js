import angular from 'angular';
import 'angular-ui-router';

// import utilities
import { config } from './utilities/config';

// import controllers
import { RootController } from './controllers/root.controller.js';
import { HomeController } from './controllers/home.controller.js';

// import services

angular
.module('app', ['ui.router'])
.config(config)
