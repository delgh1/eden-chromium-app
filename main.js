/* Author: Jing Luo, Mar 2023
 * Email: szmun.luoj@gmail.com
 */

const electron = require ('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

let win
if (require('electron-squirrel-startup')) app.quit();

app.on('ready', _ => {                      // FUNC001
    win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'favicon.png'
    })
    const template = [
        {
            label: 'Quit',
            role: 'quit'
        },
        {
            label: 'Refresh',
            role: 'reload'
        }
    ]
    const menu = Menu.buildFromTemplate (template)
    Menu.setApplicationMenu (menu)

    win.loadURL('https://bbs.edengroup.co.jp')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
