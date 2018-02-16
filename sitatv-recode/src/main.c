// Main file...

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv, char **envp)
{
	char *var_1c;

	//I have no idea what that is supposed to do...
	fpi_poweron_time_get(0, "tvh main start", wut, wut);

	// Init TVH and UTI, whatever what these means
	tvh_service_init();
	uti_service_init();

	// What is that "config path table"?
	tvh_get_config_path_table(&var_1c);
	set_config_path_table(var_1c);

	// Init TVH database
	load_ini_file(wut, wut);
	tvh_database_init();
	fpi_poweron_time_get(wut, "config_db_init", wut, wut);

	// Init FPP Driver (from libfpp, that seems to be the low level interface)
	fpi_init();
	fpi_poweron_timer_get("fpp driver init")

	// Mmmh, that could be interesting...
	tvh_service_debug_func_set_init();
	fpi_poweron_timer_get(wut, "debug init", wut, wut);

	// Notify that it has init?
	fpi_notifys_init(wut);
	tvh_notifys_init(wut);
	tvh_notifyx_init(wut);

	// Init the model of the TV...
	// is TVH meaning "TV Hardware"?
	tvh_model_init(wut, wut);
	fpi_poweron_timer_get(wut, "after module init", wut, wut);

	// I have no idea what that's supposed to do
	// But i guess that is why the TV reboots if you kill sitatvservice
	while (true)
	{
		while(tvh_service_get_comunicate_sucess_status())
		{
			tvh_service_process_event();
		}
		os_msleep(0x14);
	}


	// Shouldn't ever be called!
	return EXIT_SUCCESS;
}
