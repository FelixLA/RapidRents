
(function () {

    angular.module(APPNAME)
    .directive('file', FileDirective);


    function FileDirective() {
        return {
            scope: {
                file: '='
            },

            link: function (scope, el, attrs) {

                el.bind('change', function (event) {
                    var files = event.target.files;
                    var file = files[0];
                    scope.file = file ? file.name : undefined;
                    scope.$apply();
                });
            }
        };
    }
})();

(function () {
    angular.module(APPNAME)
    .directive('clickedDisable', function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                $(ele).click(function () {
                    $(ele).attr('disabled', true);
                    $(ele).addClass('btn-success');
                    $(ele).removeClass('btn-default');
                    $(ele).text('Sent');
                });
            }
        };
    })
})();