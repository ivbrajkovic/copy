(() => {
	chrome.storage.sync.get('data', function(data) {
    console.log(data.data);
    
    document.getElementById("subscriberId").value = data.data["Subscriber ID"];
    document.getElementById("MTASServicePackage").options.selectedIndex = 1;
    document.getElementById("chargingId").value = data.data["Charging ID"];
    document.getElementById("IsbrokenDNS").checked = true;
    document.getElementById("privateUserId").value = data.data["Private ID"];
    document.getElementById("userPassword").value = data.data["User password"];
    document.getElementById("referenceAccessLocation").value = data.data["Reference Access Location"];
    document.getElementById("publicIdValue").value = data.data["Public ID"].replace(/sip:\+/, "");
    document.getElementById("implicitRegSet").value = data.data["ImplicitRegSetID"];
    document.getElementById("wirelineAccessAllowed").options.selectedIndex = 0;
    document.getElementById("phoneContext").value = data.data["PHONE CONTEXT"];
    document.getElementById("maxSessions").value = 3;
  });
})();
