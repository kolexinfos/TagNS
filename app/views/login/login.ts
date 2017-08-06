import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as SocialLogin from  'nativescript-social-login';

let page: Page;

export function loginFacebook(args: EventData){
    console.log("Login with Facebook");

    SocialLogin.loginWithFacebook((result) => {
        if (result.authToken) {
            console.log(result.authToken);
        }
    })
}