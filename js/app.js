const app = Vue.createApp({
    data() {
        return {
            count: 0,
            incrementStep: 1,
            decrementStep: 1
        };
    },
    methods: {
        increment() {
            this.count += this.incrementStep;
        },
        decrement() {
            if (this.count == 0)
                return;
            this.count -= this.decrementStep;
        },
        setStep(type, newStep = 1) {
            if (type == "increment") {
                this.incrementStep = parseInt(newStep);
                return;
            }
            this.decrementStep = parseInt(newStep);
            
        }
    }
});

const mount = app.mount("#app");