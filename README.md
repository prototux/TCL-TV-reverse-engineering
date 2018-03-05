# TCL-TV-RE

Reverse engineering of a TCL TV firmware

## Context
I bought a TCL U55S6908 to use as a monitor for my steambox/htpc, and wanted to add it to my home automation system, so i can start it and set some settings over the network.

If this TV supports UPNP remote control, the bootloader (uboot with secos) doesn't support WakeOnLan, also, the remote control is pretty basic, only repeating the remote control. i wanted something better.

Also, the "Smart TV 2" system is slow and useless, if i can get rid of it, that would be a nice thing, i don't need a minesweeper game on my TV.

Below is a general description of the main parts of the TV and some possibilities/open questions at the end. You'll find more detailed documentation in the other files.

## Hardware
The TV is using a Novatek SoC (the NT72668) along with 512MB of RAM and 4GB of eMMC, the CPU is a quadcore, 1GHz ARMV7hf.

The TV and satellite receivers seems to be self-contained module, and pretty much everything else seems to be handled directly by the SoC (novatek makes DTV SoC, so it's not far fetched to assume that the NT72668 contains a scaler and other TV/LCD related features). I didn't went too far on the TV side, i just desoldered the modules.

TCL also makes very similar TVs with the same SoC and more RAM (2GB instead of 512M) and with AndroidTV or RokuTV. i guess the hardware is pretty similar otherwise.

## Booting process
On the PCB, there's an obvious UART port near the HDMI interface: (from the left) GND, RX, TX, VCC (didn't measured VCC, didn't needed it). They're using TTL levels, so any UART-to-USB interface will do. the port is configured with 115200 8n1. (the same port seems to be available in the USB2 port, that also contains USB3 additional pads, the port is also marked as being USB2/Console)

You can interrupt the boot process and get the uboot console by press... smashing enter while booting. (the commands are documented here also)

The boot process seems to be quite "obscure" (read: obfuscated) from there. it doesn't seems to load the linux kernel (in boot.img) directly, instead, it loads "secos" ("secure os") that init what seems to be a netflix key and then goes to the boot.img, the boot.img (and recovery.img they're the same) are the ones from AOSP.

There's 2 ways to start the boot.img, depending on the initd you chose, one being the "normal" boot process that load the main linux, and the other one have a debug feature that basically dump (or restore) the whole eMMC to a USB drive.

The system that gets loaded isn't android, even if the boot.img is from AOSP, and with /system and /data; it's actually a very minimalistic busybox-based linux (3.x kernel)

From there, the /etc/rc.local load the partitions and do some basic init. The /etc/profile call /etc/postinit.sh (that  load the drivers), and then cd to /applications/tv_bin and exec run.sh

The run.sh file prepare the environement for the sitatvservice, it also loads some mali/directfb related modules. it runs the tvRcConfig, sitatvservice, event_manager, mediaserver and ipepg_server.

## General organisation
The main binary here is sitatvservice, that manages basically everything. the other binaries are mostly sidekicks.

The main interface is web-based, running on webkit (that renders using directfb, and is connected to sitatvservice using an library). OperaTV is also used, but only when it "starts the smart tv" (all the "smart tv apps" are running on opera, with the exception of netflix, and starting the smart tv menu actually starts OperaTV). there's also an HBBTV-Browser, that is called when you press the "red key" for interactive TV.

The TV seems very netflix-compliant, as many thing are setup only to plase the netflix binary, from the custom bootloader to specific hacks in the rc.local. that binary seems otherwise a pretty standard netflix binary (called "gibbon" at netflix). my guess is that the TV is mostly a netflix and generic TV, OperaTV is here to add some side features (and youtube), but their "high end" is actually their AndroidTV models, that also seems to use the sitatvservice binary at it's core.

Sitatvservice uses a library to interface with the hardware, called libfpp.so; this library seems to handle 3 layers of abstraction. I've decided to use libfpp for now with a possible goal to reimplement libfpp directly in the future.

Libfpp.so have several "namespaces", groups of functions that starts with the same name, and the debug menu gives an hint about what they do:
* DRV_ is the low-level layer, talking to the devices using i2c and UART
* DEV_* and PLAT seems to handle the middle layer, DEV is about the devices (obivous isn't it?) and PLAT is about the general platform (the system, the picture quality part, etc)
* fpp is the "apparent" layer, that's the one used by sitatvservice, it provide functions to handle things more easily. they call the DEV and PLAT functions.

Sitatvservice also have this sandwich of abstraction layers organization, with fpi functions being the ones that talk to the fpp functions, and some services running on top of these.

## Possibilities

### Root/remote shell
This is done already, the first thing i did was to install dropbear to be able to explore the device while running and do some tests. there's no real protection on the shell, so you just get a root shell, plain and simple.

To get a local shell from the serial port/uboot console, you can do `env set quiet n` before running `boot`

### AndroidTV
I don't know if AndroidTV supports running on only 512MB or RAM, and i didn't searched about it, my goal is to remove the bloat from my TV, not to add even more bloat. the higher end models (S79 series) are running AndroidTV but with 2GB or RAM.

### WakeOnLAN
My hopes are close to inexistant about this, as i don't have the source code of the uboot, and given the level of obfuscation, i don't expect to be able to make a compatible uboot that have WOL built in, albeit with the netflix "secos" removed.

### 3D and other controls
The 3D seems to be done with a small additional board (USB bluetooth maybe?). apart from this board, i don't see anything beside the config file blocking the TV from being 3d compatible, i didn't looked more into it, as i don't care about 3D. there's maybe some other controls that are available using libfpp that aren't in the interface, such as PictureQuality modes. i dind't found really big "hidden features for no reason" yet.

### Security and exploitation
The security is probably not very high on this TV, at minimum, you can plug a device that uses the console port and reboot the TV to gain remote root access to the device. As sitatvservice have plenty of debug features, and that it listen on the network for some things, i would guess that they may be a way to run remote commands as root from a brand new TV using these features. I may dig into this to make an installer for my binary and dropbear.

For the "can the CIA do weeping angel on my TV" question, the answer is definitively yes, there's the same "fake off" possibilities (that i actually use in my replacement of sitatvservice). but there's no camera and it doesn't seems to have any microphone.

Basically, i wouldn't call this TV "secure" if you're using the OperaTV browser (quite old) or didn't replaced the sitatvservice binary that listen to the network (and possibly other binaries as well) with a custom binary. and this TV is defintiively not secure against physical tampering given the console port is accessible even without opening the TV.

## Thanks and credits
Thanks to KailoKyra, Jean Thomas and Gab for their help about reverse engineering and embedded ARM platforms.

Tools used in this effort: binwalk, dd, binary ninja, retdec, gdb, dropbear, picocom, strace, caffein, probably some i forgot.

References:
* https://github.com/21sec/binder (contains a part of sitatvservice source code, namely the fpi_linein.c and the main())
* https://github.com/jamesyan84/mt5507_android_4.4/tree/master/kk-4.x/vendor/tcl (contains sitatvservice/lbifpp references on android 4.4, on a mediatek SoC, hinting that the sitatvservice/libfpp tandem is used in most of their products)
* https://github.com/Zigazou/opentclremote (a project that send keys using UPNP to a TCL TV with SmartTV2 OS)
