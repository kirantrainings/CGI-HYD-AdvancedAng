angular.module("componentModel")
    .component("counter", {
        //template: "<h1>{{counterCtrl.name}}</h1>",
        templateUrl: "app/counter/counter.tpl.html",
        controller: function () {
            //this.name = "Angularjs";
            this.count = 0;

            this.increment = function () {
                this.count++;
            };
            this.decrement = function () {
                this.count--;
            };
        },
        controllerAs: "counterCtrl",
        bindings: {
            value: "="
        }
    });
