/**
 * @file fpp_zoom.h
 * fpp_zoom is not defined yet
 */
#ifndef __FPP_ZOOM_H__
#define __FPP_ZOOM_H__

#include "fpp_linein.h"

/**
 * fpp_zoom_get_afd_info is not documented yet.
 */
void fpp_zoom_get_afd_info(void);

/**
 * fpp_zoom_get_vga_para is not documented yet.
 */
void fpp_zoom_get_vga_para(void);

/**
 * fpp_zoom_set_aspect_ratio is not documented yet.
 */
void fpp_zoom_set_aspect_ratio(void);

/**
 * @brief Sets the crop parameters of a specific linein
 * @param linein The linein to edit
 * @param format The signal format
 * @param x The X position of the window
 * @param y The Y position of the window
 * @param width The width of the window
 * @param height The height of the window
 */
void fpp_zoom_set_crop_window(enum fpp_linein linein, struct fpp_signal_format format, int x, int y, int width, int height);

/**
 * @brief Sets the display window parameters of a specific linein
 * @param linein The linein to edit
 * @param format The signal format
 * @param x The X position of the window
 * @param y The Y position of the window
 * @param width The width of the window
 * @param height The height of the window
 */
void fpp_zoom_set_display_window(enum fpp_linein linein, struct fpp_signal_format format, int x, int y, int width, int height);

/**
 * fpp_zoom_set_vga_clock is not documented yet.
 */
void fpp_zoom_set_vga_clock(void);

/**
 * fpp_zoom_set_vga_hpos is not documented yet.
 */
void fpp_zoom_set_vga_hpos(void);

/**
 * fpp_zoom_set_vga_phase is not documented yet.
 */
void fpp_zoom_set_vga_phase(void);

/**
 * fpp_zoom_set_vga_vpos is not documented yet.
 */
void fpp_zoom_set_vga_vpos(void);

/**
 * fpp_zoom_vga_autoadjust is not documented yet.
 */
void fpp_zoom_vga_autoadjust(void);

#endif /* __FPP_ZOOM_H__ */
