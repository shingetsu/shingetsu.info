</div>
<div id="sidebar">
>>>ifndef TOPPAGE
>>>include "adsmini.h"
<form action="http://www.google.com/cse" id="searchbar"><p>
  <input type="hidden" name="cx" value="003570941829906538055:gaatkcz2xxo" />
  <input type="hidden" name="ie" value="UTF-8" />
  <input type="text" name="q" size="31" id="searchbox" />
  <input type="submit" value="Search" />
</p></form>
<script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=searchbar&amp;lang=en"></script>
>>>endif


<h2>Links</h2>
<ul>
>>>ifdef BASE
  <li><a href="<$BASE>.ja">Japanese</a></li>
  <li>English</li>
>>endif
  <li><a href="/">Top</a></li>
>>>ifdef SECTION
  <li><a href="./"><$SECTION></a></li>
>>>endif
  <li><a href="/news/">News</a></li>
  <li><a href="/wiki/">Wiki</a></li>
  <li><a id="bbs_foot" href="http://bbs.shingetsu.info/">BBS</a></li>
  <li><a href="http://bbs.shingetsu.info/" id="shingetsu_link" title="Relayed BBS">shinGETsu</a></li>
</ul>
<script type="text/javascript">
  readCookie();

  linkForm("bbs_foot", "bbs_foot_form");
  hiddenForm("bbs_foot_form", "shinGETsu BBS", "/");
</script>

<h2>Recent Entries</h2>
<script type="text/javascript" src="/recent.js" charset="utf-8"></script>

<h2>Syndication</h2>
<ul>
  <li><a href="/rss">
      <img src="/feed-icon-16x16.gif" width="16" height="16" alt="" />
      RSS 1.0</a></li>
  <li><a href="http://fusion.google.com/add?feedurl=http%3A//shingetsu.info/rss"><img src="http://buttons.googlesyndication.com/fusion/add.gif" width="104" height="17" alt="Add to Google" /></a></li>
  <li><a rel="license" href="http://creativecommons.org/licenses/by/2.1/jp/" title="This work is licensed under a Creative Commons Attribution 2.1 Japan License."><img alt="Creative Commons License" src="/cc-by-88x31.png" width="88" height="31" /></a></li>
</ul>

<p>Powered by <a href="http://fuktommy.com/htmlpp/">Another HTMLPP</a>.</p>
</div>

<script type="text/javascript">
>>>ifdef TOPPAGE
  hideSideBar();
>>>else
  showSideBar();
>>>endif
</script>

>>>include "address.h"

<script type="text/javascript" src="http://bbs.shingetsu.info/suggest.js" charset="utf-8">
</script>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-61877-9";
urchinTracker();
</script>
</body>
</html>
