// // Modules to control application life and create native browser window
// const setupEvents = require('./installers/setupEvents')
// if (setupEvents.handleSquirrelEvent()) {
//     return;
// }

// const server = require('./server');

// const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('path')


// const electron = require('electron')

// // Enable live reload for Electron too
// require('electron-reload')(__dirname, {
//     // Note that the path to electron may vary according to the main file
//     electron: require(`${__dirname}/node_modules/electron`)
// });


// let mainWindow

// function createWindow() {
//     mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//         transparent: true,

//         webPreferences: {
//             nodeIntegration: true,
//         }
//     });

//     mainWindow.maximize();
//     mainWindow.show();

//     mainWindow.loadURL(
//             `file://${path.join(__dirname, 'view/index.html')}`
//         )
//         // Open the DevTools.
//     mainWindow.webContents.openDevTools()

//     mainWindow.on('closed', () => {
//         mainWindow = null
//     })


// }


// app.on('ready', createWindow)

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })

// app.on('activate', () => {
//     if (mainWindow === null) {
//         createWindow()
//     }
// })



// ipcMain.on('app-quit', (evt, arg) => {
//     app.quit()
// })


// ipcMain.on('app-reload', (event, arg) => {
//     mainWindow.reload();
// });



// // Modules to control application life and create native browser window
const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
    return;
}

const server = require('./server');

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')


const electron = require('electron')

// // Enable live reload for Electron too
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    // win.loadFile('/view/index.html')
    win.loadURL(
        `file://${path.join(__dirname, 'view/index.html')}`
    )

    // Open the DevTools.
    win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.