import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

// import utilities
import { config } from './utilities/config';
import { serverConstant as SERVER } from './utilities/server.constant';

// import controllers
import { RootController } from './controllers/root.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { Nexus5Controller } from './controllers/nexus5.controller.js';
import { LoginController } from  './controllers/login.controller.js';

// import services
import { UserService } from './services/user.service';

angular
.module('app', ['ui.router', 'ngCookies'])
.config(config)
.constant('SERVER', SERVER)
.controller('RootController', RootController)
.controller('HomeController', HomeController)
.controller('Nexus5Controller', Nexus5Controller)
.controller('LoginController', LoginController)
.service('UserService', UserService);
