import dayjs from 'dayjs'

const hour = dayjs().hour()

const isMorning = hour >= 6 && hour < 12

const isAfternoon = hour >= 12 && hour < 19

const isNight = hour >= 19 || hour < 6

export const backgroundImage = `url(bg/bg${
    isMorning ? 2 : isAfternoon ? 1 : 3
}.jpg)`

export const randomBg = `url(bg/bg${Math.floor(Math.random() * 3) + 1}.jpg)`
