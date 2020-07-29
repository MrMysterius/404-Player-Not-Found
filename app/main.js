//
//Module Import
//

const { app, BrowserWindow, Tray, Menu } = require('electron');

const path = require('path');
const fs = require('fs');

const inject = require('./lib/injection.js');
const defaultWinConfig = require('./config/default-config.js');
//LAST SESSION IMPORT AND CHECK IF AVAIABLE
if (!fs.existsSync(path.join(__dirname, '/config/lastSession.json'))) {
  fs.writeFileSync(path.join(__dirname, '/config/lastSession.json'), JSON.stringify({default: true}), 'utf-8');
}
let lastSession = require('./config/lastSession.json');



//
//SOME OBJECTS
//
const tracker = {
  tracked: false,
  height: 0,
  width: 0,
  x: 0,
  y: 0,
  maximized: false
}
const temp = {};



//
//MAIN
//

//Quit If Not Avaiable
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindows = () => {
  const loadingWindow = new BrowserWindow(defaultWinConfig.loading);
  let mainWinConfig = defaultWinConfig.main;
    mainWinConfig.height = (lastSession.height) ? lastSession.height:mainWinConfig.height;
    mainWinConfig.width = (lastSession.width) ? lastSession.width:mainWinConfig.width;
    mainWinConfig.x = (lastSession.x) ? lastSession.x:mainWinConfig.x;
    mainWinConfig.y = (lastSession.y) ? lastSession.y:mainWinConfig.y;
  const mainWindow = (lastSession.default != undefined && !lastSession.default) ? new BrowserWindow(defaultWinConfig.main) : new BrowserWindow(mainWinConfig);

  //Hiding Main Window For Load
  mainWindow.hide();
  mainWindow.on('close', (ev)=>{
    ev.preventDefault();
    mainWindow.hide();
    temp.mainWindow = mainWindow;
  })
  
  //Loading
  loadingWindow.loadFile(path.join(__dirname, '/loading/loading.html'));
  loadingWindow.webContents.on('did-finish-load', ()=>{

    loadingWindow.show();
    start();
    
    function start() {
      mainWindow.loadURL('https://soundcloud.com');

      mainWindow.webContents.on('did-finish-load', ()=>{
        //Resetting Zoom And Locking
        mainWindow.webContents.setZoomFactor(1.0);
        mainWindow.webContents.setZoomLevel(0);
        mainWindow.webContents.setVisualZoomLevelLimits(1,1);
        
        inject(mainWindow);

        //Wait For Injection to tak place
        setTimeout(()=>{
          if (lastSession.default != undefined && !lastSession.default && lastSession.maximized) {
            mainWindow.maximize();
          }
          loadingWindow.close();
          mainWindow.show();
        },1000);

        //Tracker
        temp.trackerIntervalId = setInterval(()=>{
          tracker.tracked = true;
          tracker.maximized = (mainWindow != null && mainWindow != undefined) ? mainWindow.isMaximized():tracker.maximized;
          tracker.width = (mainWindow != null && mainWindow != undefined && !tracker.maximized) ? mainWindow.getSize()[0]:tracker.width;
          tracker.height = (mainWindow != null && mainWindow != undefined && !tracker.maximized) ? mainWindow.getSize()[1]:tracker.height;
          tracker.x = (mainWindow != null && mainWindow != undefined && !tracker.maximized) ? mainWindow.getPosition()[0]:tracker.x;
          tracker.y = (mainWindow != null && mainWindow != undefined && !tracker.maximized) ? mainWindow.getPosition()[1]:tracker.y;
        },10);
      })
    }
  })
  
};

app.on('ready', ()=>{
  tray = new Tray(path.join(__dirname, 'assets/images/icon.ico'));
  const click = (menuItem, browserWindow, event) => {
    switch (menuItem.id) {
      case 0:
        clearInterval(temp.trackerIntervalId);
        if (tracker.tracked) {
          lastSession.default = false;
          lastSession.height = tracker.height;
          lastSession.width = tracker.width;
          lastSession.x = tracker.x;
          lastSession.y = tracker.y;
          lastSession.maximized = tracker.maximized;
          fs.writeFileSync(path.join(__dirname, 'config/lastSession.json'), JSON.stringify(lastSession), 'utf-8');
        }
        process.exit();
        break;
      case 1:
        BrowserWindow.getAllWindows().forEach((win) => {
          if (win) {
            win.setPosition(0,0);
            win.setSize(800,600);
            win.maximize();
          }
        });
        break;
    }
  }
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Position Reset', type: 'normal', click: click, id: 1},
    {label: 'Quit', type: 'normal', click: click, id: 0}
  ])
  tray.setToolTip('404 Player Not Found');
  tray.on('click', ()=>{
    temp.mainWindow.show();
    temp.mainWindow.focus();
  })
  tray.setContextMenu(contextMenu);

  createWindows();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('-quit', (ev)=>{
  ev.preventDefault();
})