const app = Vue.createApp({
    data() {
        return {
            guess: '',
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', 'Rushmore’s left edge'],
                ['pumpkin', 'Halloween’s favorite fruit'],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            guesses: [],
            mysteryWord: '',
            hint: '',
            space: '',
            strike: 0,
            result: null,
            gameOver: false,
            feedback: false,
            correct: false,
        }
    },
    mounted() {
        this.loadGame()
    },
    methods: {
        userGuess() {
            if (this.mysteryWord.includes(this.guess)) {
                let splitWord = this.space.split("");
                let mysteryArray = this.mysteryWord.split("")
                let indexes = []
                let index = mysteryArray.indexOf(this.guess)
                while (index != -1) {
                    indexes.push(index)
                    index = mysteryArray.indexOf(this.guess, index + 1)
                }
                indexes.forEach(element => splitWord[element] = this.guess);
                this.space = splitWord.join("")
            } else {
                this.strike++
                this.gameLose()
            }
            this.gameWin()
        },
        gameWin() {
            if (this.space === this.mysteryWord) {
                this.result = true
                this.gameOver = true;
                this.correct = true
            }
        },
        gameLose() {
            if (this.strike === 6) {
                this.result = true
                this.gameOver = true;
                this.correct = false
            }
        },
        loadGame() {
            this.space = ''
            this.num = this.words[Math.floor((Math.random() * this.words.length))];
            this.mysteryWord = this.num[0];
            this.hint = this.num[1];
            for (let number = 0; number < this.mysteryWord.length; number++) {
                this.space += '_'
            }
            this.result = null
            this.strike = 0
            this.guess = ''
            this.gameOver = false
        }
    },
    computed: {

    }

}).mount('#app');