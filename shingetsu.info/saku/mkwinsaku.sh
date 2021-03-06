#!/bin/sh -e
SUFFIX=$1
if [ -z "$SUFFIX" ]; then
    echo "usage: mkwinsaku suffix" 1>&2
    exit 1
fi
BASENAME="winsaku${SUFFIX}"
/cygdrive/c/Python26/python setup-win.py py2exe
rm -R dist/tcl/tcl*/tzdata
rm -R dist/tcl/tk*/{images,demos,msgs}
mv dist ../$BASENAME
cd ..
zip -r -9 $BASENAME.zip $BASENAME
