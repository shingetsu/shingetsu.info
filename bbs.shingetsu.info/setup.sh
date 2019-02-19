#!/bin/sh -e

cd /srv/stage/shingetsu/bbs.shingetsu.info

rsync -Cacv --delete \
    --exclude="- /setup.sh" \
    --exclude="- /index*.html" \
    --exclude="- /mobile.html" \
    --exclude="- /mobile.xhtml" \
    --exclude="- /recent_rss.rdf" \
    --exclude="- /recentrssdate" \
    --exclude="- /rss.rdf" \
    --exclude="- /rssdate" \
    --exclude="- /sitemap.txt" \
    --exclude="- /suggest.js" \
    ./ /srv/www/bbs.shingetsu.info/
