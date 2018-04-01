/**
 * @file fpp_board.h
 * fpp_board is not defined yet
 */
#ifndef __FPP_BOARD_H__
#define __FPP_BOARD_H__

/**
 * fpp_board_get_soft_svn_info is not documented yet.
 */
void fpp_board_get_soft_svn_info(void);

/**
 * @brief Inits the IC (scaler chip?)
 */
void fpp_board_ic_init(void);

/**
 * fpp_board_rtc_get_clk is not documented yet.
 */
void fpp_board_rtc_get_clk(void);

/**
 * @brief Inits the RTC clock.
 */
void fpp_board_rtc_init(void);

/**
 * fpp_board_rtc_set_clk is not documented yet.
 */
void fpp_board_rtc_set_clk(void);

/**
 * @brief Inits the main SoC
 * @param unknown Unknown parameter, always 0
 */
void fpp_board_soc_init(int unknown);

#endif /* __FPP_BOARD_H__ */
