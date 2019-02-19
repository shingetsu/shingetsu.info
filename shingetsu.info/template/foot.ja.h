</div>
<div id="sidebar">
>>>ifndef TOPPAGE
>>>include "adsmini.h"
>>>include "amazonbanner.h"
<form action="http://www.google.com/cse" id="searchbar"><p>
  <input type="hidden" name="cx" value="003570941829906538055:gaatkcz2xxo" />
  <input type="hidden" name="ie" value="UTF-8" />
  <input type="text" name="q" size="31" id="searchbox" />
  <input type="submit" value="検索" />
</p></form>
<script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=searchbar&amp;lang=ja"></script>
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
  <li><a id="bbs_foot" href="http://bbs.shingetsu.info/">掲示板</a></li>
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

</body>
</html>
