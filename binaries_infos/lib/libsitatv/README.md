# libsitatv

This library allows chwebkit and others to call the sitatvservice binary, and do stuff such as changing the volume or setting the video parameters.

It's also very big, at 8.9MB, and around 5000 functions (with sqlite3 removed). one can use this one to implement a complete UI for the TV, and probably some other applications that need to talk to the main process. I didn't looked much into it as my main goal was to replace sitatvservice completly, but there's some things that seems to happens:

* The lib is divided into two layers: `api_` which is the high level called by the application that links to libsitatv, and `app_` which handles the communication with sitatv (or just read from/write global variables), the `app_` calls the `fpi_` (not the same as sitatvserice) functions that send commands using the `tvh_` (not the same as sitatv again) functions.
* It seems to use a custom protocol over TCP to talk with sitatvservice, to 127.0.0.1:16666, the protocol looks like how you do syscalls on x86.
* This lib also contains debug symbols, unlike libfpp
* apparently the protocol is pushing this the service
```
    struct tag_tvh_route_para {
        uint32_t un32_client_id;
        uint32_t un32_entry_id;
        uint32_t un32_data_length;
        int32_t n32_request_result;
        int32_t un8_exten_para;
        uint8_t request_para[40960];
    }; 
```
