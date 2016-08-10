function LoginController () {
    let vm = this;
    vm.loginswitch = true
    vm.toggle = toggle;

    function toggle () {
      console.log("Hey");
      vm.loginswitch = !vm.loginswitch
    }
}

export { LoginController };
