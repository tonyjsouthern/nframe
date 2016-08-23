import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-dragdrop';
import domtoimage from 'dom-to-image';
import 'angularjs-color-picker';
import 'angularjs-slider';

// import utilities
import { config } from './utilities/config';
import run from './utilities/run';
import { serverConstant as SERVER } from './utilities/server.constant';

// import controllers
import { RootController } from './controllers/root.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { SingleView } from './controllers/singleView.controller.js';
import { LoginController } from  './controllers/login.controller.js';
import { DeviceController } from './controllers/device.controller.js';
import { FrameController } from './controllers/frame.controller.js';

// import services
import { UserService } from './services/user.service';
import { FrameService } from './services/frame.service';

angular
.module('app', ['ui.router', 'ngCookies', 'ngDragDrop', 'color.picker', 'rzModule'])
.config(config)
.run(run)
.constant('SERVER', SERVER)
.controller('RootController', RootController)
.controller('HomeController', HomeController)
.controller('LoginController', LoginController)
.controller('DeviceController', DeviceController)
.controller('FrameController', FrameController)
.controller('SingleView', SingleView)
.service('UserService', UserService)
.service('FrameService', FrameService);
