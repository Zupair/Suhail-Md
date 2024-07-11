const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252653553580";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "False";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 100
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_07_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKUEtlbkk2V3JQTGc0RkdTUVRja2t5T2QyYjdrSTgycHlzcERFY080dVFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtNHBzNGtzcVJjeUZ2ai1YdjJhNTF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkwOGFmZmFiLTcyNzUtNGEzYS04MjBkLTI0Mzc4NTBjODgyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAyMTksXG4gICAgICAyOSxcbiAgICAgIDE4OSxcbiAgICAgIDExNixcbiAgICAgIDE5NCxcbiAgICAgIDIwMyxcbiAgICAgIDEsXG4gICAgICAxNSxcbiAgICAgIDk0LFxuICAgICAgMTg2LFxuICAgICAgMTcxLFxuICAgICAgMjIyLFxuICAgICAgMTIwLFxuICAgICAgMTk4LFxuICAgICAgMTE1LFxuICAgICAgMTY5LFxuICAgICAgNDMsXG4gICAgICAxNDEsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDIwOCxcbiAgICAgIDU2LFxuICAgICAgNDcsXG4gICAgICAxOTQsXG4gICAgICAxMDMsXG4gICAgICAxNjUsXG4gICAgICA1NyxcbiAgICAgIDQzLFxuICAgICAgMTM5LFxuICAgICAgMjEyLFxuICAgICAgMTIyLFxuICAgICAgOTIsXG4gICAgICAyNDIsXG4gICAgICAxMzQsXG4gICAgICAxODAsXG4gICAgICAyMzYsXG4gICAgICAyNTUsXG4gICAgICA0NCxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUkM4RzRHR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo4NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMlZwWndIRUlleXY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI3ZVdVTHZxb0M1TWQrYlFqd0RPZjdBblZPS2h1TlB4RDVuVVZJTVZheG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRzQvY3dmWlYvVllON0RKTXc3Rm55WlBIdlg5RU8rdnlKU1BGcXJlMVR0R2hwVVZhMW1COHVlcnZkbFNlakpPc0Zuank1YUpBT0xiaStqUlJkTUwwQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS25iblc0cmMrSi95WFdFZG5CMWd1YmFmR3Jsb0N5bTcweUNpdnBFenRncEV0NDNFRjlmSHRHampFeUdoUHh4b1FFSkZnZEZZVnVXYzc3SktwcytuQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcwMzI0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJKS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkpLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGZLQ2lPeFdmQXF0T1F3Q05uaXR5c25vcXBOdnJQb1U5bEd0WXMvbmQ1az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM4Mzc3NDUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNjIzMzc0OTM0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ZUPAIR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
