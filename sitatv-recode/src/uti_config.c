// UTI config (whatever "UTI" means)

#include <stdlib.h>
#include <stdio.h>

int /* (???) */ g_fconfig_file;

// Config elements
int g_f1_os;
int g_atv_out;
int g_dtv_out;
int g_av_out;
int g_hdmi_out;
int g_vga_out;
int g_cmp_out;
int g_scart_out;
int g_mm_out;
int g_area;
int g_ch_freeze;
int g_atv_scan_step;
int g_disp_snowflake;


// Databases
char *atv_database;
char *dtv_database;
char *factory_database;
char *user_database;
char *epg_database;

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
			// Get OS
			char *os_str = iniparser_getstring(g_fconfig_file, "COMMON:OS", 0);
			if (log_is_output(7,1))
				printf("*f1 config*the OS=%s\n", os_str);
			if (log_is_outfile(7, 1))
				fpi_log_printf("*f1 config*the OS=%s\n", os_str);

			if (os_str)
			{
				if (strcmp(os_str, "LINUX") == 0)
					g_f1_os = 1;
				if (strcmp(os_str, "ANDROID") == 0)
					g_f1_os = 2;
			}
			else
			{
				if (log_is_output(7,1))
					puts("OS_NONE");
				if (log_is_outfile(7,1))
					fpi_log_printf("OS_NONE\n");
				g_f1_os = 0;
			}


			// Get ATV_OUT
			int atv_out = uti_config_getint("COMMON", "ATV_OUT");
			if (atv_out == 0xffffffff)
				g_atv_out = 1;
			else if (atv_out <= 0)
				g_atv_out = atv_out;
			else
				g_atv_out = 1;

			// Get DTV_OUT
			int dtv_out = uti_config_getint("COMMON", "DTV_OUT");
			if (dtv_out == 0xffffffff)
				g_dtv_out = 1;
			else if (dtv_out <= 0)
				g_dtv_out = dtv_out;
			else
				g_dtv_out = 1;


			// Get AV_OUT
			int av_out = uti_config_getint("COMMON", "AV_OUT");
			if (av_out == 0xffffffff)
				g_av_out = 1;
			else if (av_out <= 0)
				g_av_out = av_out;
			else
				g_av_out = 1;

			// Get HDMI_OUT
			int hdmi_out = uti_config_getint("COMMON", "HDMI_OUT");
			if (hdmi_out == 0xffffffff)
				g_hdmi_out = 1;
			else if (hdmi_out <= 0)
				g_hdmi_out = hdmi_out;
			else
				g_hdmi_out = 1;

			// Get VGA_OUT
			int vga_out = uti_config_getint("COMMON", "VGA_OUT");
			if (vga_out == 0xffffffff)
				g_vga_out = 1;
			else if (vga_out <= 0)
				g_vga_out = vga_out;
			else
				g_vga_out = 1;

			// Get CMP_OUT
			int cmp_out = uti_config_getint("COMMON", "CMP_OUT");
			if (cmp_out == 0xffffffff)
				g_cmp_out = 1;
			else if (cmp_out <= 0)
				g_cmp_out = cmp_out;
			else
				g_cmp_out = 1;

			// Get SCART_OUT
			int scart_out = uti_config_getint("COMMON", "SCART_OUT");
			if (scart_out == 0xffffffff)
				g_scart_out = 1;
			else if (scart_out <= 0)
				g_scart_out = scart_out;
			else
				g_scart_out = 1;

			// Get MM_OUT
			int mm_out = uti_config_getint("COMMON", "MM_OUT");
			if (mm_out == 0xffffffff)
				g_mm_out = 1;
			else if (mm_out <= 0)
				g_mm_out = mm_out;
			else
				g_mm_out = 1;

			// Get AREA
			int area = uti_config_getint("COMMON", "AREA");
			if (area != 0xffffffff)
				g_area = area;

			// Get CH_FREEZE
			int ch_freeze = uti_config_getint("COMMON", "CH_FREEZE");
			if (ch_freeze != 0xffffffff)
				g_ch_freeze = ch_freeze;

			// Get ATV_SCAN_STEP
			int atv_scan_step = uti_config_getint("COMMON", "ATV_SCAN_STEP");
			if (atv_scan_step != 0xffffffff)
				g_atv_scan_step = atv_scan_step;

			// Get DISP_SNOWFLAKE
			int disp_snowflake = uti_config_getint("COMMON", "DISP_SNOWFLAKE");
			if (disp_snowflake != 0xffffffff)
				g_disp_snowflake = disp_snowflake


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

// Free all databases
int uti_config_uninit()
{
	os_free(atv_database);
	if (dtv_database)
		os_free(dtv_database);
	if(factory_database)
		os_free(factory_database);
	if(user_database)
		os_free(user_database);
	if(epg_database)
		os_free(epg_database);
	return 0;
}

int uti_config_get_os()
{
	if (g_f1_os)
		return g_f1_os;
	else
		return 0;
}

int uti_config_get_area()
{
	return g_area;
}

int uti_get_ch_freeze_flag()
{
	return g_ch_freeze;
}

int uti_get_atv_snowflake_flag()
{
	return g_disp_snowflake;
}

int uti_get_atv_scan_step()
{
	return g_atv_scan_step;
}

int uti_get_atv_out_mute()
{
	return !g_atv_out;
}

int uti_get_dtv_out_mute()
{
	return !g_dtv_out;
}

int uti_get_av_out_mute()
{
	return !g_av_out;
}

int uti_get_hdmi_out_mute()
{
	return !g_hdmi_out;
}

int uti_get_cmp_out_mute()
{
	return !g_cmp_out;
}

int uti_get_vga_out_mute()
{
	return !g_vga_out;
}

int uti_get_scart_out_mute()
{
	return !g_scart_out;
}

int uti_get_mm_out_mute()
{
	return !g_mm_out;
}

// Get something from INI
char *uti_config_get(char *cat, char *key, char *to)
{
	if (!g_fconfig_file)
		return 1;

	char id[256];
	snprintf(&id, 256, "%s:%s", cat, key);
	char *config = iniparser_getstring(g_fconfig_file, &id);
	to = config;

	if (log_is_output(7, 0))
		printf("*f1 config*%s=%s\n", &id, config);
	if (log_is_outfile(7, 0))
		fpi_log_printf("*f1 config*%s=%s\n", &id, config);
}

// Get string from INI
char *uti_config_getstr(char *cat, char *key)
{
	if (!g_fconfig_file)
		return 0;

	char id[256];
	snprintf(&id, 256, "%s:%s", cat, key);
	return iniparser_getstring(g_fconfig_file, &id, 0);
}

// Get integer from INI
int uti_config_getint(char *cat, char *key)
{
	if (!g_fconfig_file)
		return 0xfffffffff;

	char id[256];
	snprintf(&id, 256, "%s:%s", cat, key);
	return iniparser_getint(g_fconfig_file, &id, 0xffffffff);
}

int uti_get_path_AtvDataBase()
{
}

// Other uti_get_path* goes here
