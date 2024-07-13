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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_10_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4LFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2JKajJxZ2dVMDNaMlg2Y0Q1SDFnRjdBY2haR3p5UTdGQ1hVWGd1R3Y5Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDI3MTQzMjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1Q0E1QjRDQzI0NDcyOTJFNjE1NERDOUY5OEVDMDM2RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTgyMTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0dwX0xiaWJRM3EwTzNWTDhTdGo3UVwiLFxuICBcInBob25lSWRcIjogXCIxZDQ1YjNiMy0yNzc3LTRjY2EtOWQ2MS1hZjhiZjBlNzM3NzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTkwLFxuICAgICAgMjUxLFxuICAgICAgMyxcbiAgICAgIDE1MyxcbiAgICAgIDc4LFxuICAgICAgMTkxLFxuICAgICAgMzksXG4gICAgICAxNjQsXG4gICAgICAyMCxcbiAgICAgIDIxMyxcbiAgICAgIDMxLFxuICAgICAgMzksXG4gICAgICAyMzYsXG4gICAgICAxNzMsXG4gICAgICAyNDUsXG4gICAgICAyMDMsXG4gICAgICAxNzcsXG4gICAgICAxMzYsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDIyMixcbiAgICAgIDIyMSxcbiAgICAgIDIyMyxcbiAgICAgIDIxNCxcbiAgICAgIDIyNCxcbiAgICAgIDE2LFxuICAgICAgMTkzLFxuICAgICAgMjQwLFxuICAgICAgMTE4LFxuICAgICAgMTc3LFxuICAgICAgMTg5LFxuICAgICAgODQsXG4gICAgICA3MCxcbiAgICAgIDYzLFxuICAgICAgMTEzLFxuICAgICAgMTQ0LFxuICAgICAgMjU0LFxuICAgICAgMjQ1LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzlRS1pMTVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjcxNDMyNTE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNZXNzaWZ1bFwiLFxuICAgIFwibGlkXCI6IFwiMjM0NDE5NjY3MzYxODcwOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPbWlZUUdFTi9zeUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1d6WU0xQWZ5RHZ4ajExVmVYUWVRVTgyU3V0VFJyV2xYNlVBUUpEOGVBVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0ckVWTXUvREVqc1M3K3JKMjdYRHlsRk02QTB6SGtIWm0zQVhEL3M1WmNHU0ZSN2Z0d2hSOGVsaW5DSVZVTTRUNFNONkJRYlBrYmE4UUdzdm8wQzJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOR05zRDNhRmRCa1BmUzJzcjlZczVHaURzb0ZHOHlNYXoxcUM5M2hKREltaGppdGJOdmdVTG16c1dTbmUxcnZ0ZlNZcWJYNHhEV2RjdGVMMmgvV3ZEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDI3MTQzMjUxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NTgyMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd1ci5qc29uIjogIntcImtleURhdGFcIjpcIk5MSXpyVlRvbFNObFhaenl6ckVlSDVXS2xWZDZJazhmbVFuWmpiV1pQRUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYxOTE1MzY4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODU4MjE1NDYzXCJ9Igp9"  // PUT your SESSION_ID 


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
