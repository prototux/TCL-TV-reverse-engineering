#!/bin/sh

#make nvtpipe

     
mkdir /tmp/nvtpipe
mknod /tmp/nvtpipe/linkstat p
mknod /tmp/nvtpipe/usbstat p
#ln -s /tmp/nvtpipe /nvtpipe


# insert USB driver modules
insmod /applications/soc_lib/modules/usb-common.ko
insmod  /applications/soc_lib/modules/usbcore.ko
insmod /applications/soc_lib/modules/xhci-hcd.ko
insmod /applications/soc_lib/modules/ehci-hcd.ko
insmod /applications/soc_lib/modules/usb-storage.ko

insmod /applications/soc_lib/modules/hid.ko
insmod /applications/soc_lib/modules/hid-generic.ko
insmod /applications/soc_lib/modules/usbhid.ko
insmod /applications/soc_lib/modules/uhid.ko
    
insmod /applications/soc_lib/modules/gspca_main.ko
    
insmod /applications/soc_lib/modules/videobuf2-core.ko
insmod /applications/soc_lib/modules/videobuf2-memops.ko
insmod /applications/soc_lib/modules/videobuf2-vmalloc.ko
    
insmod /applications/soc_lib/modules/uvcvideo.ko
    

    
echo /sbin/mdev>/proc/sys/kernel/hotplug
#mdev -s
micom usb_gpio

#dd if=/dev/zero of=/dev/fb0
#dd if=/dev/zero of=/dev/fb1
#dd if=/dev/zero of=/dev/fb2


insmod /applications/soc_lib/modules/btusb.ko
insmod /applications/soc_lib/modules/bthid.ko

insmod /applications/soc_lib/modules/8812au.ko
insmod /applications/soc_lib/modules/8192eu.ko

#for netflix key startup, enable wlan0 as soon as possible.
if [ -f /mtd_apdat/netflix ]; then
  echo "[postinit] nflx boot"
  grep "wifi" /data/network_mode
  if [ $? == 0 ]; then
     echo "[postinit] wifi up"
     ifconfig wlan0 up
     sleep 3
     wpa_supplicant -Dnl80211 -iwlan0 -c/data/wifi/wpa_supplicant.conf -B &
     sleep 2
     wpa_cli -p/data/run/wpa_supplicant -a/etc/wifi/wpa-action.sh &
  fi
fi

#ifconfig eth0 down
#ifconfig eth0 hw ether 00:01:02:03:04:05
#ifconfig eth0 up

#Adjust IPV6 network buffer for netflix , liuxiaofeng, 2015.08.05
echo 512 > /proc/sys/net/ipv6/neigh/default/gc_thresh1
echo 2048 > /proc/sys/net/ipv6/neigh/default/gc_thresh2
echo 4096 > /proc/sys/net/ipv6/neigh/default/gc_thresh3

#start network link monitor
ifplugd -a

ifconfig lo up
#ifconfig eth0 192.168.0.22
