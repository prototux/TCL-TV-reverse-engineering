
# Program:
# How To Simulate Key For QA Test.
# History:
# 2014/07/28 Abner First release
mkfifo /mtd_apdat/irsim

while true
do
#PR+
echo -ne "\xff\xf0\x46\xb6" >  /mtd_apdat/irsim
#delay 10s
sleep 10

#PR-
echo -ne "\xff\xf0\x47\xb7" >  /mtd_apdat/irsim
#delay 10s
sleep 10

done
