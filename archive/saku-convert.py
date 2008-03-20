#!/usr/bin/python
#
# saku-convert.py - Convert shinGETsu cache SAKU cache.
# Copyright (C) 2005  shinGETsu Project.
# Released under the GNU General Public License.
#
# usage:
#   % cd saku-dir
#   % saku-convert.py /path/to/shingetsu/dat
#

import os
import sys

usage = "usage: cd saku-dir; saku-convert.py /path/to/shingetsu/dat"
sys.path.append(os.getcwd())

try:
    from shingetsu.cache import *
except ImportError:
    sys.exit(usage)

try:
    datadir = sys.argv[1]
except IndexError:
    sys.exit(usage)

datadir = os.path.join(os.getcwd(), datadir)
os.chdir("www")

for i in os.listdir(datadir):
    if not i.endswith(".dat"):
        continue
    datfile = i[:-4]  # remove ".dat"
    print "converting %s" % datfile
    cache = Cache(datfile)
    f = file(os.path.join(datadir, i))
    recs = []
    for line in f:
        rec = Record(datfile)
        parse_ok = rec.parse(line)
        if parse_ok and rec.md5check():
            recs.append(rec)
    f.close()
    cache.add_data(recs)
