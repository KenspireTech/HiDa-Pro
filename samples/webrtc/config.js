;(function(window) {
    'use strict';

    const MESSAGES = {
        'login': 'Login as a user on this computer to start conferencing with your partners.',
        'create_session': 'Creating a session...',
        'connect': 'Connecting...',
        'connect_error': 'Something went wrong with the connection. Check internet connection or user info and try again.',
        'login_as': 'Logged in as ',
        'title_login': 'Choose a user to login with:',
        'title_callee': 'Choose users to call:',
        'calling': 'Calling...',
        'webrtc_not_avaible': 'WebRTC is not available in your browser. We regret the inconvenience caused.',
        'no_internet': 'Please check your Internet connection and try again'
    };

    const creds = {
        'appId': 65623,
        'authKey': '6VqGaNvMXNWdKNt',
        'authSecret': '5CrVdpqDKCX-GWg'
    };

    const config = {
        debug: true,
        webrtc: {
            answerTimeInterval: 150,
            dialingTimeInterval: 5,
            disconnectTimeInterval: 35,
            statsReportTimeInterval: 5
        }
    };

    /**
     * Could set appCreds and endpoints throw URL string by search part
     * ?appId={Number}&authKey={String}&authSecret={String}&endpoints.api={String}&endpoints.chat={String}
     */

    /**
     * Get value of key from search string of url
     * 
     * @param  {string} q - name of query
     * @returns {string|number} - value of query
     */
    function getQueryVar(q) {
        var query = window.location.search.substring(1),
            vars = query.split('&'),
            answ = null;

        vars.forEach(function(el, i){
            var pair = el.split('=');

            if(pair[0] === q) {
                answ = pair[1];
            }
        });

        return answ;
    };

    if(getQueryVar('appId')) {
        const customCreds = {
            'appId': getQueryVar('appId'),
            'authKey': getQueryVar('authKey'),
            'authSecret': getQueryVar('authSecret')
        };

        Object.assign(creds, customCreds);
    }

    if(getQueryVar('endpoints.api')) {
        const customEndpoints = {
            'endpoints': {
                'api': getQueryVar('endpoints.api'),
                'chat': getQueryVar('endpoints.chat')
            }
        }

        Object.assign(config, customEndpoints);
    }

    window.CONFIG = {
        'CREDENTIALS': creds,
        'APP_CONFIG': config,
        'MESSAGES': MESSAGES
    };
}(window));
