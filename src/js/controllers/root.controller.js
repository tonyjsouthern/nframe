function RootController (UserService, $state, $rootScope) {

  let vm = this;
  vm.buttonSwitch = false;
  vm.logOut = logOut
  vm.toggle = toggle;
  vm.framesShow = false;


  function toggle () {
    $state.go('root.login')
  }

  function logOut () {
    UserService.logOut();
    vm.buttonSwitch = false;
    $state.go('root.home');
  }

  $rootScope.$on('loginChange', (event, status) => {
    vm.buttonSwitch = status
    vm.framesShow = status
  });
}

RootController.$inject = ['UserService', '$state', '$rootScope'];

export { RootController }
