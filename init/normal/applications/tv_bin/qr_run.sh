#!/bin/sh
echo "S=================================TART"
export LD_LIBRARY_PATH=/applications/soc_lib:$LD_LIBRARY_PATH
mkdir /data/qrcode
cd /applications/tv_bin/
echo $1
#./qrencode
./qrencode --foreground=606060 -s 6 -d 100 -m 1 -l M -o /data/qrcode/qrencodeNscreen.png $1
echo "E=================================ND"