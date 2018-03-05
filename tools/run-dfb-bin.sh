#!/bin/sh

# This run a directfb application $1 on the TV, setting the correct env
# Note: this will run applications as the OSD
LD_PRELOAD="/applications/soc_lib/libfpp.so"
LD_LIBRARY_PATH=/applications/soc_lib
DFBHOME=/applications/tv_bin/etc
DFB_OSD_PLANE_ORDER_PARAM=L3P2_L2P3_L1P1
$1
