function RootController (UserService, $state, $rootScope) {

  let vm = this;
  vm.buttonSwitch = false;
  vm.logOut = logOut
  vm.toggle = toggle;
  // vm.loginCheck = loginCheck

  // function loginCheck () {
  //   console.log(UserService.isLoggedIn())
  //   if (UserService.isLoggedIn() == true){
  //     console.log("They are logged in.");
  //     vm.buttonSwitch = true;
  //   }else{
  //     console.log("They are not logged in");
  //     vm.buttonSwitch = false;
  //   }
  // }

  function toggle () {
    $state.go('root.login')
    // loginCheck();
  }

  function logOut () {
    UserService.logOut();
    vm.buttonSwitch = false;
    $state.go('root.home');
  }

  $rootScope.$on('loginChange', (event, status) => {
    vm.buttonSwitch = status
  });
}

RootController.$inject = ['UserService', '$state', '$rootScope'];

export { RootController }
