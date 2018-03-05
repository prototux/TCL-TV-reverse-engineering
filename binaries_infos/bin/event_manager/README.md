# Event manager

This seems to be the binary that gets the IR remote events, and dispatch it to the correct application depending on which one is running. netflix seems here to have a special place, like the rest of the system. it's config file is `/applications/tv_bin/task_manager.rc` (the path hardcoded in the binary is `./task_manager.rc`)

It's config file hints that it is the thing that start the web-ui, and that it also run T-DIAL (for opera), but the chwebkit seems to be also launched in sitatvservice, weird.

Anyway, it's not an essential binary as well, so i'll remove it as well.
