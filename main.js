const { BrowserWindow, app} = require("electron")
const createWindow = ()=> {
        const win = new BrowserWindow({
            width:600,
            height:900
        })
        win.loadFile('index.html');
    
}
app.whenReady().then(createWindow);