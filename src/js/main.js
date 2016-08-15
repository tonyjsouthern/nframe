import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import domtoimage from 'dom-to-image';

// import utilities
import { config } from './utilities/config';
import run from './utilities/run';
import { serverConstant as SERVER } from './utilities/server.constant';

// import controllers
import { RootController } from './controllers/root.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { SingleView } from './controllers/singleView.controller.js';
import { LoginController } from  './controllers/login.controller.js';

// import services
import { UserService } from './services/user.service';

angular
.module('app', ['ui.router', 'ngCookies'])
.config(config)
.run(run)
.constant('SERVER', SERVER)
.controller('RootController', RootController)
.controller('HomeController', HomeController)
.controller('SingleView', SingleView)
.controller('LoginController', LoginController)
.service('UserService', UserService);
