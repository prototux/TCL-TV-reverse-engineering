#!/usr/bin/env bash

echo -e "#ifndef __FPP_H__\n#define __FPP_H__" > ./fpp.h
while read category; do
	upper_category=$(echo "$category" | tr '[:lower:]' '[:upper:]')

	# Write include protection
	echo -e "/**\n * @file fpp_${category}.h\n * fpp_${category} is not defined yet\n */" > ./fpp_${category}.h
	echo "#ifndef __FPP_${upper_category}_H__" >> ./fpp_${category}.h
	echo -e "#define __FPP_${upper_category}_H__\n" >> ./fpp_${category}.h

	while read function; do
		echo -e "/**\n * ${function} is not documented yet.\n */" >> ./fpp_${category}.h
		echo -e "void ${function}(void);\n" >> ./fpp_${category}.h
	done< <(cat ../fpp_functions.txt | grep "fpp_$category")

	# Finish include protection
	echo "#endif /* __FPP_${upper_category}_H__ */" >> ./fpp_${category}.h
	# Include the file to fpp.h
	echo "#include \"fpp_${category}.h\"" >> ./fpp.h
done< <(cat ../fpp_functions.txt | cut -d'_' -f2 | sort | uniq)
echo "#endif /* __FPP_H__ */" >> ./fpp.h
