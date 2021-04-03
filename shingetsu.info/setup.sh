#!/bin/sh -e

cd `dirname $0`
del rss.rdf sitemap.txt recent.js news.js || true
mkrss -h head.txt > rss.rdf
mksitemap https://shingetsu.info/ . | sort > sitemap.txt
rss2js rss.rdf > recent.js
./tool/mknews news/index.ht > news.js

rsync -Cacv --delete \
    --exclude="*.ht" \
    --exclude="*.gz" \
    --exclude="*.bz2" \
    --exclude="*.zip" \
    --exclude="*.pdf" \
    --exclude="README.html" \
    --exclude="- /head.txt" \
    --exclude="- /setup.sh" \
    --exclude="- /tool" \
    --exclude="- /template" \
    --exclude="- /index.html" \
    --exclude="- /docs.html" \
    --exclude="- /intro/index.html" \
    --exclude="- /searchbox.js" \
    --exclude="- /saku/changelog.ja.txt" \
    --exclude="- /wiki/rss.xml" \
    ./ /srv/www/shingetsu.info/
