#include <stdlib.h>
#include <stdio.h>

int service_socket_init_id = 0;

int tvh_service_init()
{
	char var_1c[20];
	service_socket_init_id = os_thread_create(tvh_service_socket, 0, 0, 0x32, "socket_server_init");
	if (service_socket_init_id == 0xffffffff)
	{
		if (log_is_output())
		{
			puts("socket server init task create error\n");
		}
		if (log_is_outfile())
		{
			fpi_log_printf("socket server init task create error\n");
		}
		return;
	}

	fpi_common_get_sita_version(&var_1c, 20);
	fpi_common_get_sita_build(&var_1c, 20);
	return 1;
}
