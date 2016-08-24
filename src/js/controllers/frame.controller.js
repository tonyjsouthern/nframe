function FrameController (FrameService, $stateParams) {

  let vm = this;
  vm.retFrames = retFrames;
  // vm.deleteFrame = deleteFrame
  vm.images = []

  function retFrames () {
    FrameService.getFrames().then( res => {
     vm.images = res.data
     console.log(vm.images)
   });
  }

  retFrames();

  // function deleteFrame (id) {
  //    FrameService.deleteFrame(id)
  // }

} // closes
FrameController.$inject=['FrameService', '$stateParams']
export { FrameController }
