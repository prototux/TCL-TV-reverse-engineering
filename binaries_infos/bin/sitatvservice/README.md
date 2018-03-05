# sitatvservice

Sitatvservice, there's much to say about it actually, given that this monster binary is 10MB large!

The devs that worked on this TV seems to make a lot of very small binaries that doesn't do much to the point that you can replace them with a bash one-liner, but they did the exact opposite for sitatvservice, it seems to handle almost everything, from the display to the time.

It start by reading the file pointed by `F1_CONFIG`, which is `/applications/tv_bin/run_config`. That file only contains some basic config and... a list of the other config files/folders. These are managed by the `uti_` functions, in a kind of get-set fashion.

Then it start the `tvh_service` (i guess "tvh" means "tv hardware"), load the INI files, and finally init the libfpp.
 (in reality, the main() also does other things, but they aren't very interesting)

The actual code of this binary is way too big to be described in a README, so i'll jump directly to the interesting part:

It only calls a subset of the `fpp_` functions, with almost half for the TV related features (demodulation, MHEG/HBBTV, CI+, PVR, etc), as i dont' care about TV i didn't worked on this half. The other half is more interesting, managing things such as input, video settings, and the system/power. It also contain it's own debug menu, which is very useful when analyzed in the disassembler, because it give quite simple example of how to call `fpp_` functions, i don't know how to enter this binary, if you can even enter it without editing the binary (my guess from now is that debugging was enabled as a define).

There's a lot of functions in it, but most are in several "namespaces":
* `fpi_`: some "internal lib" (that's often these `fpi_` that call the `fpp_` functions).
* `tvh_`: the main "service" in sitatvservice
* `uti_`: the get-set of the `F1_CONFIG`
* `user_timer_` (never saw it used in the functions i've studied)
* `os_`, `unix`: basically wrappers for POSIX features, such as threads/mutexes/semaphores
* `bsp_`: related to some specific TV and satellite tuners
* `test_`: test functions, quite handy for many things
* `tvhsignal_`, `tvhsignal_`, `tvhsipsi_`, `tvhdtv_`: seems to be related to TV-specific features
* `tvhmgr_`: seems to manage the TVH service
* `tvhmsg_`: message queue for TVH
* `main_`: init functions
* `service_`: they are just wrapper for `fpi_` functions, i've never saw them being used...
* `ttx_`, `TT_`: teletext/subtitles features
* `sys_`: basic functions such as time conversion
* `iniparser_`: as the name suggest, INI file parser
* `dictionary_`: seems to be a implementation of a hashmap/dict
* `matrix_ringbuf_`: an implementation of a ring buffer
* `sita_`: apparently some kind of global variables management
* `subtitle_`: subtitle functions
* `sbt_stream_`: no idea
* `graphic_`: helper functions for directfb
* `parse_`: unicode/utf8 functions
* `ci_`, `CI_`, `TDAL_`: CI+ functions (there's a lot of code only for CI+!)
* `hc_`: TV-related, no idea
* `GLUE4TESTS_`: not even a good name for a left4dead level
* `TestUnitary`: what, they do TDD on this thing?
* `DM_`: no idea, apparently "store crendentials"
* `TB_`, `CITEST_`, `AVtests_`, `dt_`: some more tests, apparently for CI+
* `TestManager_*`: seems like the manager for the debug menu
* `cb`: callbacks for various things
* `TestCase_`: apparently some tests for the `os_` functions
* `UT_`: apparently talks to "CICAM"
* `BNCTX_`, `BNOPE_`, `WORDS_`: apparently some internal/statically linked libs
* `ST_`: apparently another TV specific thing
* `mplayer_`, `tcl_mplayer`, `media`: media player functions, for VOD
* `DRM`: Apparently low level part for DRMs
* `hbbtv_`, `hbb`, `MH(E)G(5)_`: interative TV functions
* `EIT_DVB_`: another TV thing
* `db_atv`, `db_dtv`, `db_sat`: analog TV/digital TV/sat channel database functions
* `db_` (others than the ones already said): configuration databases (wrappers around SQLite)
* `sqlite3`: well, the sqlite3 lib
* `TKEL`: another TV-related thing
* `FONT_`: font functions
* `TRD_`: text rendering functions

As you can see, there's a lot of stuff, and most of it seems to be only TV related features. there's also `__gnu_` functions, which is probably a GPL violation. The most important ones are the `fpi_` and `tvh_` functions, all the other are basically minor functions (compared to these two). There's apparently a lot of dead code in this binary, so sometime you need to figure out if what you're looking at is useful at all first.

Basically, to reverse engineer this binary, you often have to search for xrefs to the `fpp_` you want to use, and almost every time looking in the `fpi_` layer is enough to get the parameters, but sometime you need to go to the `tvh_` layer as well, or the `test_` layer. Fortunately, the binary contains debug symbols, so you can use GDB's ptype command to get the structures and enums, which is nice. also, there's a lot of debug messages left in the code that often just says `$var_name = %d`, so you can look the parameters of printf and guess which variable have what name.

There's parts of the source code (including the main(), something i found just after i spent some time rewriting the main() from the assembly code...) on github, but only a small subset of the code is available this way. and it makes you want to cry.

This binary seems to be present in most TCL/Thomson products, including their AndroidTV ones, and i guess that it's basically their "kernel" for their TVs, compiled with some conditional compilation for each new TV they make. same goes for libfpp (which seems to be unique for each SoC but with a kinda similar API).

It also apparently feature an API for other applications to use to call sitatvservice, i didn't looked much if it's an HTTP api or some other kind of API, but there's a libsitatv.so used by chwebkit (the webui) and some other binaries (T-DIAL for example) that can be used to call things on sitatvservice. This probably can be used, if it uses some network protocol, to create an app that run commands directly on the TV, remotely. oh and yes, that's probably a big security flaw also.

It also uses a **ton** of shared memory, FDs, and network sockets. the whole thing makes it really hard to understand sometime, and it's way beyond the means of a single man to fully reimplement it, don't expect me to do it.
