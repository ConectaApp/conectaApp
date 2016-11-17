var app = angular.module('appConecta', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    // Main Routes
    .when("/", {
        templateUrl : "partials/main/intro.html",
        controller: 'introController'
    })
    .when("/main", {
        templateUrl : "partials/main/main.html",
        controller: 'mainController'
    })
    .when("/forgot", {
        templateUrl : "partials/main/forgot.html",
        controller: 'forgotController'
    })
    .when("/login", {
        templateUrl : "partials/main/login.html",
        controller: 'loginController'
    })
    .when("/signup", {
        templateUrl : "partials/main/signup.html",
        controller: 'signUpController'
    })

    // Notify Routes
    .when("/my_messages", {
        templateUrl : "partials/notify/my_messages.html",
        controller: 'myMessagesController'
    })
    .when("/notify", {
        templateUrl : "partials/notify/notify.html",
        controller: 'notifyController'
    })
    .when("/send_notify", {
        templateUrl : "partials/notify/send_notify.html",
        controller: 'sendNotifyController'
    })

    // Chat Routes
    .when("/messages", {
        templateUrl : "partials/chat/messages.html",
        controller: 'messagesController'
    })
    .when("/chat", {
        templateUrl : "partials/chat/chat.html",
        controller: 'chatController'
    })

    // Option Routes
    .when("/category", {
        templateUrl : "partials/options/category.html",
        controller: 'categoryController'
    })

    // Others Routes
    .when("/about", {
        templateUrl : "partials/others/about-us.html",
        controller: 'aboutUsController'
    })
    .when("/maps", {
        templateUrl : "partials/others/maps.html",
        controller: 'mapsController'
    })
    .when("/settings", {
        templateUrl : "partials/others/settings.html",
        controller: 'settingsController'
    })
    .when("/terms", {
        templateUrl : "partials/others/terms.html",
        controller: 'termsController'
    })

    // Payment Routes
    // .when("/payment", {
    //     templateUrl : "partials/payment/payment.html",
    //     controller: 'paymentController'
    // })

    .otherwise({ redirectTo: 'partials/main/login.html' });
});
