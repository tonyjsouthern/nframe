function FrameController (FrameService, $stateParams) {

  let vm = this;
  vm.retFrames = retFrames;
  vm.images = []

  function retFrames () {
    FrameService.getFrames().then( res => {
      vm.images = res.data
      console.log(vm.images)
    });
  }

  retFrames();

} // closes
FrameController.$inject=['FrameService', '$stateParams']
export { FrameController }
