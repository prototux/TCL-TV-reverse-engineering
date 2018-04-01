/**
 * @file fpp_system.h
 * fpp_system is not defined yet
 */
#ifndef __FPP_SYSTEM_H__
#define __FPP_SYSTEM_H__

/**
 * @brief W*H Resolution
 */
struct fpp_resolution {
	uint16_t width;
	uint16_t height;
};

/**
 * fpp_system_debug_key_set is not documented yet.
 */
void fpp_system_debug_key_set(void);

/**
 * fpp_system_enter_4k2k_mode is not documented yet.
 */
void fpp_system_enter_4k2k_mode(void);

/**
 * fpp_system_exit_4k2k_mode is not documented yet.
 */
void fpp_system_exit_4k2k_mode(void);

/**
 * fpp_system_fast_create_file is not documented yet.
 */
void fpp_system_fast_create_file(void);

/**
 * fpp_system_fast_create_file_get_progress is not documented yet.
 */
void fpp_system_fast_create_file_get_progress(void);

/**
 * @brief Activate the debug menu
 * @param unknown_1 Unknown parameter
 * @param unknown_2 Unknown parameter
 */
void fpp_system_fpp_debug_switch(int unknown_1, int unknown_2);

/**
 * fpp_system_get_average_luma is not documented yet.
 */
void fpp_system_get_average_luma(void);

/**
 * fpp_system_get_luma_level_distribution is not documented yet.
 */
void fpp_system_get_luma_level_distribution(void);

/**
 * @brief Get the panel native resolution
 * @param resolution The resolution structure to write to.
 */
void fpp_system_get_panel_resolution(struct fpp_resolution *resolution);

/**
 * fpp_system_get_pixel_info is not documented yet.
 */
void fpp_system_get_pixel_info(void);

/**
 * fpp_system_get_pq_demo_mode is not documented yet.
 */
void fpp_system_get_pq_demo_mode(void);

/**
 * @brief Apparently init the system
 * It isn't used by sitatvservice and apparently activates the watchdog. it's better to avoid using it.
 */
void fpp_system_init(void);

/**
 * fpp_system_is_4k2k_mode is not documented yet.
 */
void fpp_system_is_4k2k_mode(void);

/**
 * fpp_system_monitor_bluetooth is not documented yet.
 */
void fpp_system_monitor_bluetooth(void);

/**
 * fpp_system_panel_get_param_bool is not documented yet.
 */
void fpp_system_panel_get_param_bool(void);

/**
 * fpp_system_panel_reset_tcon is not documented yet.
 */
void fpp_system_panel_reset_tcon(void);

/**
 * fpp_system_panel_set_bit_mode is not documented yet.
 */
void fpp_system_panel_set_bit_mode(void);

/**
 * fpp_system_panel_set_osd_mirror is not documented yet.
 */
void fpp_system_panel_set_osd_mirror(void);

/**
 * fpp_system_panel_set_param_bool is not documented yet.
 */
void fpp_system_panel_set_param_bool(void);

/**
 * fpp_system_panel_set_polarity is not documented yet.
 */
void fpp_system_panel_set_polarity(void);

/**
 * fpp_system_panel_set_swap_port is not documented yet.
 */
void fpp_system_panel_set_swap_port(void);

/**
 * fpp_system_panel_set_ti_mode is not documented yet.
 */
void fpp_system_panel_set_ti_mode(void);

/**
 * fpp_system_panel_set_video_mirror is not documented yet.
 */
void fpp_system_panel_set_video_mirror(void);

/**
 * fpp_system_pwm_set is not documented yet.
 */
void fpp_system_pwm_set(void);

/**
 * fpp_system_set_bluetooth_enable is not documented yet.
 */
void fpp_system_set_bluetooth_enable(void);

/**
 * fpp_system_set_config_path_and_name is not documented yet.
 */
void fpp_system_set_config_path_and_name(void);

/**
 * fpp_system_set_gpu_ddr_ratio is not documented yet.
 */
void fpp_system_set_gpu_ddr_ratio(void);

/**
 * fpp_system_set_panel_file_name is not documented yet.
 */
void fpp_system_set_panel_file_name(void);

/**
 * fpp_system_set_pq is not documented yet.
 */
void fpp_system_set_pq(void);

/**
 * fpp_system_set_pq_demo_mode is not documented yet.
 */
void fpp_system_set_pq_demo_mode(void);

/**
 * @brief Set the Picture Quality paths
 *
 * Set the Picture Quality database paths
 * @param pq PQ database path
 * @param pq_patch PQ patch database path
 */
void fpp_system_set_pq_dir_path(char *pq, char *pq_patch);

/**
 * fpp_system_usb_format is not documented yet.
 */
void fpp_system_usb_format(void);

/**
 * fpp_system_usb_get_formatting_progress is not documented yet.
 */
void fpp_system_usb_get_formatting_progress(void);

#endif /* __FPP_SYSTEM_H__ */
