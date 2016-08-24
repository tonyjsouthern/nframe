function LoginController (UserService, $state, $cookies) {

  let vm          = this;
  vm.loginswitch  = true;
  vm.toggle       = toggle;
  vm.login        = login;
  vm.signUp       = signUp;

  function toggle () {
    vm.loginswitch = !vm.loginswitch
  }

  function login (user) {
    UserService.login(user).then(
      // Successful Response
      (res) => {
        $cookies.put('access_token', res.data.access_token);
        $cookies.put('username', res.data.username);
        $state.go('root.home');
      },
      // Error Response (Client Error)
      error => {
        console.log(error.data.errors);
      }
    );
  }

  function signUp (user) {
    UserService.signup(user).then(resp => {
      user.username = resp.data.username;
      vm.loginswitch = !vm.loginswitch;
    });
  }

} // closing bracket
LoginController.$inject = ['UserService', '$state', '$cookies'];
export { LoginController };
