const moment = require('moment');
moment().format(); 
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = process.argv.slice(2)
let now = new Date()

yargs(hideBin(process.argv))
  .command('current', 'Current date', () => {

    if (argv[1] === "--year" || argv[1] === "-y") {
        console.log(now.getFullYear())
    }
    else if (argv[1] === "--month" || argv[1] === "-m") {
        console.log(moment().format('MM'))
    }
    else if (argv[1] === "--date" || argv[1] === "-d") {
        console.log(moment().format('DD'))
    }
    else {
        console.log(now)
    }
  })

    .command('add', 'Future date', () => {
        let user_date = Number(argv[2])

        if (argv[1] === "-d" || argv[1] === "--date") {
            console.log(moment().add(user_date, 'days').format("YYYY MM DD"))
        }
        else if (argv[1] === "-m" || argv[1] === "--month") {
            console.log(moment().add(user_date, 'month').format("YYYY MM DD"))
        }
        else if (argv[1] === "-y" || argv[1] === "--year") {
            console.log(moment().add(user_date, 'year').format("YYYY MM DD"))
        }
        else {
        console.log(now)      
        }
    })

    .command('sub', 'Past date', () => {
        let user_date = Number(argv[2])

        if (argv[1] === "-d" || argv[1] === "--date") {
            console.log(moment().subtract(user_date, 'days').format("YYYY MM DD"))
        }
        else if (argv[1] === "-m" || argv[1] === "--month") {
            console.log(moment().subtract(user_date, 'month').format("YYYY MM DD"))
        }
        else if (argv[1] === "-y" || argv[1] === "--year") {
            console.log(moment().subtract(user_date, 'year').format("YYYY MM DD"))
        }
        else {
            console.log(now)      
            }
    })

  .parse()