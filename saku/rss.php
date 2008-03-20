<?php
/* -*- coding: utf-8 -*- */
/* Copyright (c) 2007 Satoshi Fukutomi <info@fuktommy.com>. */

require_once('RSS.class.php');

$rss = new RSS('SAKU snapshot',
               'http://shingetsu.info/saku/',
               'http://shingetsu.info/saku/rss',
               'Dairy snapshot of SAKU. SAKU is a clone of shinGETsu.');
$suffix = array('tar.gz', 'zip', 'diff', 'diff.gz', 'exe.bz2');
foreach ($suffix as $s) {
    foreach (glob('*.' . $s) as $f) {
        $rss->append(array('title' => $f,
                           'date'  => filemtime($f),
                           'link'  => 'http://shingetsu.info/saku/' . $f,
                    ));
    }
}
header('Content-Type: text/xml; charset=UTF-8');
$rss->display();

?>
