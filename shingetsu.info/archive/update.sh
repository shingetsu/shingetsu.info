#!/bin/sh -e
/home/www/archive/tools/mkarchive.py | nkf -e
/home/www/archive/tools/mksitemap.py \
    http://archive.shingetsu.info/ /home/www/archive \
    > /home/www/archive/sitemap.txt
