const path = require('path');

let iconPath = (process.platform == "win32") ? path.join(__dirname, '../assets/images/icon.ico'):path.join(__dirname, '../assets/images/icon.png');

module.exports = {
    "main": {
        "userAgent": 'Chrome',
        "icon": iconPath,
        "autoHideMenuBar": true,
        "width": 800,
        "height": 600,
        "minWidth": 980,
        "minHeight": 515,
        "webPreferences": {
          "plugins": true,
          "devTools": false
        },
        "titleBarStyle": "hidden",
        "darkTheme": true,
        "show": false
    },
    "loading": {
        userAgent: 'Chrome',
        icon: iconPath,
        frame: false,
        autoHideMenuBar: true,
        width: 400,
        height: 400,
        resizable: false,
        show: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        webPreferences: {
            devTools: false,
            zoomFactor: 1,
            nodeIntegration: true
        }
    }
}