<?php

$recepient = "info@kproduction.ru";
$sitename = "http://kalyaginproduction.ru/";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");