# tcl-tv-re
Reverse engineering of a TCL/Thomson TV firmware

## Context
I bought a TCL u55s6908 tv to use as a monitor for my "steambox", and wanted to add it in my home automation system
If this TV supports upnp remote control (as shown here: https://github.com/Zigazou/opentclremote), it cannot be started from the network,
as both the wifi chip and the eth interface are stopped when you put the tv to sleep

Also, the "Smart TV 2" interface is slow and useless as fuck, so i wanted to see if there's a way to both enable at least WakeOnLan,
and if possible also disable that piece of crap "Smart TV 2", i don't need minesweeper and sticky notes on my steambox.

## Booting, uboot console
There's an obvious console port near the HDMI interfaces, from the left (where the HDMI port are): GND, RX, TX, probably VCC (didn't tried)
They're using TTL (5V) levels, so any UART-to-USB interface will do, the port is using 115200 8n1

You can interrupt the boot process and go to the uboot console by pressing... smashing enter while booting. you'll get the same commands that are documented here.

The boot process seems quite obscure from there, it doesn't seems to load the linux kernel/boot.img directly, instead, it seems to load "SECOS" (ECOS apparently)
that then seems to load the boot.img, also, the boot.img comes straight from android (there's even AOSP headers in config files!) but the system isn't android,
even if there's a /system and a /data, it's a kinda homebrew, very mac gyver-ish busybox-based linux.

My guess there, given the boot logs, is that it boot ECOS to initialize some kind of cryptography for the DRM before booting linux, apparently for netflix.

There's some mystery also about where does it boot, as there's 3 storage devices, /dev/mmblk0 (the eMMC) and also /dev/mmcblk0boot0 & /dev/mmcblk0boot1 (wtf?)
also, the two first partitions of the eMMC seems to be ecos/booting related, it seems to have quite some obfuscation here.

Also, the boot.img and recovery.img's ramdisks are the same, there's no difference other than partition size (and then the size in the config file).
Apparently, it uses android's init=/init system to boot the normal OS, but also boot using busybox's init=/sbin/init that uses the /system/rc.local init file
that seems to only handle the dump/recovery parts (using dd), that's what happens when you use tcl\_dump and tcl\_restore commands.

The os then boots normally using busybox's init system on 13th partition of eMMC, the rc.local call /bin/bootlogoEXE, add custom devices, mounts the disks,
then the /etc/profile run /etc/postinit.sh in background while cd'ing into /applications/tv_bin and running ./run.sh.
This last file seems to handle all the TV interface + upnp server.

## TV Interface
The TV UI is under /applications/webkit-resource/ui, it's apparently all web-based, using html/css/js+jquery. there seems to have some custom js objects that
are injected to be able to run commands and change settings such as network interfaces. i still don't know if it's operaTV or hbbtv_browser that runs it.

My current guess is that they started the dev on OperaTV, but for some reason stopped using it and started using hbbtv_browser instead, as i can't find where
OperaTV is lanched from. there's also a lot (And i mean a **lot** of stuff done especially for netflix, from the remote control to the boot process, with
also /etc/rc.local scripts that tries to get network as soon as possible to please netflix. apparently, the lower-end tv (such as the S69 series) are
basically "netflix TVs" that also do TV and youtube as side-features, and the higher end TV (s79?) are runny androidTV, but they're using the same SoC
and probably the same boot process, only the ram quantity (512MB in my TV, i've seen 2GB on Android TVs) and the final system changes.

## Hardware
The TV is using a Novatek SoC (the NT72668) along with 512MB of RAM and 4GB of eMMC, the CPU is a quadcore, 1GHz ARMV7. also, didn't found clue about any i2c memory.
there's also a separate board that does the interface between the SoC and the screen, so my guess is that the SoC is outputting LVDS,
and the other chip only does the LVDS-screen interface. also, there's some other chips, but didn't went to far on this.
Also, the TV and satellite seems to be self-contained modules, apparently using i2c or SPI, didn't digged into this, i've just desoldered them directly.
It's rare, but the PCB seems quite well designed, didn't saw any obvious planned obsolescence features on it, like putting heatsinks just behind capacitors.

## Remote shell
This is the first step i want to achieve to be able to see what's happenning inside the TV, unfortunately, i didn't managed to have one yet, tried to use
busybox-telnetd, but it didn't worked, apparently, it cannot spawn a shell. i'm still trying some stuff there.


## AndroidTV
From what i've seen so far, that doesn't seems so far fetched to think that it's possible to put AndroidTV on it, as the SoC's tools were apparently designed for it
and that higher end models that use the exact same SoC are running it. i guess that the experience may not be that awesome with only 512meg or ram, though.

## WakeOnLan
I have to admit, my hopes are close to none, now, apparently, you don't really put the tv to sleep, you completly shutdown it, it goes back to uboot,
so unless i can compile my own working uboot with WoL patch for this thing, which is as feasible as getting bogosort to actually sort, i wouldn't put any hope in it.

## Exploitation
Given the quality of the code/scripts i've seen so far, the age of the software (2013) and the overall system, i would guess that it isn't hard at all to exploit this,
especially using the browser. I didn't tried it, though, my focus is to have a remote shell and add automation features, not do a security audit of the device.

## Shell, SSH
I finally managed to get a shell on the serial port! the magic command being `env set quiet n` before `boot` in the uboot shell. there's the full boot log attached in bootlog.txt

I've also managed to port dropbear to that TV, the binaries and instructions are in ./ssh
