function FrameController (FrameService) {

  let vm = this;
  vm.retFrames = retFrames;

  function retFrames () {
    FrameService.getFrames()
  }

  retFrames();

}
FrameController.$inject=['FrameService']
export { FrameController }
