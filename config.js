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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_37_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMEZXVHJPWHFYd081WUdxdmlQZk50aHlMLzRpbmNWVGZNOTVaSi9OTFdldz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2NTQzMjI3NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4Nzc3ODBFNjJEOEU3RTNGNEM3M0FCNkJEMzNCRUUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjExOTgyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6LWxDR2J1eVJ2cXBTM2V6bENCbzNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1OGIzNjFjLTI0MTYtNDYxMy05YzVmLWU4MThlYmIwZGQ2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxNzAsXG4gICAgICAyMjUsXG4gICAgICAzNCxcbiAgICAgIDM1LFxuICAgICAgMjMyLFxuICAgICAgMjQ2LFxuICAgICAgMjE2LFxuICAgICAgMzcsXG4gICAgICA2NyxcbiAgICAgIDE4MyxcbiAgICAgIDI0OCxcbiAgICAgIDE0NyxcbiAgICAgIDc4LFxuICAgICAgMTAyLFxuICAgICAgMjMzLFxuICAgICAgNzYsXG4gICAgICAxODcsXG4gICAgICAxNzEsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjUwLFxuICAgICAgMTU5LFxuICAgICAgMTQzLFxuICAgICAgMjgsXG4gICAgICAzMCxcbiAgICAgIDEyMCxcbiAgICAgIDI0OSxcbiAgICAgIDE5OSxcbiAgICAgIDQxLFxuICAgICAgMTQ5LFxuICAgICAgMjIsXG4gICAgICAxOTIsXG4gICAgICAyMjAsXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICAxNjEsXG4gICAgICA1OCxcbiAgICAgIDE4OSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZMVZUOVA3MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjU0MzIyNzQ1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTIwMTU4NjMwNzE2MTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zS3NXOFFpZTJWdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUVOZ2REazR6bDFyajl5TWN0elpwWldNL2M4dlhENTVzcXd5V1MwMTNpND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFWnc2TVhyR1UzTUYxN012akhEQzBaRHRPWmxXS3c2TmplVGRzV01STU9ZMkljN1oxZkpBNzg5ajVNNENOb2YzWTlaeGppWVFlbW1KS2Z4UCtWVzFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYNmVoNUhEam9YeHVHbnRiUVZuMUVsVDhyalBVby85VjhBTkVPeGtwVXBHVW0vVGpMSFFYK1ZKSkovUXVTbEdRSG9RRUhsak50aEVEc1ZQQUVoNWJqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTQzMjI3NDU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTE5ODIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUc1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0V3lybm5pd1FKRmtoZ3pnMWh6SXlDVXgvM0F5QUF2by9QUmhEem96QzFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzU5NjI2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODI3MTkwMDA1XCJ9Igp9"  // PUT your SESSION_ID 


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
