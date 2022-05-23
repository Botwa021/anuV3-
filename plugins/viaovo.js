let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ UNTUK PEMBAYARAN VIA OVO  
║ ⬣ ISI SENDIRI GA PUNYA OVO SOALNYA
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viaovo$/i

module.exports = handler
