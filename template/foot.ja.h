</div>
<div id="sidebar">
>>>ifndef TOPPAGE
>>>include "adsmini.h"
<form method="get" id="searchbar" action="http://www.google.co.jp/search"><p>
  <input type="hidden" name="ie" value="utf-8" />
  <input type="hidden" name="hl" value="ja" />
  <input type="hidden" name="domains" value="shingetsu.info" />
  <input type="hidden" name="sitesearch" value="shingetsu.info" />
  <input type="text" id="q" name="q" value="" size="20" maxlength="255" />
  <input type="submit" name="btnG" value="サイト内検索" />
</p></form>
>>>endif


<h2>リンク</h2>
<ul>
>>>ifdef BASE
  <li>Japanese</li>
  <li><a href="<$BASE>.en">English</a></li>
>>endif
  <li><a href="/">トップ</a></li>
>>>ifdef SECTION
  <li><a href="./"><$SECTION></a></li>
>>>endif
  <li><a href="/news/">ニュース</a></li>
  <li><a href="/wiki/">Wiki</a></li>
  <li><a id="bbs_foot" name="bbs_foot" href="http://bbs.shingetsu.info/">掲示板</a></li>
  <li><a href="http://bbs.shingetsu.info/" id="shingetsu_link" title="関連する新月の掲示板">新月</a></li>
</ul>
<script type="text/javascript">
  readCookie();

  linkForm("bbs_foot", "bbs_foot_form");
  hiddenForm("bbs_foot_form", "新月掲示板", "/");
</script>

<h2>最近の記事</h2>
<script type="text/javascript" src="/recent.js"></script>

<h2>つながり</h2>
<ul>
  <li><a href="/rss">
      <img src="/feed-icon-16x16.gif" width="16" height="16" alt="" />
      RSS 1.0</a></li>
  <li><a href="http://fusion.google.com/add?feedurl=http%3A//shingetsu.info/rss"><img src="http://buttons.googlesyndication.com/fusion/add.gif" width="104" height="17" alt="Add to Google" /></a></li>
  <li><a href="http://sourceforge.net/"><img src="http://sourceforge.net/sflogo.php?group_id=97083&amp;type=1" width="88" height="31" alt="SourceForge.net Logo" /></a></li>
  <li><a href="http://sourceforge.net/donate/index.php?group_id=97083"><img src="/project-support.jpg" width="88" height="32" alt="Support This Project" /></a></li>
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
