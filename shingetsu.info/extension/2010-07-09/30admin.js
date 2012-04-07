///admin.cgi/status node & search node replace link.
//license: http://www.kmonos.net/nysl/ or public domain. (dual license).

initFunc[initFunc.length] = function () {
    if (location.pathname == '/admin.cgi/status') {
        nodelink();
    }
}

function nodelink() {
    var ul = document.getElementsByTagName('ul');
    for (var i=0; i<ul.length; i++) {
        var li = ul[i].getElementsByTagName('li');
        //alert(li.length);
        for (var j=0; j<li.length; j++) {
            var a = document.createElement('a');
            var node = li[j].innerHTML;
            a.href = 'http://' + node.replace('/server.cgi', '/');
            a.innerHTML = node;
            li[j].innerHTML = '';
            li[j].appendChild(a);
        }
    }
}
