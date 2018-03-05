# Linux kernel modules

I've only documented the 3 custom ones that are used in the TV:
* kteeclient: the trustzone/secos module for netflix
* ntkvm: for the IR remote
* ntkdriver: for everything else

There's also other modules:

* mali.ko and ump.ko for the mali GPU
* videobuf2, uvcvideo and gspca_main modules for v4l
* hid, uhid, hid-generic, some hid modules
* ehci-hcd, xhci-hcd, usbcore, usbhid, usb-common, some usb modules
* btusb and bthid if you have a bluetooth module
* 8192eu and 8812eu, realtek wifi modules
* fusion, from directfb

The kteeclient and ntkvm driver seems kinda optional, the ntkdriver is probably not, sadly, there's no source code for these drivers. if you want to make a linux kernel, you'll have to deal with at least ntkdriver, fortunately, it isn't that big, with "only" 40 functions, so maybe a reverse engineering can be done of this one. the ntkvm driver seems very small at 9 functions, and can probably be reverse engineered quite easily.
