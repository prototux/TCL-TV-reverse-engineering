// UTI config (whatever "UTI" means)

#include <stdlib.h>
#include <stdio.h>

int /* (???) */ g_fconfig_file;

int32_t uti_config_init()
{
	// Get config file from env
	char *config_file = getenv("F1_CONFIG");

	// Number of tries to load the config file
	int tries = 1;

	if (log_is_output())
	{
		printf("*f1 config*the config=%s\n", config_file);
	}

	if (log_is_outfile())
	{
		fpi_log_printf("*f1 config*the config=%s\n", config_file);
	}

	// We can't load the config file if F1_CONFIG isn't defined
	if (!config_file)
		return 1;

	while (tries != 11)
	{

		// Load ini file
		g_fconfig_file = iniparser_load(config_file);

		// Load config from ini
		if (g_fconfig_file)
		{
			// I don't know what it's used for but...
			return 0;
		}

		// We couldn't open the config file
		if (log_is_output())
		{
			printf("CON'T OPEN ENV IS F1_CONFIG =%s ,NO=%d", config_file, tries);
		}

		if (log_is_outfile())
		{
			fpi_log_printf("CON'T OPEN ENV IS F1_CONFIG =%s ,NO=%d", config_file, tries);
		}

		tries++;
		usleep(0x64)
	}
	return 1;
}
