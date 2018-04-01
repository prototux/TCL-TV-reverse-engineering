/**
 * @file fpp_driver.h
 * fpp_driver is not defined yet
 */
#ifndef __FPP_DRIVER_H__
#define __FPP_DRIVER_H__

/**
 * @brief STBC data, I have no idea what this is, but it is needed for fpp_init_driver();
 */
static char fpp_stbc_data[7168] = {0x54, 0x53, 0x43, 0x42, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00};

/**
 * @brief The OS type
 */
enum fpp_driver_os {
	OS_NONE,
	OS_LINUX,
	OS_ANDROID
};

/**
 * @brief The geographical area
 */
enum fpp_driver_area {
	AREA_CN, /**< China */
	AREA_EU, /**< Europe */
	AREA_AU /**< Australia */
};

/**
 * @brief Driver parameters, defines the os_type, the geographic area, and some other parameters
 */
struct fpp_driver_parameters {
	enum fpp_driver_os os_type; /**< The OS Type */
	enum fpp_driver_os area; /**< The geographical area */
	uint16_t type; /**< Undefined */
	void *extend; /**< Extended parameters (?), currently STBC data */
};


/**
 * @brief Init the drivers
 *
 * @param params Driver parameters
 */
void fpp_driver_init(struct fpp_driver_parameters *params);

#endif /* __FPP_DRIVER_H__ */
