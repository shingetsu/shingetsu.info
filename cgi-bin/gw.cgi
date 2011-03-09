#!/usr/bin/python
'''Gateway Guide.
'''
#
# Copyright (c) 2007,2011 shinGETsu Project.
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE AUTHORS AND CONTRIBUTORS ``AS IS'' AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
# OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
# OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
# SUCH DAMAGE.
#

import os
import re
import socket
import urllib
from random import shuffle
from urllib import urlopen

from shingetsu.node import NodeList, SearchList

socket.setdefaulttimeout(5)

def gateway(node):
    found = re.search(r'(.*)/server.cgi$', str(node))
    if found:
        return 'http://%s/' % found.group(1)
    else:
        return None

def nodes():
    n = [gateway(i) for i in NodeList()]
    s = [gateway(i) for i in SearchList()]
    buf = list(set(n).union(s))
    shuffle(buf)
    return buf

def public_gateway(uri):
    try:
        for line in urlopen(uri):
            if '<meta name="robots" content="NOINDEX" />' in line:
                return False
        return True
    except (IOError, socket.timeout):
        return False

def main():
    path = os.environ.get('PATH_INFO', '/').replace('/', '', 1)
    path = re.sub(r'\s', '', path)
    for n in nodes():
        if public_gateway(n):
            print 'Location: %s%s' % (n, path)
            print
            return
    print 'Location: http://bbs.shingetsu.info/' + path
    print

if __name__ == '__main__':
    main()
