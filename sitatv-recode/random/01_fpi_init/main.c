#include <stdio.h>
#include <stdlib.h>
#include <inttypes.h>
#include <string.h>

struct st_config_path_ctrl {
	const char *section;
	const char *key;
	unsigned int id;
	char *path;
};

struct st_config_path_ctrl st_config_path_table[12] = {
	{.section = "MISC_PQ_MAP_CFG", .key = "PQ", .id = 0, .path = "/applications/tclconfig/pq/ID87/"},
	{.section = "MISC_PQ_MAP_CFG", .key = "PQ_PATCH", .id = 1, .path = "/applications/tclconfig/pq/patch/"},
	{.section = "GPIO", .key = "GPIO_PATH", .id = 4, .path = 0x0},
	{.section = "GAMMA_BIN", .key = "GAMMA_FILE_0", .id = 6, .path = "/applications/tclconfig/gamma/Gamma7_L32E4300CE.bin"},
	{.section = "HDMI_EDID_1", .key = "HDMI_EDID_File", .id = 8, .path = "/applications/tclconfig/EDID_BIN/HDMI_EDID_4K_NO3D.bin"},
	{.section = "HDMI_EDID_2", .key = "HDMI_EDID_File", .id = 9, .path = 0x0},
	{.section = "HDMI_EDID_3", .key = "HDMI_EDID_File", .id = 10, .path = 0x0},
	{.section = "HDMI_EDID_4", .key = "HDMI_EDID_File", .id = 11, .path = 0x0},
	{.section = "VGA_EDID", .key = "VGA_EDID_File", .id = 7, .path = "/applications/tclconfig/EDID_BIN/VGA_EDID.bin"},
	{.section = "HDCP_KEY", .key = "HDCP_KEY_File", .id = 14, .path = 0x0},
	{.section = "HDCP_KEY_2", .key = "HDCP_KEY_File", .id = 15, .path = 0x0},
	{.section = "AUDIO_MS12", .key = "AUDIO_MS12_File", .id = 16, .path = "/applications/tclconfig/audio/audioPP/audioPP_23.txt"}
};


enum EN_OS {
	OS_NONE,
	OS_LINUX,
	OS_ANDROID
};

enum EN_AREA {
	EN_AREA_CN,
	EN_AREA_EU,
	EN_AREA_AU
};

struct tag_driver_parameters_t {
	enum EN_OS un8_os_type;
	enum EN_AREA area;
	uint16_t type;
	void *p_extend;
};

// These aren't used as fpp_init_driver seems pretty happy with NULL parameter, and crashes because of p_extend
char stbc_data[] = {0x01, 0x00, 0x00, 0x00, 0x53, 0x54, 0x42, 0x43, 0x01, 0x00, 0x00};
struct tag_driver_parameters_t driver_para = {
	.un8_os_type = OS_LINUX,
	.area = EN_AREA_EU,
	.type = 0,
	.p_extend = &stbc_data
};

int main(int argc, char *argv[])
{
	// Init path and name
	// No idea why it is needed, but it is done by fpi_init()
	for (int i = 0; i != 12; i++)
	{
		if (st_config_path_table[i].path)
		{
			int path_len = strlen(st_config_path_table[i].path);
			fpp_system_set_config_path_and_name(st_config_path_table[i].id, st_config_path_table[i].path, path_len);
		}
	}

	// Init pq dir path
	fpp_system_set_pq_dir_path("/applications/tclconfig/pq/ID87/", "/applications/tclconfig/pq/patch/");

	// Init driver
	fpp_driver_init(0);

	// Init GPIO
	fpp_gpio_init();

	// Init IIC (I2C i guess)
	fpp_iic_init();

	// Init Board IC (???) and SoC
	fpp_board_ic_init();
	fpp_board_soc_init(0);

	// Init video
	fpp_video_init();

	// Init RTC
	fpp_board_rtc_init();

	// Init system (?)
	// apparently also activate the watchdog
	// isn't used by sitatvservice?!?
	//fpp_system_init();

	// Works but seems useless...
	//printf("Set panel filename\n");
	//fpp_system_set_panel_file_name("/applications/tclconfig/panel/panel_64_3840_2160.txt");

	/**************************
	 * Here goes the sandbox! *
	 * ***********************/


	// Doesn't seems to work, always return 1...
	// The pointer to data as parameter seems the way
	// but it keeps saying "fpp_power_get_backlight Fail !"...
	//int backlight = 42;
	//int bl = fpp_power_get_backlight(&backlight);
	//printf("Backlight = %d vs %d\n", bl, backlight);

	// Set mute color (??)
	// It works, set a RGB color to the screen
	// At least, we can make this TV a giant RGB LED :D
	//fpp_video_set_mute_color(0, 0, 0);

	// Get panel resolution
	short res[2]; // w, h
	fpp_system_get_panel_resolution(&res);
	printf("resolution: %dx%d\n", res[0], res[1]);

	// Try to turn on backlight in order
	fpp_panel_power_on_off(1); // 1=on, 0=off
	usleep(500);
	//fpp_power_set_backlight(255); // uint8_t?
	//usleep(500);

	// This finally works!
	//fpp_video_turn_on_backlight(1); // ???
	//usleep(1000);
	//fpp_video_set_background_light(255); // uint8_t?
	usleep(1000);
	fpp_video_mute(0); // 1="muted", 0="unmuted"

	// Further tests here
	usleep(2000000);


	//This mute/unmute the OSD apparently
	//fpp_graphics_mute(0);

	// Activate debug switch for all
	// correction: it is a debug menu?!?
	fpp_system_fpp_debug_switch(1, 1);

	// Doesn't work, send error with
	// "Do not support recently!"
	// and then segfaults
	//int led = fpp_power_get_led_status();
	//printf("LED status = %d\n", led);
	//fpp_power_set_led_status(1);
	//printf("LED status = %d\n", fpp_power_get_led_status());

	printf("Entering loop...\n");
	while (1)
		usleep(500);

	// Should never go there!
	return EXIT_SUCCESS;
}
