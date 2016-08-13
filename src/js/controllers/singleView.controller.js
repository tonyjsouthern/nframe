import domtoimage from 'dom-to-image';
import $ from 'jquery';

function SingleView ($scope) {

  let vm = this;
  vm.backgroundSelect = backgroundSelect;
  vm.screenshotSelect = screenshotSelect;
  vm.savePic = savePic;
  vm.blurToggle = blurToggle;
  vm.isActive = false;
  vm.background = "";
  vm.screenshot = "";

  function backgroundSelect () {
    filepicker.pick(
      function(Blob){
        console.log(Blob.url);
        vm.background = Blob.url;
        console.log(vm.background);
        $scope.$apply();
      });
    }

    function screenshotSelect () {
      filepicker.pick(
        function(Blob){
          console.log(Blob.url);
          vm.screenshot = Blob.url;
          console.log(vm.screenshot);
          $scope.$apply();
        })
    }

    function blurToggle () {
      if ($scope.isActive === false){
        $scope.isActive = true;
      }else{
        $scope.isActive = false;
      }

    }

    let crash = document.getElementById("imageCont");

    function savePic (){
      domtoimage.toPng(crash).then ( function (dataUrl){
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error){
        console.error('oops, something went wrong!', error);
      })
//       let imageBox = document.getElementsByClassName("imageCont");
//     html2canvas(imageBox, {
//       onrendered: function(canvas) {
//         document.body.appendChild(canvas);
//   }
// });
}

} // close

SingleView.$inject = ['$scope'];
export { SingleView };



// image urls:
// https://cdn.filestackcontent.com/oSWh91xtRKSu8UXQ6KJc = nexus 5x
// https://cdn.filestackcontent.com/zLqyHkXVTVOCL541OtSD = nexus 6p
// https://cdn.filestackcontent.com/08UJVsQJRZqd3r6Jiix8 = nexus 5
// https://cdn.filestackcontent.com/kavmaZIiTgu3KjW9RAIr = nexus 6
