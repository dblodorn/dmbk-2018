<!DOCTYPE html><html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/imgs/ico/apple-touch.icon.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/library/imgs/ico/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/library/imgs/ico/favicon-16x16.png">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/library/imgs/ico/icons/favicon.ico" type="image/x-icon">
  <title>
    <?php bloginfo('name') ?><?php wp_title( '|' , true, 'left' ); ?>
  </title>
  <?php wp_head(); ?>
  <?php include locate_template('includes/head-content.php'); ?>
</head>
<body>
  <?php include locate_template('includes/header-content.php'); ?>
  <main role="main" class="fade-in">