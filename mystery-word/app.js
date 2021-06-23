const app = Vue.createApp({
    data() {
        return {
            guess: '',
            words: [
                ['apple', 'Mac maker'],
                ['obediance', "Dog trainer's goal"],
                ['sassed', 'Talked back'],
                ['prune', 'Trim a tree'],
                ['spices', 'Cinnamon and nutmeg'],
                ['lacerated', "Lanced"],
                ['ages', 'Years and years'],
                ['nape', 'Part of the neck'],
                ['moderate', 'Not extreme'],
                ['arcs', 'Curved lines'],
                ['vim', 'Robust energy']
            ],
            guesses: [],
            guessesList: '',
            mysteryWord: '',
            hint: '',
            space: '',
            strike: 0,
            result: null,
            gameOver: false,
            feedback: false,
            correct: false,
            playerScore: 0,
            compScore: 0,
            rounds: [],
            round: 1,
        }
    },
    mounted() {
        this.loadGame()
        console.log(this.mysteryWord)
    },
    methods: {
        userGuess() {
            this.guess = this.guess.toLowerCase()
            this.checkRepeats()
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
            }
            this.guess = ''
            this.checkGame()
            this.guessesList = this.guesses.join(" ");
        },
        checkRepeats() {
            if (!this.guesses.includes(this.guess)) {
                this.guesses.push(this.guess)
            }
        },
        checkGame() {
            if (this.space === this.mysteryWord) {
                this.result = true
                this.gameOver = true;
                this.correct = true
                this.playerScore++
                this.rounds.push({
                    number: this.round++,
                    playerScore: this.playerScore,
                    compScore: this.compScore
                })
            }
            if (this.strike === 6) {
                this.result = true
                this.gameOver = true;
                this.correct = false
                this.compScore++
                this.rounds.push({
                    number: this.round++,
                    playerScore: this.playerScore,
                    compScore: this.compScore
                })
            }
        },
        loadGame() {
            this.space = ''
            this.num = this.words[Math.floor((Math.random() * this.words.length))]
            this.mysteryWord = this.num[0];
            this.hint = this.num[1];
            for (let number = 0; number < this.mysteryWord.length; number++) {
                this.space += '_'
            }
            this.result = null
            this.strike = 0
            this.guess = ''
            this.gameOver = false
            this.guesses = []
            this.guessesList = ''
        },
        resetGame() {
            this.loadGame()
            this.rounds = []
            this.round = 1
            this.playerScore = 0
            this.compScore = 0
        }
    },
});

app.component('round-detail', {
    data() {
        return {
        }
    },
    props: {
        number: {
            type: Number,
            default: 0
        },
        resetGame: {
            type: Function
        },
    },
    template: `<div>
    <ul>
        <li>Round #: {{ number }}</li>
        <li><slot name="player-score"></slot></li>
        <li><slot name="comp-score"></slot></li>
    </ul>
</div>`
})

app.mount('#app');