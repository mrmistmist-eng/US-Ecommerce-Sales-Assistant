const {app,BrowserWindow,Notification,Tray,Menu,nativeImage} = require("electron");
const path=require("path");
let win,tray;
function create(){
 win=new BrowserWindow({width:1360,height:880,minWidth:1050,minHeight:700,show:false,
  webPreferences:{contextIsolation:true,nodeIntegration:false}});
 win.loadFile(path.join(__dirname,"index.html"));
 win.once("ready-to-show",()=>win.show());
 win.on("close",e=>{if(!app.isQuiting){e.preventDefault();win.hide();}});
 tray=new Tray(nativeImage.createEmpty());
 tray.setToolTip("美国电商销售助手");
 tray.setContextMenu(Menu.buildFromTemplate([
  {label:"打开销售助手",click:()=>win.show()},
  {label:"隐藏窗口",click:()=>win.hide()},
  {type:"separator"},
  {label:"退出",click:()=>{app.isQuiting=true;app.quit();}}
 ]));
}
app.whenReady().then(create);
app.on("window-all-closed",()=>{});
