#!/usr/bin/python
#
# saku-buildcache.py - Build SAKU cache (extract record).
# Copyright (C) 2006  mutsu (mutumin03@hotmail.com).
#
# usage:
#   % cd saku-dir
#   % saku-buildcache.py
#

import os, sys

usage = "usage: cd saku-dir; saku-buildcache.py"

try:
    from shingetsu.config import *
    from shingetsu.cache import *
except ImportError:
    sys.exit(usage)

cachelist = CacheList()
for cache in cachelist:
    print "building %s" % cache
    attach_dir = os.path.join(cache_dir, cache.datfile, 'attach')
    if not os.path.isdir(attach_dir):
        os.makedirs(attach_dir)

    c = Cache(cache.datfile)
    c.sync_body()
