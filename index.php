<?php
require 'vendor/autoload.php';

$router = new AltoRouter();

// Routes
$router->map( 'GET', '/', function() {
    require __DIR__ . '/pages/home.php';
});

$router->map( 'GET', '/work', function() {
    require __DIR__ . '/pages/work.php';
});

$router->map( 'GET', '/services', function() {
    require __DIR__ . '/pages/services.php';
});

$router->map( 'GET', '/brand-design-services', function() {
    require __DIR__ . '/pages/brand.php';
});

$router->map( 'GET', '/online-marketing-services', function() {
    require __DIR__ . '/pages/marketing.php';
});

$router->map( 'GET', '/web-design-services', function() {
    require __DIR__ . '/pages/web.php';
});

$router->map( 'GET', '/interface-design-services', function() {
    require __DIR__ . '/pages/ux.php';
});

$router->map( 'GET', '/testimonials', function() {
    require __DIR__ . '/pages/testimonials.php';
});

$router->map( 'GET', '/request-quote', function() {
    require __DIR__ . '/pages/hire.php';
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
