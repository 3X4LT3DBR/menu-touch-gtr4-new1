const hmUI = require('hmUI')
const hmApp = require('hmApp')

const ITEMS = [
  ['Atividade', 'activity'],
  ['PAI', 'pai'],
  ['Frequência cardíaca', 'heart'],
  ['SpO₂', 'spo2'],
  ['Treino', 'workout'],
  ['Histórico de treino', 'workout_history'],
  ['Status de treino', 'training_status'],
  ['Estresse', 'stress'],
  ['Sono', 'sleep'],
  ['Clima', 'weather'],
  ['Música', 'music'],
  ['Alarme', 'alarm'],
  ['Calendário', 'calendar'],
  ['Lista de tarefas', 'todo'],
  ['Cronômetro', 'stopwatch'],
  ['Temporizador', 'timer'],
  ['Pomodoro', 'pomodoro'],
  ['Bússola', 'compass'],
  ['Altímetro/Barômetro', 'barometer'],
  ['Sol e Lua', 'sun_moon'],
  ['Respiração', 'breathing'],
  ['Encontrar telefone', 'find_phone'],
  ['Câmera', 'camera'],
  ['Telefone', 'phone'],
  ['Alexa', 'alexa'],
  ['Gravador', 'recorder'],
  ['Cartões', 'cards'],
  ['Ciclo', 'cycle'],
  ['Configurações', 'settings']
]

Page({
  build() {
    hmUI.setLayerScrolling(true)
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 80, y: 24, w: 320, h: 55,
      text: 'MENU TOUCH',
      text_size: 28,
      color: 0xffffff,
      align_h: hmUI.align.CENTER_H
    })

    ITEMS.forEach((item, i) => {
      const y = 90 + i * 64
      const btn = hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 55, y, w: 370, h: 54,
        radius: 18,
        normal_color: 0x252525,
        press_color: 0x444444,
        text: item[0],
        text_size: 22,
        color: 0xffffff
      })
      btn.addEventListener(hmUI.event.CLICK_UP, () => openNative(item[1]))
    })
  }
})

function openNative(route) {
  try {
    hmApp.startApp({ url: route, native: true })
  } catch (e) {
    hmUI.showToast({ text: 'Atalho não suportado' })
  }
}
