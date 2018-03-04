#! /bin/sh
#SEE parameter in /etc/mdev.conf
#echo "[1]$1">>/tmp/error1.txt
#echo "[2]$2">>/tmp/error1.txt
#echo "[3]$3">>/tmp/error1.txt
PATH_PATTERN="/block/sd"

MDEV=$1
ACTION=$2
DEVPATH=$3
SUBSYSTEM=$4
MAJOR=$5
MINOR=$6
DEVTYPE=$7
SEQNUM=$8

if [ "$1" == "" ]; then
	exit 1
fi

#device path parse 
DPATH=${DEVPATH#*${PATH_PATTERN}*}
DEVPATH=$PATH_PATTERN$DPATH


## YMK Add for re-entrace sda of sda1
echo $1 | grep "sd[a-zA-Z][0-9]\+" && ISSDA=0 || ISSDA=1
if [ $ISSDA == 1 ]; then
	ls /sys/block/$1/ | grep "sd[a-zA-Z][0-9]\+" && exit 1
#	exit 1
fi
mounted=`mount | grep $1 | cut -d ' ' -f 3`

#get device label
LABEL=`blkid /dev/$MDEV`
LABEL=${LABEL#*LABEL=\"*}
LABEL=${LABEL%\" *}


# mounted, assume we umount
if [ $2 == "remove" ] || [ $2 == "change" ]; then
	#echo "R$mounted, 1111111" >>/tmp/error1.txt
	if ! umount "/dev/$1"; then
		if ! umount -l "/dev/$1"; then
			#echo "F/dev/$1, 77777" > /dev/console
			exit 1
		fi
	fi
	if ! rmdir "/media/$1"; then
		exit 1
	fi

	#echo usb stat info to /nvtpipe
	echo -e "remove@$DEVPATH ACTION=umount DEVPATH=$DEVPATH SUBSYSTEM=$SUBSYSTEM MAJOR=$MAJOR MINOR=$MINOR DEVNAME=$MDEV DEVTYPE=$DEVTYPE SEQNUM=$SEQNUM MOUNTPATH=/media/$1" >/tmp/nvtpipe/usbstat
	# not mounted, lets mount under /media
fi

if [ $2 == "add" ] || [ $2 == "change" ]; then
	dir=$1
  if [ "$2" == "add" ]; then
    if [ -b "/dev/$1" ]; then
      echo "dev/$1 is exist" >>/tmp/error1.txt
    else
      echo "dev/$1 is not exist" >>/tmp/error1.txt
      echo "autoscript mknod /dev/$1 " > /dev/console 
      mknod /dev/$1 b $5 $6
    fi
  fi

#	if [ -z "$3" ];then
#		dir=$1
#	else
#		dir=$3
#	fi
if [ $2 == "NULL" ];then
	#echo "mkdir -p /media/$dir" > /dev/console	

	if ! mkdir -p "/media/$dir"; then
		echo "mkdir fail" 2>& 1 >>/tmp/error1.txt	
		exit 1
	fi

  	if ! mount -t ext4 "/dev/$1" "/media/$dir"; then
		if ! mount -t ntfs "/dev/$1" "/media/$dir"; then
    			if ! mount -t vfat "/dev/$1" "/media/$dir"; then
      				echo "Mounted error!" > /dev/console      				
				# failed to mount, clean up mountpoint
				if ! rmdir "/media/$dir"; then
					echo "rmdir /media/$dir" > /dev/console			
					exit 1
				fi
			exit 1
			fi
		fi
	fi
fi	
	#echo usb stat info to /nvtpipe
	echo -e "add@$DEVPATH ACTION=add DEVPATH=$DEVPATH SUBSYSTEM=$SUBSYSTEM MAJOR=$MAJOR MINOR=$MINOR DEVNAME=$MDEV DEVTYPE=$DEVTYPE SEQNUM=$SEQNUM MOUNTPATH=/media/$dir" >/tmp/nvtpipe/usbstat &
	#echo "mount /media/$dir" > /dev/console
fi

exit 0
