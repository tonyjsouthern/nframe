import domtoimage from 'dom-to-image';
import { phones } from '../phones.js'

function SingleView ($scope, $stateParams, FrameService, $state) {

  let vm = this;
  vm.backgroundSelect     = backgroundSelect;
  vm.screenshotSelect     = screenshotSelect;
  vm.logoSelect           = logoSelect;
  vm.setFontColor         = setFontColor;
  vm.setFontSize          = setFontSize
  vm.savePic              = savePic;
  vm.blurToggle           = blurToggle;
  vm.loadingSwitch        = false;
  vm.isActive             = false;
  vm.logo                 = "./images/Blanks/logo.png";
  vm.background           = "./images/Blanks/blankmain.png";
  vm.screenshot           = "./images/Blanks/blankscreen.png";
  vm.phones               = phones;
  vm.addToFrames          = addToFrames;
  vm.image                = "";

  $scope.sliderLogo = {
    value: 100,
    options: {
      floor: 0,
      ceil: 200
    }
  };

  $scope.sliderTwo = {
    value: 50,
    options: {
      floor: 0,
      ceil: 50
    }
  };

  $scope.slider = {
    value: 50,
    options: {
      floor: 0,
      ceil: 50
    }
  };

  function backgroundSelect () {
    filepicker.pick(
      function(Blob){
        vm.background = Blob.url;
        $scope.$apply();
      });
    }

    function screenshotSelect () {
      filepicker.pick(
        function(Blob){
          vm.screenshot = Blob.url;
          $scope.$apply();
        })
      }

      function logoSelect () {
        filepicker.pick(
          function(Blob){
            vm.logo = Blob.url;
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

        // Save Image



        function savePic () {
          vm.loadingSwitch = true;
          let reg = domtoimage.toBlob(document.getElementById('imageCont'))
          .then(function (blob) {
            filepicker.store(
              blob,
              function(new_blob){
                vm.image = new_blob.url;
                console.log(vm.image);
                vm.loadingSwitch = false;
                console.log(vm.loadingSwitch)
                $scope.$apply();
              })
            })
          }

          // init function
          function init () {
            phones.filter (function () {
              vm.phone = phones[$stateParams.id]

            })
          }

          init()

          // font editing tools
          function setFontColor (){
            var hsvalue = $('.colorpicker').val()
            document.getElementById("phoneTextTwo").style.color = hsvalue
            document.getElementById("phoneTextOne").style.color = hsvalue
          }

          function setFontSize() {
            var selectValue = $('.button').val();
            document.getElementById("phoneTextTwo").style.fontSize = selectValue;
            document.getElementById("phoneTextOne").style.fontSize = selectValue;
          }

          function addToFrames (image) {
            FrameService.addFrame(image);
            console.log(image)
            $state.go('root.frames');
          }

        } // close

        SingleView.$inject = ['$scope', '$stateParams', 'FrameService', '$state'];
        export { SingleView };
