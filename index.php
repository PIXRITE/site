<?php
require 'vendor/autoload.php';

$router = new AltoRouter();

// Routes
$router->map( 'GET', '/', function() {
    require __DIR__ . '/pages/home.php';
});

$router->map( 'GET', '/about', function() {
    require __DIR__ . '/pages/about.php';
});

$router->map( 'GET', '/contact', function() {
    require __DIR__ . '/pages/contact.php';
});

$router->map( 'GET', '/success', function() {
    require __DIR__ . '/pages/success.php';
});

$router->map( 'GET', '/error', function() {
    require __DIR__ . '/pages/error.php';
});

// Match URL
$match = $router->match();

// Go to page or go to 404 page
if( $match && is_callable( $match['target'] ) ) {
    call_user_func_array( $match['target'], $match['params'] );
} else {
    require __DIR__ . '/pages/404.php';
}
