function Nexus5Controller ($scope) {

  $scope.clickUpload = function(){
    let value = document.getElementById('#upload').value
    document.body.style.backgroundImage = "url(`${value}`)" };

}

Nexus5Controller.$inject = ['$scope'];
export { Nexus5Controller };
