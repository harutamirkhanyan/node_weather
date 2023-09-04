import chalk from 'chalk'
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
}

const printSuccess = (error) => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + error);
}

const printHelp=()=>{
  console.log(
    dedent(`${chalk.bgCyan('HELP')}
    No option - show weather
    -s [CITY] install weather
    -h for help
    -t [API_KEY] for save token
    `)
    );
}

export {printError, printSuccess, printHelp}