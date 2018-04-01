/**
 * @file fpp_video.h
 * fpp_video is not defined yet
 */
#ifndef __FPP_VIDEO_H__
#define __FPP_VIDEO_H__

/**
 * fpp_video_decode_getPts is not documented yet.
 */
void fpp_video_decode_getPts(void);

/**
 * fpp_video_decode_pushData is not documented yet.
 */
void fpp_video_decode_pushData(void);

/**
 * fpp_video_enable_dynamic_contrast is not documented yet.
 */
void fpp_video_enable_dynamic_contrast(void);

/**
 * fpp_video_enable_film_mode is not documented yet.
 */
void fpp_video_enable_film_mode(void);

/**
 * @brief Freezes the video to current frame
 * @param freeze freeze (1) or unfreeze (0) the video
 */
void fpp_video_freeze(int freeze);

/**
 * fpp_video_get_background_light is not documented yet.
 */
void fpp_video_get_background_light(void);

/**
 * fpp_video_get_black_field_status is not documented yet.
 */
void fpp_video_get_black_field_status(void);

/**
 * @brief Inits the video subsystem.
 */
void fpp_video_init(void);

/**
 * @brief Mute the video output (set panel to mute_color)
 * @param mute mute (1) or unmute (0) the video
 */
void fpp_video_mute(int mute);

/**
 * fpp_video_out_mute_output is not documented yet.
 */
void fpp_video_out_mute_output(void);

/**
 * fpp_video_set_background_light is not documented yet.
 */
void fpp_video_set_background_light(void);

/**
 * fpp_video_set_black_stretch is not documented yet.
 */
void fpp_video_set_black_stretch(void);

/**
 * fpp_video_set_brightness is not documented yet.
 */
void fpp_video_set_brightness(void);

/**
 * fpp_video_set_color_param is not documented yet.
 */
void fpp_video_set_color_param(void);

/**
 * fpp_video_set_colorspace is not documented yet.
 */
void fpp_video_set_colorspace(void);

/**
 * fpp_video_set_color_warmth is not documented yet.
 */
void fpp_video_set_color_warmth(void);

/**
 * fpp_video_set_contrast is not documented yet.
 */
void fpp_video_set_contrast(void);

/**
 * fpp_video_set_filterwindow is not documented yet.
 */
void fpp_video_set_filterwindow(void);

/**
 * fpp_video_set_flesh_tone is not documented yet.
 */
void fpp_video_set_flesh_tone(void);

/**
 * fpp_video_set_game_mode is not documented yet.
 */
void fpp_video_set_game_mode(void);

/**
 * fpp_video_set_gamma is not documented yet.
 */
void fpp_video_set_gamma(void);

/**
 * fpp_video_set_gamma_10p is not documented yet.
 */
void fpp_video_set_gamma_10p(void);

/**
 * fpp_video_set_hue is not documented yet.
 */
void fpp_video_set_hue(void);

/**
 * fpp_video_set_mpeg_nr is not documented yet.
 */
void fpp_video_set_mpeg_nr(void);

/**
 * @brief Set the video mute color
 * @param red Red quanity
 * @param green Green quantity
 * @param blue Blue quantity
 */
void fpp_video_set_mute_color(uint8_t red, uint8_t green, uint8_t blue);

/**
 * fpp_video_set_noise_reduction is not documented yet.
 */
void fpp_video_set_noise_reduction(void);

/**
 * fpp_video_set_pq_algorithm is not documented yet.
 */
void fpp_video_set_pq_algorithm(void);

/**
 * fpp_video_set_saturation is not documented yet.
 */
void fpp_video_set_saturation(void);

/**
 * fpp_video_set_sharpness is not documented yet.
 */
void fpp_video_set_sharpness(void);

/**
 * fpp_video_turn_on_backlight is not documented yet.
 */
void fpp_video_turn_on_backlight(void);

#endif /* __FPP_VIDEO_H__ */
