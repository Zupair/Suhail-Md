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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIityaG40a3EyMnREVVdkdXVSTVJqWlBscUJiSzNCd2pwSGtoUldPWmVoNWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFQRm1UVFg3UXZxUVR4SXpKMzBJT0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQyYTYxNzMtNjIwYy00MjllLWE5YzAtNWQ0NWZkM2FiNDAzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDEwMSxcbiAgICAgIDE3NyxcbiAgICAgIDkwLFxuICAgICAgMTQwLFxuICAgICAgMTQzLFxuICAgICAgMzAsXG4gICAgICA5NixcbiAgICAgIDI0MSxcbiAgICAgIDE4MSxcbiAgICAgIDEzNCxcbiAgICAgIDc1LFxuICAgICAgMixcbiAgICAgIDM1LFxuICAgICAgMjEwLFxuICAgICAgMTksXG4gICAgICAxOTUsXG4gICAgICAzNSxcbiAgICAgIDE1OCxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMDMsXG4gICAgICA1MixcbiAgICAgIDE1MixcbiAgICAgIDE1NCxcbiAgICAgIDQ2LFxuICAgICAgNyxcbiAgICAgIDYzLFxuICAgICAgMTYxLFxuICAgICAgMjA2LFxuICAgICAgMjI1LFxuICAgICAgMTgsXG4gICAgICAzOCxcbiAgICAgIDIzMCxcbiAgICAgIDE0MSxcbiAgICAgIDI0MSxcbiAgICAgIDE1OSxcbiAgICAgIDAsXG4gICAgICAzMSxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWktOQU1FR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjU0MzIyNzQ1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTIwMTU4NjMwNzE2MTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096S3NXOFE4ZjZEdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUVOZ2REazR6bDFyajl5TWN0elpwWldNL2M4dlhENTVzcXd5V1MwMTNpND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZNVVTaElWQTFuOEl5S3ZXT3NVNm9ZOTZwL1pQMVZuL2l1TWJkWDRzZ2JXSXpPMEI3T3FFajcyaHZySUR2MjFFOUV0c29WREtOR3pWU29MV0Y0U3dBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCeEYza0ZycVJBOXJ2V3RzaGtzd05NR1V0RHo2bTdJUDJobHJ5VENKM0VFL1p5N3F1Q3hNQWpWOXY3aXdrc0Q0TitVQ0hibUZMU3EyeVgxeDdrdGVDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTQzMjI3NDU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODI3MTg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUc0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwVlV6ZWx1S1FjSGJHK2FyQXFOelkrSXdZWkRsQ0RkbjRBRnc1QW0xcUJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzU5NjI2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTgyNzEyNzQ1OVwifSIKfQ=="  // PUT your SESSION_ID 


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
