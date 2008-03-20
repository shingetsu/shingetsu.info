#!/bin/sh -e

cd /srv/stage/shingetsu.info
del rss.rdf sitemap.txt recent.js news.js || true
mkrss -h head.txt > rss.rdf
mksitemap http://shingetsu.info/ . | sort > sitemap.txt
rss2js rss.rdf > recent.js
./tool/mknews news/index.ht > news.js

rsync -Cacv --delete \
    --exclude="*.ht" \
    --exclude="*.gz" \
    --exclude="*.bz2" \
    --exclude="*.zip" \
    --exclude="*.pdf" \
    --exclude="README.html" \
    --exclude="- /setup.sh" \
    --exclude="- /tool" \
    --exclude="- /template" \
    --exclude="- /index.html" \
    --exclude="- /intro/index.html" \
    --exclude="- /searchbox.js" \
    --exclude="- /saku/changelog.ja.txt" \
    ./ /srv/www/shingetsu.info/
