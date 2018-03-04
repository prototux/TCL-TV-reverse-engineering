#ifconfig eth0 hw ether 00:00:01:02:03:04
if [ -f /mtd_apdat/netflix ]; then
  echo "[run] nflx boot"
  grep "cable" /data/network_mode
  if [ $? == 0 ]; then
     ifconfig eth0 up &
     udhcpc &
     echo "[run] eth0"
  fi
fi

export BROWSER_LOCATION=/applications/thirdpart/hbbtv/opt/bin/hbbtv-web-browser
export COOKIES_LOCATION=/data/cookies.txt
export DFBHOME=/applications/tv_bin/etc
export F1_CONFIG=/applications/tv_bin/run_config
export FONTCONFIG_PATH=/applications/thirdpart/hbbtv/opt/etc/fonts
export ICU_DATA=/applications/thirdpart/hbbtv/opt/share/icu/4.2.1
export LD_LIBRARY_PATH=/applications/webkit-resource/lib:/applications/soc_lib/:/applications/media/lib:$LD_LIBRARY_PATH
export NVT_MMAP_PATH=/applications/tclconfig/nvt_mmap.conf
export GTK_IM_MODULE=multipress

mkdir /applications/database/epg_db
mkdir /dev/shm
mount tmpfs /dev/shm -t tmpfs 
mount -t ramfs none /applications/database/epg_db -o maxsize=20000

#The following code will select correct "App_Info.txt" according to the contents of "/mtd_apdat/paneldata"
if [ -f /mtd_apdat/paneldata/panel.txt ]; then
   export PANEL_WIDTH=$(grep 'stMode50Hz.u16Width' /mtd_apdat/paneldata/panel.txt | awk '{print $3}')
   export PANEL_HEIGHT=$(grep 'stMode50Hz.u16Height' /mtd_apdat/paneldata/panel.txt | awk '{print $3}')
else 
   export PANEL_WIDTH=1920
   export PANEL_HEIGHT=1080
fi

if [ $PANEL_WIDTH -eq 1366 ]; then
   export FASTLOGO_PLANE=2
   export DFB_OSD_PLANE_ORDER_PARAM=L3P2_L2P3_L1P1
   insmod /applications/soc_lib/modules/ntkdriver.ko \
        gau32BufAddrSize=0x13800000,0x03100000 \
        gau32PlaneWinSize=720,576,1920,1080,1280,720,96,96,96,96
else
   export FASTLOGO_PLANE=3
   export DFB_OSD_PLANE_ORDER_PARAM=L3P3_L2P2_L1P1
   insmod /applications/soc_lib/modules/ntkdriver.ko \
        gu32FastLogoPlaneID=2 \
        gau32BufAddrSize=0x13800000,0x03100000 \
        gau32PlaneWinSize=1280,720,1920,1080,1920,1080,96,96,96,96
        DFB_OSD_PLANE_ORDER_PARAM=L3P3_L2P1_L1P2
fi


insmod /applications/soc_lib/modules/fusion.ko    

# mali driver
insmod /applications/soc_lib/modules/ump.ko \
    ump_backend=1 \
    ump_memory_address=0x98000000 \
    ump_memory_size=0x80000000 

insmod /applications/soc_lib/modules/mali.ko \
    mali_dedicated_mem_start=0 \
    mali_dedicated_mem_size=0 \
    mali_shared_mem_size=0x28000000 \
    mali_fb_start=0x13800000 \
    mali_fb_size=0x03100000

insmod /applications/soc_lib/modules/ntkvm.ko

[ -e /dev/ump ] && rm /dev/ump
[ -e /dev/mali ] && rm /dev/mali

mdev -s
insmod /applications/soc_lib/modules/kteeclient.ko

dd if=/dev/zero of=/dev/fb3 bs=36846 count=1

ulimit -c unlimited
#echo "1">/proc/sys/kernel/core_uses_pid
#echo "/mnt/core_%e_%p">/applications/bin/nova/core_pattern
echo "/data/core">/proc/sys/kernel/core_pattern

#source ../media/envsetup.sh

# run this tool to set TV to match different RC types
./tvRcConfig &

echo "starting sitatvservice"
./sitatvservice &

#### for netflix data on rw disk, by liuxiaofeng  ###
export TCL_FIRMWARE_VERSION=$(sed -n '/^ \{0,\}TCL_EU_MAIN_SW_VERSION/p' /applications/tclconfig/sys.ini | sed 's/;/ /g' | awk -F = '{print $2}')
NETFLIX_DATA_PATH="/data/netflix_runtime/data/dpi/playready/storage"
if [ ! -d "$NETFLIX_DATA_PATH" ] ; then
mkdir -p "$NETFLIX_DATA_PATH"
fi
sleep 5 && ./event_manager &
sleep 7

source ../media/envsetup.sh

/applications/media/mediaserver &
sleep 5
./ipepg_server &
rm -rf /mtd_apdat/netflix
