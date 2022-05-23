let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭──『 𝘿𝙤𝙣𝙖𝙨𝙞 • 𝙀-𝙢𝙤𝙣𝙚𝙮 』──⬣
│⬣ 𝘋𝘢𝘯𝘢 : 088233832771
│⬣ 𝘎𝘰𝘱𝘢𝘺 : 088233832771
╰────────⬣
╭──「 𝙉𝙊𝙏𝙀 」──⬣
│ > Owner? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰──────────⬣
`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
