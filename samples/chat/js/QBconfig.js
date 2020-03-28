var QBconfig = {
    credentials: {
        appId: 80840,
        authKey: 'NkQwsbMQPdmMumB',
        authSecret: '2pMaXQxsaRCU8mS'
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
        MAXSIZE: 25 * 1000000, // set 25 megabytes,
        MAXSIZEMESSAGE: 'Image is too large. Max size is 25 mb.'
    },
    NOTIFICATION_TYPES: {
        NEW_DIALOG: '1',
        UPDATE_DIALOG: '2'
    }
};
