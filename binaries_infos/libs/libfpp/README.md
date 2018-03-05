# libfpp

This is the "low level" library used by sitatvservice, and it is even bigger than the service!

It is splitted into 3 layers:
* the `fpp_` layer, called "application" is the high level layer, it is actually the API of libfpp
* the `DEV_` and `PLAT_` layer, "devices" and "platform" respectively, are the middle level layer
* the `DRV_` layer is the low level layer, it talk to the different devices using i2c/uart/etc.

Some notes about libfpp:
* It doesn't have debug symbols unlike sitatvservice and libsitatv.
* It does a lot of things for "only a library", it is 12MB and around 10 thounsand functionss
* There's a very handy debug menu that you can call using a specific function, the tree is documented in a separate txt
* It seems to handle the PQ (Picture Quality) part, and pretty much everything video related.
* The function names and role seems a bit inconsistent, leading to some confusion about who does what.
* There's also a lot of debug logs, if you write a software that uses libfpp, you should do some trick with stdout to avoir having an avalanche of completly inconsistent logs

(to be completed..)
