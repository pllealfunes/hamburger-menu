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
        for (let number = 0; number < this.mysteryWord.length; number++) {
            this.space += '_'
        }
        console.log(this.mysteryWord);
    },
    methods: {
        userGuess() {
            if (this.mysteryWord.includes(this.guess)) {
                let splitWord = this.space.split("");
                console.log(splitWord)
                let index = this.mysteryWord.indexOf(this.guess)
                console.log(splitWord[index] = this.guess)
                splitWord[index] = this.guess
                //splitWord.pop()
                console.log(splitWord)
                //splitWord.splice(index + 1, 1)
                this.space = splitWord.join("")
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

    }

}).mount('#app');