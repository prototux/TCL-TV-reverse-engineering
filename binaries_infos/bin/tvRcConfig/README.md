# tvRcConfig

This seems to do the remote control config for this TV.
It seems to read `/impdat/project_id.bin` to get a "project id", read `/applications/tclconfig/remoter/rc.ini`, and write the content of the line containing the project id (that seems to be the remote types) to `/sys/devices/platform/ntkvm/vmntk`, the ntkvm driver. the funny thing being that all project ids have the same remote, so this step is pretty useless...

Anyway, i don't care about this binary as well, as i don't intend to use a remote control.
