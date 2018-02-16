// FPI poweron...

#include <stdlib.h>
#include <stdio.h>

int b_power_on_finished = 0;
int temp_poweron_timer = 0;
int total_poweron_timer = 0;
int power_time_index_count = 0;
char *module_power_time;

// str is an unused variable....
void fpi_poweron_timer_get(int something, char *str)
{
	if (b_power_on_finished)
		return;

	if (!something)
	{
		int tickcount = os_get_tickcount();
		temp_poweron_timer = tickcount;
		total_poweron_timer = tickcount;
		printf("@@@###tvh start :%d\n", tickcount);
		// second paramter was "something", which is always zero here...
		memset(module_power_time, 0, 0x640);
	}
	else
	{
		temp_poweron_timer = os_get_tickcount();
		if (something == 0xffffffff)
		{
			int poweron_time = temp_poweron_timer - total_poweron_timer;
			b_power_on_finished = 1
			printf("\33[41;30m@@@###power_on_total_time:%d\33[0m\n", poweron_time);
		}

		// I have no idea what that is for or it's use...
		if (power_time_index_count < 0xc5)
			power_time_index_count++
	}
}
