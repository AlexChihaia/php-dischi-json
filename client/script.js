const { createApp } = Vue;

createApp({
    data() {
        return {
            apiURL: '../server/server.php',
            discs: [],
        }
    },
    methods: {
        getDiscs() {
            axios.get(this.apiURL).then(response => {
                this.discs = response.data;
            })
        }
    },
    mounted() {
        this.getDiscs();
    }

}).mount('#app')