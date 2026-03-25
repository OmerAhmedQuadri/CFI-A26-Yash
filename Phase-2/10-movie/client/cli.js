import rs from 'readline-sync'
import chalk from 'chalk'
import axios from 'axios'

class CLI {
    #BASE_URL = 'http://localhost:3000/api/movie/'
    constructor() {
        this.movies = null
        this.app = axios.create({
            baseURL: this.#BASE_URL,
            timeout: 5000,
            validateStatus: (status) => status < 500
        })
    }

    async start() {
        this.OPTIONS = {
            1: this.getMovies.bind(this),
            2: this.listMovie.bind(this),
            3: this.rateMovie.bind(this),
        }

        console.log('====MOVIES====');
        console.log('1 - Get All Movies');
        console.log('2 - List a New Movie');
        console.log('3 - Rate a Movie');
        console.log('0 - Exit');
        const choice = rs.questionInt("Enter your choice: ")
        if (!choice) {
            console.log(chalk.redBright('Exiting...'));
            process.exit(0)
        }
        if (!this.OPTIONS[choice]) {
            console.log(chalk.redBright('Invalid Choice!'));
            return await this.start()
        }
        await this.OPTIONS[choice]()
        await this.start()
    }

    async getMovies() {
        try {
            const response = await this.app.get('/all')
            if (!response.data.status)
                return console.log(chalk.redBright(response.data.message));
            console.log(chalk.greenBright(response.data.message));
            console.log(chalk.blueBright('------------------------'));
            this.movies = response.data.data
            this.movies.forEach((e, i) => {
                console.log('id: ' + e._id);
                console.log('Title' + (i + 1) + ': ' + e.title);
                console.log('Description: ' + e.description);
                console.log('Rating: ' + e.rating);
                console.log(chalk.blueBright('------------------------'));
            });
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async listMovie() {
        try {
            const title = rs.question('Enter the title of the movie: ')
            const description = rs.question('Enter the description of the movie: ')

            const response = await this.app.post('/list', { title, description })
            if (!await response.data.status)
                return console.log(chalk.redBright(response.data.message));

            console.log(chalk.greenBright(response.data.message));

        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async rateMovie() {
        try {
            const id = rs.question('Enter id of movie: ')
            const rating = parseInt(rs.questionInt("Enter rating between 1 to 5: "))

            // if(rating>5 || rating<1){
            //     return console.log(chalk.red('Rating not is range'));
            // }
            const response = await this.app.put('/rate', { id, rating })
            if (!response.data.status)
                return console.log(chalk.redBright(response.data.message));

            console.log(chalk.greenBright(response.data.message));
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }
}

const cli = new CLI();

await cli.start()