angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.post', {
    url: '/post',
    views: {
      'tab1': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

  .state('tabsController.timeLine', {
    url: '/timeLine',
    views: {
      'tab2': {
        templateUrl: 'templates/timeLine.html',
        controller: 'timeLineCtrl'
      }
    }
  })

  .state('tabsController.setting', {
    url: '/setting',
    views: {
      'tab3': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});