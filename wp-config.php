<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress5' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2kn?UuojWbs-iK]|=EupB^Q!^I[ |39$!xqR?q0*-*cI5v&KuIpw01P`YHBza1}8' );
define( 'SECURE_AUTH_KEY',  'I8fC0gkgN+PL<%v*n`eC,IN*!Uj*^ h:wVB*2)0GaA$p7=*PYVA]uyRaugpqsb6e' );
define( 'LOGGED_IN_KEY',    '3*bBQe6GEnd$u)XX:r_M O0]{2zGD>eSy_4H|ReUbH]@k+yb3B:Duv7tbQlWF8>O' );
define( 'NONCE_KEY',        'yu@SMNg!!5Qwt^{>bESb,#so=0kG<J6{Si{nqm5?Kw4?r++?c+(0F9Fc=/=D$tv+' );
define( 'AUTH_SALT',        'O[8.$Tm]k[A/O}{ez|g;#Nu9R<Ub)sJeFge:`e~u!Hwa7$yyxD8|+>4^k29vRz0 ' );
define( 'SECURE_AUTH_SALT', '.6d~8h92@q]_e<UJfKDyD0x217cUNhL{%a.|cUD~no`gB8RgzTN(pd$qM*=n|_8=' );
define( 'LOGGED_IN_SALT',   '@Q//0x9Pm~Eq&Pp4To0p4X2nQ9UZyvU_-b*Z28.O8$Gaw*Ag~^WUf50LC|!(P~;:' );
define( 'NONCE_SALT',       '39Q;R}$!_j!hP>^Wt5q.;q3cAcJ7c&dw*?RAP!G5HpA_zzSvQQqIO$zDTy2Pmg:r' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
