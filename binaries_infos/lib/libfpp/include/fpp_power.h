/**
 * @file fpp_power.h
 * fpp_power is not defined yet
 */
#ifndef __FPP_POWER_H__
#define __FPP_POWER_H__

/**
 * fpp_power_get_backlight is not documented yet.
 */
void fpp_power_get_backlight(void);

/**
 * @brief Do not use, supposedly get power LED status, actually segfaults
 */
void fpp_power_get_led_status(void);

/**
 * fpp_power_get_wakeup_source is not documented yet.
 */
void fpp_power_get_wakeup_source(void);

/**
 * fpp_power_off is not documented yet.
 */
void fpp_power_off(void);

/**
 * @brief Turns ON or OFF the backlight
 * @param enable Turn ON (1) of OFF (0) the backlight
 */
void fpp_power_set_backlight(int enable);

/**
 * fpp_power_set_ir_wakeup_method is not documented yet.
 */
void fpp_power_set_ir_wakeup_method(void);

/**
 * fpp_power_set_keypad_wakeup_method is not documented yet.
 */
void fpp_power_set_keypad_wakeup_method(void);

/**
 * @brief Do not use, supposedly set the power LED, but actually segfaults
 */
void fpp_power_set_led_status(void);

#endif /* __FPP_POWER_H__ */
