let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

• Allah swt
• My ortu
• Nurutomo
• Ariffb
• BochilGaming(Istikmal)
• Benniismael
• Xteam
• AlyaaXd
• BOTCAHX
• Amirul Dev
• Syahrul/Lev Bot
• RaselComel
• Aniq
• Vania
• Hardianto
• Agus
• Maikeru
• Mursid S
• Zeks
• Penyedia Layanan API
• Orang-orang yang Berdonasi
• All Creator Bot
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
