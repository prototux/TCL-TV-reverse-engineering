#!/bin/sh

IFNAME=$1
CMD=$2

if [ "$CMD" = "CONNECTED" ]; then
    SSID=`wpa_cli -i$IFNAME status | grep ^ssid= | cut -f2- -d=`
    # configure network, signal DHCP client, etc.
    echo "CTRL-EVENT-CONNECTED" "$SSID" > /data/wifi_monitor_fifo
fi

if [ "$CMD" = "DISCONNECTED" ]; then
    # remove network configuration, if needed
    SSID=
    echo "CTRL-EVENT-DISCONNECTED" > /data/wifi_monitor_fifo
fi
