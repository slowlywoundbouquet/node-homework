console.log('Давайте сыграем в угадай число ;)')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 1
let gameNum = Math.round(Math.random() * 100)

const game = () => {
    if (count <= 10) {
        readline.question('Введите число от 0 до 100:', user_number => {
            user_number = parseInt(user_number)
            console.log(`Попытка №${count}`)

            if (user_number === gameNum) {
                console.log(`Вы угадали загаданное число "${gameNum}"! Поздравляю! :)`)
                readline.close()
            } else if (user_number > gameNum) {
                console.log(`Меньше\n`)
                ++count
                game()
            } else if (user_number < gameNum) {
                console.log(`Больше\n`)
                ++count
                game()
            }
        })
    } else {
        console.log('Попытки угадать число закончились :(')
        readline.close()
    }
}
game()