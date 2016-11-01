angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      .state('menu.home', {
        url: '/homepage',
        views: {
          'side-menu21': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('login', {
        url: '/login-page',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('post', {
        url: '/post',
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      })

      .state('menu.setting', {
        url: '/setting-page',
        views: {
          'side-menu21': {
            templateUrl: 'templates/setting.html',
            controller: 'settingCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/login-page')



  });