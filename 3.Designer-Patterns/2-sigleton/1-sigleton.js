// EXEMPLOS:

var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}