# bootlogoEXE

This is the first custom binary that is called, and it's only job is to turn on the panel and it's backlight, and display the logo, not from a file, but directly taken from the disk (not even a partition, the **disk**), and written in the memory using `/dev/mem` that's brutal, but apparently, it works.

The logo's JPG btw, and i didn't managed to retreive it for some reason...

You can't remove it when using sitatvservice because sitatv assume that the panel is already on, so it would just show nothing. i will make sure the screen is turned on and delete it, on my side.
