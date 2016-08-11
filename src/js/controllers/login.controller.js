function LoginController (UserService, $state, $cookies, $window) {

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
        console.log(res);
        $cookies.put('access_token', res.data.access_token);
        $cookies.put('username', res.data.username);
        $window.location.reload();
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
    });
    console.log("Signed Up!")
  }

} // closing bracket
LoginController.$inject = ['UserService', '$state', '$cookies', '$window'];
export { LoginController };
