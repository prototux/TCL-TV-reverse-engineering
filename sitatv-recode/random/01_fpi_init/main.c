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
char stbc_data[7168] = {0x54, 0x53, 0x43, 0x42, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00};
struct tag_driver_parameters_t driver_para = {
	.un8_os_type = OS_LINUX,
	.area = EN_AREA_EU,
	.type = 0,
	.p_extend = &stbc_data
};

enum EN_PICTURE_SIZE {
	E_AR_DEFAULT,
	E_AR_16x9,
	E_AR_4x3,
	E_AR_14x9, E_AR_CINERAMA, 
    E_AR_16x9_ZOOM, E_AR_16x9_ZOOM_UP, E_AR_14x9_ZOOM, E_AR_STETCH_ZOOM, 
    E_AR_WIDE_ZOOM, E_AR_ZOOM2, E_AR_WIDE_ZOOM2, E_AR_AUTO, E_AR_PANORAMA, 
    E_AR_JUSTSCAN, E_AR_ZOOM1, E_AR_DOTBYDOt, E_AR_SUBTITLE, E_AR_MOVIE, 
    E_AR_PERSONAL};

enum ZOOM_VIEW_MODE {ZOOM_VIEW_NORMAL, ZOOM_VIEW_FULL, ZOOM_VIEW_DEFAULT, ZOOM_VIEW_MAX};

int fpi_zoom_set_pic_size_view(enum EN_PICTURE_SIZE size, enum ZOOM_VIEW_MODE mode)
{
	printf("fpi_zoom_set_pic_size_view picSize/size: %d, picView/mode: %d\n", size, mode);

	// Global variable, changed when called the linein functions i guess
	int current_linein = 3;

	if (current_linein == 0)
	{
		printf("fpi_linein_get_current fail\n");
		return current_linein;
	}

	printf("current_linein: %d\n", current_linein);
}

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
	fpp_driver_init(&driver_para);

	// Init GPIO
	fpp_gpio_init();

	// Init I2C
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
	fpp_system_set_panel_file_name("/applications/tclconfig/panel/panel_64_3840_2160.txt");


	// Disable the watchdog (i don't know if it's enabled automatically at boot
	// or if it's sitatvservice that enables it. at least, the parameter here is simple
	// 0 => on, 1 => off, 2 => reset (it's probably a enum in sitatvservice code)
	fpp_factory_watch_dog_operate(1);

	//fpp_zoom_set_display_window(0,0, 0,0, 1920, 1080);


	// Init signal monitor (?) and formatchange
	// Apparently these need a callback to be called when the format changes
	// (for example if you change your PC resolution)
	//fpp_signal_monitor_exinit();
	//fpp_signal_monitor_init(4194304);
	//fpp_signal_monitor_formatchange(4194304, 0, 0);
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

	// This works well at least
	// Get panel resolution
	//short res[2]; // w, h
	//fpp_system_get_panel_resolution(&res);
	//printf("resolution: %dx%d\n", res[0], res[1]);

	// Open hdmi3
	//fpp_linein_open_hdmi(3);

	// Try to turn on backlight in order
	//fpp_panel_power_on_off(1); // 1=on, 0=off
	//usleep(500);
	//fpp_power_set_backlight(255); // uint8_t?
	//usleep(500);

	// This finally works!
	//fpp_video_turn_on_backlight(1); // ???
	//usleep(1000);
	//fpp_video_set_background_light(255); // uint8_t?
	//usleep(1000);
	//fpp_video_mute(0); // 1="muted", 0="unmuted"
	//fpp_video_freeze(0); // 1=freeze 0=unfreeze

	// Further tests here
	//usleep(2000000);

	struct tag_video_adjustment_item_t {
		uint8_t n8_value;
		uint8_t n8_min;
		uint8_t n8_low;
		uint8_t n8_mid;
		uint8_t n8_high;
		uint8_t n8_max;
		uint8_t reserved[2];
	} backlight_value = {
		.n8_value = 0,
		.n8_min = 0,
		.n8_low = 0,
		.n8_mid = 0,
		.n8_high = 0,
		.n8_max = 0
	};

	//fpp_video_set_background_light(&backlight_value);
	//return 0;

	typedef struct {
		uint16_t un16_hposition;
		uint16_t un16_vposition;
		uint16_t un16_hsize;
		uint16_t un16_vsize;
	} fpi_zoom_setting_window_t;

	typedef struct {
		uint16_t un16_zoom_mode_id;
		fpi_zoom_setting_window_t cap_win;
		fpi_zoom_setting_window_t disp_win;
	} zoom_window_struct;

	fpi_zoom_setting_window_t testzoom = {
		.un16_hposition = 100,
		.un16_vposition = 100,
		.un16_hsize = 1920,
		.un16_vsize = 1080
	} ;

	typedef struct tag_fpi_signal_format {
		uint32_t un32_format_id;
		uint32_t un32_width;
		uint32_t un32_height;
		uint8_t un8_color_space;
		uint8_t un8_dvi;
		uint8_t un8_framerate;
		signed char b_interlaced;
	} fpi_signal_format;

	const fpi_signal_format sig_format = {
		.un32_format_id = 1,
		.un32_width = 1920,
		.un32_height = 1080,
		.un8_color_space = 1,
		.un8_dvi = 1,
		.un8_framerate = 60,
		.b_interlaced = 0
	};

	uint32_t current_linein = 4194304;
	//current_linein=0x40000;
	// Try to setup HDMI
	//fpp_video_mute(1);
	//fpp_audio_init();
	//fpp_desc_set_descrambler_pid(getpid());
	//int parent_pid = getpid();
		//printf("\n=================PID: %d\n", getpid());
		//fpp_linein_close_hdmi(current_linein);
		//usleep(10000);
	//fpp_hdmi_process_signal_formatchange(current_linein);
	//fpp_signal_set_hdmi_provider_type(0);
	fpp_linein_open_hdmi(current_linein);
	//fpp_video_set_mpeg_nr(1);
	usleep(300000);
	//fpp_hdmi_process_signal_formatchange(current_linein);
	//fpp_hdmi_process_signal_formatchange();
	// (size_mode, zoom_mode...)
	// (0, 0, h, v, w, h)
	// (0, 0, hpos, vpos, hsize, vsize)

	// This select the area to display from input (it crop from the input)
	// Parameters: linein id, pointer ver a sig format, hpos, vpos, hsize, vsize
	fpp_zoom_set_crop_window(current_linein,&sig_format, 0,0, 1920,1080);


	// This doesn't really seems to do anything...
	//fpp_zoom_set_aspect_ratio(0);

	// This set where to display the input, same parameters as crop_window
	// (i guess this is used for the mini view in the menu)
	fpp_zoom_set_display_window(current_linein,&sig_format, 0,0, 1920, 1080);

	//This mute/unmute the OSD apparently
	fpp_panel_power_on_off(1);
	fpp_video_mute(0);
	fpp_graphics_mute(0);

	// Activate debug switch for all
	// correction: it is a debug menu?!?
	//fpp_system_fpp_debug_switch(1, 1);

	// Doesn't work, send error with
	// "Do not support recently!"
	// and then segfaults
	//int led = fpp_power_get_led_status();
	//printf("LED status = %d\n", led);
	//fpp_power_set_led_status(1);
	//printf("LED status = %d\n", fpp_power_get_led_status());

	//printf("Entering loop...\n");
	while (1)
		usleep(500);
	// Should never go there!
	return EXIT_SUCCESS;
}
