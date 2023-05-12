import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
const grup = './no.png'
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let name = await
conn.getName(m.sender)
let prova = {
"key": {
"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast","fromMe": false, "id": "Halo"
}, "message": {
"contactMessage": {
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let text = 🔱ꪶ͢≋🌀𝕍𝕒𝕝𝕙𝕒𝕝𝕝𝕒-𝔹𝕠𝕥🌀ꪶ͢≋🔱 🅼🅴🅽🆄
*ciao ${name} in base a quale dispositivo hai, esegui il comando!*
  ඬ ${usedPrefix}MENUANDROID
  ඬ ${usedPrefix}MENUIOS
  ඬ ${usedPrefix}NEWS
 🔱ꪶ͢≋🌀𝕍𝕒𝕝𝕙𝕒𝕝𝕝𝕒🌀ꪶ͢≋🔱
   https://chat.whatsapp.com/GNCeeOmtBoUFsHMaSvUi2A `.trim() 
conn.reply(m.chat, text, prova, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
