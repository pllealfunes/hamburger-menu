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
            space: ''
        }
    },
    methods: {
        userGuess() {
            if (this.mysteryWord[0].includes(this.guess)) {
                this.space.indexOf(this.mysteryWord[0].indexOf(this.guess) + 1).replace(' - ', this.guess)
                console.log(this.mysteryWord[0].indexOf(this.guess));
                console.log("includes")
                console.log(this.mysteryWord[0].indexOf(this.guess))
                console.log(this.space.length)
            } else {
                console.log("does not include");
            }
            console.log(this.guess)
        }
    },
    computed: {
        randomWord() {
            this.mysteryWord = this.words[Math.floor((Math.random() * this.words.length))];
            for (let number = 0; number < this.mysteryWord[0].length; number++) {
                this.space += ' _ '
            }
            console.log(this.mysteryWord);
            return this.space
        }
    }

}).mount('#app');