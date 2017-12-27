angular
    .module('myApp')
    .component('chartComponent', {
    // isolated scope binding
      bindings: {
        data: '<'
      },

    //template:'<div>{{completed}}% Completed</div>',

    // The controller that handles our component logic
    controller: 'ToDoCtrl',

});