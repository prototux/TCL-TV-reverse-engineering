# Howto have SSH on your TV

## Get the binaries
Dowload the dropbear and dropbearkey binaries,
i've used a http server and wget for that

## Generate the keys
``` bash
mount -o remount,rw / # To remount / read-write
mkdir /etc/dropbear
dropbearkey -t dss -f /etc/dropbear/dropbear_dss_host_key
dropbearkey -t rsa -f /etc/dropbear/dropbear_rsa_host_key
```

## Add root user
``` bash
touch /etc/passwd
touch /etc/group
adduser root -u 0 -h /
```

## Install dropbear in /bin + edit /etc/postinit.sh and /etc/profile
### /etc/postinit.sh
```
echo "/bin/dropbear" >> /etc/postinit.sh
```
### /etc/profile
```
cat > /etc/profile << EOF
if [[ "`tty`" != "/dev/ttyp0" ]]; then
/etc/postinit.sh &

cd /applications/tv_bin
source run.sh &
fi
EOF
```

## Reboot and profit
