const app = Vue.createApp({
    data() {
        return {
            //play: false,
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
        }
    },
    mounted() {
        //this.play = true;
        this.num = this.words[Math.floor((Math.random() * this.words.length))];
        this.mysteryWord = this.num[0];
        this.hint = this.num[1];
        console.log(this.mysteryWord);
    },
    methods: {

        userGuess() {
            if (this.mysteryWord.includes(this.guess)) {
                let splitWord = this.space.split("");
                console.log(splitWord)
                let index = this.mysteryWord.indexOf(this.guess)
                console.log(splitWord[index + 1] = this.guess)
                //this.space = splitWord[index + 1] = this.guess

                //console.log(splitWord)
                //this.space = splitWord.join()
                console.log(this.mysteryWord.indexOf(this.guess));
                console.log("includes")

            } else {
                console.log("does not include");
            }
            console.log(this.guess)
        }
    },
    computed: {
        randomWord() {
            //this.mysteryWord = this.words[Math.floor((Math.random() * this.words.length))];
            //this.hint = this.mysteryWord[1]
            for (let number = 0; number < this.mysteryWord.length; number++) {
                this.space += ' _ '
            }
            return this.space
        }
    }

}).mount('#app');