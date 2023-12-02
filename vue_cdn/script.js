const { createApp } = Vue;
const App = {
    template: '<h1>Привет</h1>'
};

createApp({
    data() {
        return {
            list: [],
            item: ''
        }
    },
    methods: {
        add_list() {
            this.list.push(this.item);
            this.item = '';
            console.log(this.list);
        }
    },
}).mount('#app');
