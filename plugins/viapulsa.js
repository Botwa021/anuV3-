let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ UNTUK PEMBAYARAN VIA PULSA
║ ⬣ ISI SENDIRI TIDAK MELAYANI VIA PULSA
║ ⬣ SAAT DI TRANSFER PULSA KE SEDOT 
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
