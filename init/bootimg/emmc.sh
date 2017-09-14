#!/bin/sh

operation=$1

#Sleep 3 seconds to wait U-disk discoveryed by Kernel
sleep 3

if [ ! -d /sdcard ]; then
	mkdir /sdcard
fi

time_sec=1
while [  $time_sec -le 10 ];do

	fdisk -l /dev/sda | grep /dev/sda1
	#The u-disk has partition
	if [ $? -eq 0 ]; then
	   	fdisk -l /dev/sda | grep NTFS
		if [ $? -eq 0 ]; then
			ntfs-3g -o big_writes /dev/sda1 /sdcard
			if [ $? -eq 0 ]; then
				echo "mount /dev/sda1 success!"
				break
			fi
		else
			#Directly mount U-disk
			mount /dev/sda1 /sdcard
			if [ $? -eq 0 ]; then
				echo "mount /dev/sda1 success!"
				break
			fi
		fi		
	else
		#The u-disk has no partition
	   	fdisk -l /dev/sda | grep NTFS
		if [ $? -eq 0 ]; then
			ntfs-3g -o big_writes /dev/sda /sdcard
			if [ $? -eq 0 ]; then
				echo "mount /dev/sda success!"
				break
			fi
		else
			#Directly mount u-disk
			mount /dev/sda /sdcard
			if [ $? -eq 0 ]; then
				echo "mount /dev/sda success!"
				break
			fi
		fi		
	fi
	
	echo "$time_sec"
	sleep 2
	time_sec=$(($time_sec+1))
done

if [ $time_sec -gt 10 ]; then
	echo "Mount U-disk timeout, quit..."
	return
fi

if [ $operation == "dump" ]; then	
	#dump

		dd if=/dev/mmcblk0boot0 of=/sdcard/boot1.bin
		if [ $? -eq 0 ]; then
			echo "Dump boot 1 area success!"
		else
			echo "Dump boot 1 area failed!"
		fi

		dd if=/dev/mmcblk0boot1 of=/sdcard/boot2.bin
		if [ $? -eq 0 ]; then
			echo "Dump boot 2 area success!"
		else
			echo "Dump boot 2 area failed!"
		fi
		
        echo "Dumping user area, please wait..."        
		dd if=/dev/mmcblk0 of=/sdcard/user.bin bs=64k
		if [ $? -eq 0 ]; then
			echo "Dump user area success!"
		else
			echo "Dump user area failed!"
		fi
	
elif [ $operation == "restore" ]; then

	#restore
		echo 0 > /sys/block/mmcblk0boot0/force_ro 
		dd if=/sdcard/boot1.bin of=/dev/mmcblk0boot0
		if [ $? -eq 0 ]; then
			echo "Restore boot 1 area success!"
		else
			echo "Restore boot 1 area failed!"
		fi  		

		echo 0 > /sys/block/mmcblk0boot1/force_ro 
		dd if=/sdcard/boot2.bin of=/dev/mmcblk0boot1
		if [ $? -eq 0 ]; then
			echo "Restore boot 2 area success!"
		else
			echo "Restore boot 2 area failed!"
		fi

		#first uncompress the emmc partition, then write to emmc
	        echo "Restoring user area, please wait..."        
		dd if=/sdcard/user.bin of=/dev/mmcblk0 bs=64k
		if [ $? -eq 0 ]; then
			echo "Restore user area success!"
		else
			echo "Restore user area failed!"
		fi			

elif [ $operation == "eupm" ]; then

	#eupm
		echo "Starting dump upm file"
		upm_tool
		echo "upm file dump finished !"

else
	echo "Wrong operation!"
fi

#Determine all data write to destination
sync	

umount /sdcard

# send signal to inform init process
#kill -SIGUSR1 1
