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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VathusJP20yWxQ6N643";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_04_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0dDNsRnhodDF1UVk3L2tBeHFZWDRZbjk3OUZzVmFjeU5ac1ltT3p1a1owPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNLVNjRFVDQVQ4LTJtWHlXd1JKUjRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2N2Y5NTRlLTdiZGItNDE5NC04M2M1LWI5ZWUyMWNhZjYwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAxMTEsXG4gICAgICAxODQsXG4gICAgICAxNDksXG4gICAgICAyNDcsXG4gICAgICAxNzIsXG4gICAgICAxMTIsXG4gICAgICAxODYsXG4gICAgICAyNixcbiAgICAgIDI0NixcbiAgICAgIDI0OCxcbiAgICAgIDI1MyxcbiAgICAgIDkwLFxuICAgICAgMTE2LFxuICAgICAgMTQ5LFxuICAgICAgNjksXG4gICAgICAxMTYsXG4gICAgICAxODUsXG4gICAgICAyMDUsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAyNDQsXG4gICAgICAzMixcbiAgICAgIDExMyxcbiAgICAgIDI1MSxcbiAgICAgIDIwMixcbiAgICAgIDEzMixcbiAgICAgIDkyLFxuICAgICAgMjM5LFxuICAgICAgNDQsXG4gICAgICAxMixcbiAgICAgIDE4MyxcbiAgICAgIDE1MixcbiAgICAgIDIzMSxcbiAgICAgIDE1MixcbiAgICAgIDQzLFxuICAgICAgMjA0LFxuICAgICAgMTExLFxuICAgICAgMjIyLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDQ2MTFFVEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZsck1NR0VQQ1N5YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTa1Z2alVFT2poNldCT01MSGN3TDB4YXhSYWZIOUlCcnZFZ0U0S2hEVVhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNST2pwVkNhcFkxckRGWDlzdE1LSDZlUDZJR2hCYmo5cDZiV2R3dmhKZ082UjBSd3NxUDFMK1VGaWErektPUGtPbzNMb2VHbUFPR0dtS3UxNzF0b0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZPbUQ4ZC9PVXhVdUFmRDRVRjlESGF5TmZXbldSYit1bnBsZkF6UmFZSWplMlFnbmZoUDlTNlUrT0JOcG9IeGFCbmNSbEVFSzlGU0JrcXZSNmswWENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NjAyNDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxHLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
