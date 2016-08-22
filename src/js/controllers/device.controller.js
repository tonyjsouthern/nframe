import { phones } from '../phones.js'

function DeviceController () {

      let vm = this;
      vm.phones = phones

}

DeviceController.$inject = [];
export { DeviceController }
