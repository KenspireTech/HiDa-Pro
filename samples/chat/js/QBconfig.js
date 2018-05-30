var QBconfig = {
    credentials: {
        appId: 65623,
        authKey: '6VqGaNvMXNWdKNt',
        authSecret: '5CrVdpqDKCX-GWg'
    },
    appConfig: {
        chatProtocol: {
            active: 2
        },
        streamManagement: {
            enable: true
        },
        debug: {
            mode: 1,
            file: null
        }
    }
};

var appConfig = {
    dilogsPerRequers: 30,
    messagesPerRequest: 100,
    usersPerRequest: 50,
    typingTimeout: 3 // 3 seconds
};

var CONSTANTS = {
    DIALOG_TYPES: {
        CHAT: 3,
        GROUPCHAT: 2,
        PUBLICCHAT: 1
    },
    ATTACHMENT: {
        TYPE: 'file',
        BODY: '[attachment]',
        MAXSIZE: 50 * 1000000, // set 50 megabytes,
        MAXSIZEMESSAGE: 'Image is too large. Max size is 2 mb.'
    },
    NOTIFICATION_TYPES: {
        NEW_DIALOG: '1',
        UPDATE_DIALOG: '2'
    }
};
