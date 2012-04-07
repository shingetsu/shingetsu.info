<?php
/* -*- coding: utf-8 -*- */
/* Copyright (c) 2007,2011 Satoshi Fukutomi <info@fuktommy.com>. */

require_once('RSS.class.php');

$rss = new RSS('SAKUex snapshot',
               'http://shingetsu.info/sakuex/',
               'http://shingetsu.info/sakuex/rss',
               'Dairy snapshot of SAKU. SAKU is a clone of shinGETsu.');
$suffix = array('tar.gz', 'zip', 'diff', 'diff.gz', 'exe.bz2');
foreach ($suffix as $s) {
    foreach (glob('*.' . $s) as $f) {
        $rss->append(array('title' => $f,
                           'date'  => filemtime($f),
                           'link'  => 'http://shingetsu.info/sakuex/' . $f,
                    ));
    }
}
header('Content-Type: text/xml; charset=UTF-8');
$rss->display();
