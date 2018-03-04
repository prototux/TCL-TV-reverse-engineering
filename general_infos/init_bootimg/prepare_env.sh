#!/bin/sh
#Prepare all env for dump&restore mode
#mount -t ext4 /dev/mmcblk0p13 /mnt

#if [ ! -f /mnt/modules/usb-common.ko ];
#then
#	umount /mnt
#	mount -t ext4 /dev/mmcblk0p10 /mnt
#fi
#
#if [ ! -f /mnt/modules/usb-common.ko ];
#then
#	umount /mnt
#	mount -t ext4 /dev/mmcblk0p11 /mnt
#fi


#insmod all usb driver
insmod /usbdrivers/usb-common.ko
insmod /usbdrivers/usbcore.ko
insmod /usbdrivers/xhci-hcd.ko
insmod /usbdrivers/ehci-hcd.ko
insmod /usbdrivers/usb-storage.ko
insmod /usbdrivers/nvt-crypt.ko

umount /mnt

#Check command in MISC partition
dd if=/dev/mmcblk0p6 of=/tmp/strings.txt bs=20 count=1
command=`sed -n '1p' /tmp/strings.txt`
echo "command = ${command}" > /dev/console

#Run command
if [ ${command:0:9} = "emmc-dump" ]; then
	#First wipe MISC partition
	echo boot-normal > /dev/mmcblk0p6 && sync
		
    sh /etc/emmc.sh dump  1>/dev/console
	# send signal to inform init process
    #kill -SIGUSR1 1
elif [ ${command:0:12} = "emmc-restore" ]; then
	#First wipe MISC partition
	echo boot-normal > /dev/mmcblk0p6 && sync
			
    sh	/etc/emmc.sh restore 1>/dev/console
	# send signal to inform init process
    #kill -SIGUSR1 1	

elif [ ${command:0:9} = "emmc-eupm" ]; then
	#First wipe MISC partition
	echo boot-normal > /dev/mmcblk0p6 && sync
			
    sh	/etc/emmc.sh eupm 1>/dev/console
	# send signal to inform init process
    #kill -SIGUSR1 1	

else
	echo "Normal boot command: ${command}" > /dev/console
	# send signal to inform init process
	#kill -SIGUSR1 1 
fi


