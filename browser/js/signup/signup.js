app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, userFactory, AuthService, $state) {

    $scope.signup = {};

    $scope.sendSignUp = function (loginInfo) {
        console.log(loginInfo);
        userFactory.addUser(loginInfo).then(function (user) {
            return AuthService.login(loginInfo)
            .then(function () {
            $state.go('home');
        })
        .catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

        })
    }
});