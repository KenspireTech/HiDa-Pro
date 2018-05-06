var QBCONFIG = {
    endpoints: {
        api: "api.quickblox.com", // set custom API endpoint
        chat: "chat.quickblox.com" // set custom Chat endpoint
    },
    debug: {
        mode: 1,
        file: null
    }
};

var QBApp = {
    'prod': {
        'appId': 65623,
        'authKey': '6VqGaNvMXNWdKNt',
        'authSecret': '5CrVdpqDKCX-GWg'
    }
};

var SAMPLE_VER = 78;
$('.j-version').text('v.' + SAMPLE_VER);

var QBAppCreds = QBApp.prod;


var MULTIPARTY_SERVER = getQueryVar('server');
if(!MULTIPARTY_SERVER){
  var noServerError = "Click ok"
  alert(noServerError);
  throw noServerError;

}
console.info("server var: ", MULTIPARTY_SERVER);
