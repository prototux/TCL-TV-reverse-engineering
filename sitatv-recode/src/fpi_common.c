#include <stdlib.h>
#include <stdio.h>

static char *month_names = "JanFebMarAprMayJunJulAugSepOctNovDec";

int fpi_common_get_sita_version(char *str, int len)
{
	// I guess that if str should be checked before the memset
	// but it was like that in the binary, gcc optim?
	str = memset(str, 0, len);
	if (!str)
		return;

	// Doesn't seems very useful...
	if (log_is_output())
		printf("fpi_common_get_sita_version,len=%d\n", len);
	if (log_is_outfile())
		fpi_log_printf("fpi_common_get_sita_version,len=%s\n", len);

	int day, year;
	char month[4] = {0,0,0,0};
	int date = 1611030; // it is calculated from the text date in binary

	// This is beyond insanity, i guess the string was a define before
	sscanf("Nov  3 2016", "%s %d %d", &month, &day, &year);
	int monthpos = (strstr(month_names, &month)-month_names)/3;

	if (log_is_output())
		printf("year=%d,month=%d,day=%d,date=%d \n", yead, monthpos, day, date);
	if (log_is_outfile())
		fpi_log_printf("year=%d,month=%d,day=%d,date=%d \n", yead, monthpos, day, date);

	if (log_is_output())
		printf("time=%d(%s)\n", date, "Nov  3 2016");
	if (log_is_outfile())
		fpi_log_ printf("time=%d(%s)\n", date, "Nov  3 2016");

	// Isn't that something wrong?!?
	snprintf(str, 11, "%s%6d%d", "V8-", date);

	int os = uti_config_get_os();

	if (os == 1)
	{
		snprintf(str+10, 9, "-MF2V%s", "100");
		if (log_is_output())
			printf("version 3=%s\n",str);
		if (log_is_outfile())
			fpi_log_printf("version 3=%s\n",str);
	}
	else if (os == 2)
	{
		snprintf(str+10, 9, "-MF1V%s", "100");
		if (log_is_output())
			printf("version 2=%s\n",str);
		if (log_is_outfile())
			fpi_log_printf("version 2=%s\n",str);
	}
	else
	{
		if (log_is_output())
			printf("The OS is null, version have set error");
		if (log_is_outfile())
			printf("The OS is null, version have set error");
	}

	if (log_is_output())
		printf("sita version = %s\n", str);
	if (log_is_outfile())
		fpi_log_printf("sita version = %s\n", str);

	return 1;
}

int fpi_common_get_sita_build(char *str, int len)
{
	if (!str)
		return;

	if (log_is_output())
		printf("app_common_sita_get_build,len=%d", len);
	if (log_is_outfile())
		printf("app_common_sita_get_build,len=%d", len);

	str = "9665\0";
	if (log_is_output())
		printf("sita build=%s\n", str);
	if (log_is_outfile())
		fpi_log_printf("sita build=%s\n", str);
}
