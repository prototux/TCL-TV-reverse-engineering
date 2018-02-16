// Main file...

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv, char **envp)
{
	// Maybe not a char...
	char *var_1c;
	char *var_18;

	// I have no idea what that is supposed to do...
	// Apparently, it returns directly if argument 4 is equal a 1...
	fpi_poweron_timer_get(0, "tvh main start", envp);

	// Init TVH and UTI, whatever what these means
	tvh_service_init();
	uti_service_init();

	// What is that "config path table"?
	int var2 = tvh_get_config_path_table(&var_1c);
	set_config_path_table(var_1c, var2);

	// Init TVH database
	load_ini_file(0xffff, 0);
	tvh_database_init();
	fpi_poweron_timer_get(0x3e8, "config_db_init", envp);

	// Init FPP Driver (from libfpp, that seems to be the low level interface)
	fpi_init(&var_18);
	fpi_poweron_timer_get(0x7d0, "fpp driver init", envp);

	// Mmmh, that could be interesting...
	tvh_service_debug_func_set_init();
	fpi_poweron_timer_get(0x7d1, "debug init", envp);

	// Notify that it has init?
	fpi_notifys_init(0x64511);
	tvh_notifys_init(0x64799);
	tvh_notifyx_init(0x64391);

	// Init the model of the TV...
	// is TVH meaning "TV Hardware"?
	tvh_model_init(argc, argv);
	fpi_poweron_timer_get(0xbb8, "after module init");

	// I have no idea what that's supposed to do
	// But i guess that is why the TV reboots if you kill sitatvservice
	while (true)
	{
		while(tvh_service_get_comunicate_sucess_status())
		{
			tvh_service_process_event();
		}
		os_msleep(20);
	}

	// Shouldn't ever be called!
	return EXIT_SUCCESS;
}
