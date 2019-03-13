// injectACS.js
//
// Inject IMS data for FX 0 port on modem
//
// (() => {
// 	chrome.storage.sync.get('data', function(data) {
// 		console.log(data.data);

// 		// Open service panel
// 		document.getElementById('edit_service_panel_c').style.visibility = 'visible';

// 		// // SIP Server 1
// 		// document.getElementById('service_fxs0_sip_server_address_check').checked = true;
// 		// document.getElementById('service_fxs0_sip_server_address').value = "172.29.165.136"

// 		// // Sec SIP Server 1
// 		// document.getElementById('service_fxs0_secsip_server_address_check').checked = true;
// 		// document.getElementById('service_fxs0_secsip_server_address').value = "10.24.23.167"

// 		// SIP URI 1
// 		document.getElementById('service_fxs0_sip_uri_check').checked = true;
// 		document.getElementById('service_fxs0_sip_uri').value = data.data['Public ID'].replace(
// 			/sip:\+|@ims.t-com.hr/g,
// 			''
// 		);

// 		// SIP Username 1
// 		document.getElementById('service_fxs0_sip_username_check').checked = true;
// 		document.getElementById('service_fxs0_sip_username').value = data.data['Private ID'];

// 		// SIP Password 1
// 		document.getElementById('service_fxs0_sip_password_check').checked = true;
// 		document.getElementById('service_fxs0_sip_password').value = data.data['User password'];
// 	});
// })();

/***
 * Edit parameters actions (promijeni parametre)
 * ova metoda reusa metode za Modify service, jer su to vrlo sliËne funkcije
 * sa par manjih razlika
 */
// var handleActionModifyParamsClick = function(e, obj) {
(() => {
	//YAHOO.util.Event.preventDefault(e);
	asset_modify_actions.unclickAllCheckBoxes();
	YAHOO.util.Dom.get('service_asset_id').value = acs_user_data.ASSET_ID;
	YAHOO.util.Dom.get('service_group_id').value = acs_user_data.GROUP_ID;
	YAHOO.util.Dom.get('service_customer_name').value = acs_user_data.CUSTOMER_NAME;
	YAHOO.util.Dom.get('service_service_id').value = acs_user_data.SERVICE_ID;
	YAHOO.util.Dom.get('service_dslam_name').value = acs_user_data.DSLAM_NAME;
	YAHOO.util.Dom.get('service_dslam_frame').value = acs_user_data.DSLAM_FRAME;
	YAHOO.util.Dom.get('service_dslam_slot').value = acs_user_data.DSLAM_SLOT;
	YAHOO.util.Dom.get('service_dslam_port').value = acs_user_data.DSLAM_PORT;
	YAHOO.util.Dom.get('service_bridge_mode').value = acs_user_data.BRIDGE_MODE;

	// 02.05.2018. - Added support for CLOUD CPE

	if (acs_user_data.CLOUD_CPE == '1') {
		YAHOO.util.Dom.get('service_cloudcpe_enabled').options.selectedIndex = 1;
		YAHOO.util.Dom.get('service_ccpedhcpip').value = acs_user_data.CCPE_DHCP_IP;
	} else {
		YAHOO.util.Dom.get('service_cloudcpe_enabled').options.selectedIndex = 0;
		YAHOO.util.Dom.get('service_ccpedhcpip').value = '';
	}

	YAHOO.util.Dom.get('service_gfast_enabled').options.selectedIndex = acs_user_data.GFAST;

	// enable pppoe passthrouh only when CPE is not in bridge mode
	if (acs_user_data.BRIDGE_MODE == '0') {
		YAHOO.util.Dom.removeClass('modify_pppoe_pass_group', 'hidden');
	} else {
		YAHOO.util.Dom.addClass('modify_pppoe_pass_group', 'hidden');
	}
	YAHOO.util.Dom.get('service_pppoe_pass_through').value = acs_user_data.PPPOE_PASS_THROUGH;
	YAHOO.util.Dom.get('service_pppoe_username').value = acs_user_data.PPPOE_USERNAME;
	YAHOO.util.Dom.get('service_pppoe_password').value = acs_user_data.PPPOE_PASSWORD;
	YAHOO.util.Dom.get('service_fxs0_sip_server_address').value =
		acs_user_data.FXS0_SIPSERVER_ADDRESS;
	YAHOO.util.Dom.get('service_fxs0_secsip_server_address').value =
		acs_user_data.FXS0SIPSECSERVERADDRESS;
	YAHOO.util.Dom.get('service_fxs0_sip_uri').value = acs_user_data.FXS0_SIP_URI;
	YAHOO.util.Dom.get('service_fxs0_sip_username').value = acs_user_data.FXS0_SIP_USERNAME;
	YAHOO.util.Dom.get('service_fxs0_sip_password').value = acs_user_data.FXS0_SIP_PASSWORD;
	YAHOO.util.Dom.get('service_fxs1_sip_server_address').value =
		acs_user_data.FXS1_SIPSERVER_ADDRESS;
	YAHOO.util.Dom.get('service_fxs1_secsip_server_address').value =
		acs_user_data.FXS1SIPSECSERVERADDRESS;
	YAHOO.util.Dom.get('service_fxs1_sip_uri').value = acs_user_data.FXS1_SIP_URI;
	YAHOO.util.Dom.get('service_fxs1_sip_username').value = acs_user_data.FXS1_SIP_USERNAME;
	YAHOO.util.Dom.get('service_fxs1_sip_password').value = acs_user_data.FXS1_SIP_PASSWORD;
	if (YAHOO.util.Dom.get('service_prim_voip_dns')) {
		YAHOO.util.Dom.get('service_prim_voip_dns').value = acs_user_data.PRIM_VOIP_DNS;
	}
	if (YAHOO.util.Dom.get('service_sec_voip_dns')) {
		YAHOO.util.Dom.get('service_sec_voip_dns').value = acs_user_data.SEC_VOIP_DNS;
	}

	if (acs_user_data.DIAL_MAP && acs_user_data.DIAL_MAP.length > 0) {
		if (YAHOO.util.Dom.get('service_dial_map')) {
			YAHOO.util.Dom.get('service_dial_map').value = acs_user_data.DIAL_MAP;
		}
	} else {
		if (YAHOO.util.Dom.get('service_dial_map')) {
			YAHOO.util.Dom.get('service_dial_map').value = 'RESIDENTIAL';
		}
	}
	YAHOO.util.Dom.get('service_t38_enabled').value = acs_user_data.T38_ENABLED;
	YAHOO.util.Dom.get('service_ignore_tr069_mng').value = acs_user_data.IGNORE_TR069_MNG;
	YAHOO.util.Dom.get('service_wifi_enabled').value = acs_user_data.WIFI_ENABLED;
	YAHOO.util.Dom.get('service_wifi_ssid').value = acs_user_data.WIFI_SSID;
	YAHOO.util.Dom.get('service_wifi_enc_mode').value = acs_user_data.WIFI_ENC_MODE;
	YAHOO.util.Dom.get('service_wifi_channel').value = acs_user_data.WIFI_CHANNEL;
	YAHOO.util.Dom.get('service_femto_max_channels').value = acs_user_data.FEMTO_MAX_CHANNELS;
	YAHOO.util.Dom.get('service_femto_max_channels').value = acs_user_data.FEMTO_MAX_CHANNELS;
	asset_modify_actions.toggleWifiKeyMsg(acs_user_data.WIFI_ENC_MODE);
	if (acs_user_data.WIFI_ENC_KEY.length > 0)
		YAHOO.util.Dom.get('service_wifi_enc_key').value = '********';
	else YAHOO.util.Dom.get('service_wifi_enc_key').value = '';

	if (acs_user_data.WIFI_SPECTRUM) {
		YAHOO.util.Dom.get('service_wifi_spectrum').value = acs_user_data.WIFI_SPECTRUM;
	}
	YAHOO.util.Dom.removeClass('modify_wifi_group', 'hidden');

	YAHOO.util.Dom.addClass('service_wifi_spectrum_group', 'hidden');
	YAHOO.util.Dom.addClass('service_t38_enabled_group', 'hidden');
	if (
		acs_user_data.ACTIVATED_DEVICE_CLASS &&
		(acs_user_data.ACTIVATED_DEVICE_CLASS == 'W724Ci' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'W724Ci_FTTH' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'W724Ci_11AC' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'W724Ci_11AC_FTTH' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Fast5655' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Fast5655_FTTH' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Speedport Plus' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Speedport Plus_FTTH')
	) {
		YAHOO.util.Dom.removeClass('service_wifi_spectrum_group', 'hidden');
		YAHOO.util.Dom.removeClass('service_t38_enabled_group', 'hidden');
	}

	/*if (acs_user_data.ACTIVATED_DEVICE_CLASS && (acs_user_data.ACTIVATED_DEVICE_CLASS =='W724Ci' ||
																									 acs_user_data.ACTIVATED_DEVICE_CLASS =='W724Ci_FTTH' ||
																									 acs_user_data.ACTIVATED_DEVICE_CLASS =='W724Ci_11AC' ||
																									 acs_user_data.ACTIVATED_DEVICE_CLASS =='W724Ci_11AC_FTTH' ||                                                      
																									 acs_user_data.ACTIVATED_DEVICE_CLASS =='Fast5655_FTTH' ||
																									 acs_user_data.ACTIVATED_DEVICE_CLASS =='Fast5655')) {
					YAHOO.util.Dom.removeClass('service_t38_enabled_group', 'hidden');
			}*/

	YAHOO.util.Dom.addClass('modify_wifi_ac_group', 'hidden');
	if (
		acs_user_data.ACTIVATED_DEVICE_CLASS &&
		(acs_user_data.ACTIVATED_DEVICE_CLASS == 'W724Ci_11AC' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'W724Ci_11AC_FTTH' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'TerastreamHGW' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Speedport Plus' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Speedport Plus_FTTH' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Fast5655_FTTH' ||
			acs_user_data.ACTIVATED_DEVICE_CLASS == 'Fast5655')
	) {
		YAHOO.util.Dom.removeClass('modify_wifi_ac_group', 'hidden');
		YAHOO.util.Dom.removeClass('service_wifi_ac_channel_group', 'hidden');
		YAHOO.util.Dom.get('service_wifi_ac_enabled').value = acs_user_data.WIFI_AC_ENABLED;
		YAHOO.util.Dom.get('service_wifi_ac_ssid').value = acs_user_data.WIFI_AC_SSID;
		YAHOO.util.Dom.get('service_wifi_ac_enc_mode').value = acs_user_data.WIFI_AC_ENC_MODE;
		YAHOO.util.Dom.get('service_wifi_ac_channel').value = acs_user_data.WIFI_AC_CHANNEL;
		if (acs_user_data.WIFI_AC_ENC_KEY.length > 0)
			YAHOO.util.Dom.get('service_wifi_ac_enc_key').value = '********';
		else YAHOO.util.Dom.get('service_wifi_ac_enc_key').value = '';

		asset_modify_actions.toggleWifiACKeyMsg(acs_user_data.WIFI_AC_ENC_MODE);
	}

	/**
	 * 2016-06-06 services with clip http://project.lab.bulb.hr/issues/1762
	 */
	var hasClip = false;
	if (SERVICES_WITH_CLIP) {
		for (var i = 0; i < SERVICES_WITH_CLIP.length; i++) {
			if (SERVICES_WITH_CLIP[i] == acs_user_data.SERVICE_ID) {
				hasClip = true;
			}
		}
	}

	var hasSmartClip = false;
	if (SMART_SERVICES_WITH_CLIP) {
		for (var i = 0; i < SMART_SERVICES_WITH_CLIP.length; i++) {
			if (SMART_SERVICES_WITH_CLIP[i] == acs_user_data.SERVICE_ID) {
				hasSmartClip = true;
			}
		}
	}

	YAHOO.util.Dom.addClass('service_clip_protocol_group', 'hidden');
	if (hasClip === true) {
		if (asset_modify_actions.showClipProtocolForAsset()) {
			YAHOO.util.Dom.get('service_clip_protocol').value = acs_user_data.CLIP_PROTOCOL;
			YAHOO.util.Dom.removeClass('service_clip_protocol_group', 'hidden');
		}
	}

	if (hasSmartClip === true) {
		// Enabled only for FXS and FXS + ETH subtype
		if (acs_user_data.SERVICE_SUBTYPE === '1' || acs_user_data.SERVICE_SUBTYPE === '3') {
			if (asset_modify_actions.showClipProtocolForAsset()) {
				YAHOO.util.Dom.get('service_clip_protocol').value = acs_user_data.CLIP_PROTOCOL;
				YAHOO.util.Dom.removeClass('service_clip_protocol_group', 'hidden');
			}
		}
	}

	YAHOO.util.Dom.addClass('modify_ignore_flag_group', 'hidden');
	YAHOO.util.Dom.addClass('modify_service_group', 'hidden');
	YAHOO.util.Dom.get('service_panel_title').innerHTML = 'Promijeni parametre';
	YAHOO.util.Dom.get('service_frm_action').value = 'modify_params';
	asset_modify_actions.addCheckBoxListeners('show');
	asset_modify_actions.disableFSXOptions();
	YAHOO.util.Dom.removeClass('service_wifi_channel_group', 'hidden');
	if (FEMTO_SERVICES[acs_user_data.SERVICE_ID]) {
		YAHOO.util.Dom.removeClass('modify_femto_group', 'hidden');
	} else {
		YAHOO.util.Dom.addClass('modify_femto_group', 'hidden');
	}
	if (TERASTREAM_SERVICES[acs_user_data.SERVICE_ID]) {
		YAHOO.util.Dom.removeClass('service_cpe_data_group', 'hidden');
		YAHOO.util.Dom.addClass('service_pppoe_data_group', 'hidden');
	} else {
		YAHOO.util.Dom.addClass('service_cpe_data_group', 'hidden');
		YAHOO.util.Dom.removeClass('service_pppoe_data_group', 'hidden');
	}

	asset_modify_actions.edit_service_dialog.show();
})();
