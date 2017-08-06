const applicationModule = require('application');
import SocialLogin = require('nativescript-social-login');

if(applicationModule.android) {
    console.log('this is an android application');
    applicationModule.android.on(applicationModule.AndroidApplication.activityCreatedEvent, (event) => {
        console.log('Activity Event created');
        let result = SocialLogin.init({
            activity: event.activity,
            facebook: { initialize: true },
            onActivityResult: (requestCode: number) => {
                console.log(requestCode);
            }
        });
    });

    SocialLogin.addLogger(function (msg: any, tag: string) {
        console.log('[nativescript-social-login]: (' + tag + '): ' + msg);
    });
}

applicationModule.setCssFileName('index.css');
applicationModule.start({ moduleName: 'views/start/start' });