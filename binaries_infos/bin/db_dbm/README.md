# db and dbm

These are two debug binaries that calls sitatvservice using a pipe file, `/data/com_fifo` for db and `/data/com_fifo_mid` for dbm. You can do some stuff using db, dbm doesn't seems to work, even though both source code is exactly the same except for the file they open.

For some reason, sitatvservice seems to call these sometime using system() even if all they do is... call sitatvservice.

As these are debug binaries that doesn't seems to be used for anything, i'll remove them.
