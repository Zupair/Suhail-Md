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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_37_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyRkxISmZaeFUycW1BN0FVR2xMVXF6TGZpL1Y2bzAyOFVCWkpKYjY5NCswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjY1MzU1MzU4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjRCQTVCRUQwRDRCMkRGRERCOEZGOTFFOEM3MDM5QjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTg2Njc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBTeEg4M3JqVFcySTNsWnNrdG45dmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjA0MmYwYjgtMWJjNC00OWM1LTgyOTMtZTRmMjNmNzAwYmM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgOTgsXG4gICAgICAxODMsXG4gICAgICA2NSxcbiAgICAgIDEzOSxcbiAgICAgIDI0OCxcbiAgICAgIDIwNCxcbiAgICAgIDUsXG4gICAgICAxNjcsXG4gICAgICAxNzMsXG4gICAgICAxMSxcbiAgICAgIDkxLFxuICAgICAgMTUxLFxuICAgICAgOTAsXG4gICAgICAxMDUsXG4gICAgICAyNDMsXG4gICAgICAxMzAsXG4gICAgICAyMCxcbiAgICAgIDE5NCxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDEzMCxcbiAgICAgIDUxLFxuICAgICAgMTY5LFxuICAgICAgMTQ3LFxuICAgICAgMTQwLFxuICAgICAgMTg3LFxuICAgICAgMjQyLFxuICAgICAgMjIzLFxuICAgICAgMzYsXG4gICAgICAxODAsXG4gICAgICAxMDksXG4gICAgICAxNzAsXG4gICAgICAyMjgsXG4gICAgICAyMzMsXG4gICAgICAxMjUsXG4gICAgICAxOTUsXG4gICAgICA2NSxcbiAgICAgIDE4NyxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2WkFCTEVYOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONlZwWndIRUpidW43UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI3ZVdVTHZxb0M1TWQrYlFqd0RPZjdBblZPS2h1TlB4RDVuVVZJTVZheG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTHNISUMzSnoweWpLSlhTajZQMXF3RWFkdHRjN0ZJZlF6Z1ZIaURlell3dnUzcExvdysvK2Z1YWJ5cEpwMjMxK0w3cXUrOUhEbWQ3OWdTT2xDaW5xQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0xCa20rNHpMZ1ZsOWlEWFR6UzBaamY5Rlg0T3pQYUpQeW9VRW1uaVdsKzZUUkNaa2VlU2IwUlhWNUw3UCtTcDR6Wnlpd24xK1hoT1ZNaFM0bVl0QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4NjY2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTJCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2ptUndHazNrYWdZai9BcXVYRG1DMTBtUXVWMnQ4amZoUHlPenEzUDcyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM4Mzc3NDM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
