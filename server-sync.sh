#!/bin/sh

SRC="${PWD}/public"
DEST="/var/www/html"

echo "Syncing Site..."
rsync -r $SRC/ ../site/
echo "Syncing 404..."
rsync $SRC/404/index.html $DEST/404.html
rsync $PWD/fa-404.html $DEST/fa/404.html
echo "Done!"
