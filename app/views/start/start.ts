import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';

var nav = require("ui/frame");


let page: Page;


export function onSignUpTap (args: EventData) {
    page = <Page>args.object;
}

export function onPageLoaded(args){
    const page = args.object;
}

export function onGetStartedTap (args) {
    console.log('Tapped get Started');

    var topmost = nav.topmost();
    topmost.navigate("views/login/login");
    
}

export function onLogInTap(){
    console.log('Login Clicked');
}