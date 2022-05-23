let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙊𝙒𝙉𝙀𝙍 ´ˎ˗
│ ✎ _Nama_ : Mursid S
│ ✎ _Sekolah_ : SMKN 2 Wonosari
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Yogyakarta
│ ✎ _Status_ : Pelajar SMK
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
│ ✎ _Official Grup 4_ :
│    https://chat.whatsapp.com/L2Fh6QqQEdrEEXvU8Kth73
│ ✎ _Instagram_ : 
│    instagram.com/mursid.st
│ ✎ _WhatsApp_ :
│    wa.me/6288233832771
╰───────────────────
`.trim(), m)
}

handler.help = ['infomursid']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler
