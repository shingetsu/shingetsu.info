//'Write ID' to 'Res Number' Change.
//license: http://www.kmonos.net/nysl/ or public domain. (dual license).

function id_res() {
    var dts = $('records').getElementsByTagName('dt');
    var dds = $('records').getElementsByTagName('dd');
    var ids = pushdId();
    var resplus = pushdPlusRes();
    var idres = new Array();
    for (var i=0; i<dts.length; i++) {
        //idres[ids[i]] = eval(i+1) + " (" + ids[i] + ")"; //好みに合わせて書き換えて
        idres[ids[i]] = eval(i+1+resplus);
    }
    for (var i=0; i<dts.length; i++) {
        var at = dts[i].getElementsByTagName('a')[0];
        if (at) {
            //at.innerHTML = at.innerHTML.replace(ids[i], idres[ids[i]]); //dtフィールド（見出し？）
            at.innerHTML = at.innerHTML.replace(ids[i], idres[ids[i]] + " :" + ids[i] + " ");
        }
        var ad = dds[i].getElementsByTagName('a');
        if (ad) {
            for (var k=0; k<ad.length; k++) {
                if (ad[k].innerHTML.match("&gt;&gt;.*")) {
                    var id = ad[k].innerHTML.replace("&gt;&gt;", "");
                    if (idres[id]){
                        ad[k].innerHTML = ad[k].innerHTML.replace(id, idres[id]); //ddフィールド（本文）
                    }
                }
            }
        }
    }
}

function res_id() {
    var ids = pushdId();
    var resplus = pushdPlusRes();
    var form = $('postarticle');
    var form_split = form.body.value.split(">>");
    for (var i=0; i<form_split.length; i++) {
        if (form_split[i]) {
            if (form_split[i].match("^([0-9]+)(( )|(\n)|($))")) {
                var m = form_split[i].match("^([0-9]+)(( )|(\n)|($))");
                if (ids[eval(m[1]-1-resplus)]) {
                    var n = ids[eval(m[1]-1-resplus)] + m[2];
                    form_split[i] = form_split[i].replace(m[0], n);
                }
            }
        }
    }
    form.body.value = form_split.join(">>");
}

function pushdPlusRes() {
    var maxrec = pushdMaxRec();
    var maxpage = pushdMaxPage();
    var cpage = currentPage();
    if (cpage == maxpage) {
        return 0;
    } else {
        var ids = pushdId();
        var pagesize = eval(ids.length);
        var last_res = eval(maxrec - eval(pagesize * maxpage));
        var resplus = eval(eval(maxpage - cpage - 1) * pagesize + last_res);
    }
    return resplus;
}

function pushdId() {
    var dts = $('records').getElementsByTagName('dt');
    var ids = new Array();
    var re = new RegExp("^r", "i");
    for (var i=0; i<dts.length; i++) {
        ids[i] = dts[i].id.replace(re, "");
    }
    return ids;
}

function pushdMaxPage() {
    var nav = $('pagenavi');
    var as = nav.getElementsByTagName('a');
    if (as.length < 4) { //as[0].innerHTML = 'Go to the last article', as[1].innerHTML = '&lt;&lt;last', as[2].innerHTML = 'Archive'
        return 0;
    } else if (as[as.length -2].innerHTML.match(/&gt;&gt;/)) {
        var i = as.length - 3;
        return parseInt(as[i].innerHTML);
    } else {
        var i = as.length - 2;
        var prelast = parseInt(as[i].innerHTML);
        return eval(prelast + 1);
    }
}

function currentPage() {
    var page = location.pathname.match(/^\/thread\.cgi\/.*\/p[0-9]+$/);
    var perma = location.pathname.match(/^\/thread\.cgi\/.*\/[a-z0-9]+$/);
    if (page) {
        var current = String(location.pathname.match(/\/p[0-9]+$/)).replace("/p", "");
        return parseInt(current);
    } else if (perma) {
        maxpage = pushdMaxPage();
        return maxpage;
    } else {
        return 0
    }
}

function pushdMaxRec() {
    var rec_n_size = $('status').innerHTML;
    var maxrec = String(rec_n_size.match(/\(.*\/[0-9]+\//)).match(/[0-9]+/);
    return parseInt(maxrec);
}

function debug() {
    var rec_n_size = $('status').innerHTML;
    alert(rec_n_size);
    var maxrec = String(rec_n_size.match(/\(.*\/[0-9]+\//)).match(/[0-9]+/);
    alert(maxrec);
}

function addReplaceLink() {
    var msg_res_id = '[Res to ID]';
    if (uiLang == 'ja') { msg_res_id = '[レス番号からIDに変換]'; }
    var form = $('postarticle');
    var p = form.getElementsByTagName('p')[0];
    var span = document.createElement('span');
    span.innerHTML = '<a href="javascript:;" id="res_id" name="res_id">' + msg_res_id + '</a>';
    addEvent(span, 'click', res_id);
    p.appendChild(span);
}

function addDebugLink() {
    var msg_debug = '[DEBUG]';
    if (uiLang == 'ja') { msg_debug = '[デバッグ]'; }
    var form = $('postarticle');
    var p = form.getElementsByTagName('p')[0];
    var span = document.createElement('span');
    span.innerHTML = '<a href="javascript:;" id="debug" name="debug">' + msg_debug + '</a>';
    addEvent(span, 'click', debug);
    p.appendChild(span);
}

function addonSubmit() {
    addEvent($('postarticle'), 'submit', res_id);
}

initFunc[initFunc.length] = function () {
    if (location.pathname.match(/\/thread\.cgi\/.*/)){
        id_res();
        addReplaceLink();
        //addDebugLink();
        addonSubmit();
    }
}
