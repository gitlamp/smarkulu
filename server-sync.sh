#!/bin/sh

SRC="${PWD}/public"
DEST="/var/www/html"

echo "Syncing Site..."
rsync -r $SRC/ ../site/
echo "Syncing 404..."
rsync $SRC/404/index.html $DEST/404.html
rsync $PWD/fa-404.html $DEST/fa/404.html
rsync $SRC/styles/main.css $DEST/styles/main.css
rsync $SRC/styles/main-rtl.css $DEST/fa/styles/main-rtl.css
rsync $SRC/img/404-en.png $DEST/img/404-en.png
rsync $SRC/img/404-fa.png $DEST/fa/img/404-fa.png
echo "Done!"
