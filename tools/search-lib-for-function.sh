#!/usr/bin/env bash

# Reads the folder in $1 and looks for a specific function $2 in libs
while read libname; do
	echo "$libname = $(arm-linux-gnueabihf-nm -D $libname | grep -c $2)";
done< <(ls $1/*.so) | grep -v "= 0"
