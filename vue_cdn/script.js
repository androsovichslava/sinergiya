const { createApp } = Vue;
const App = {
    template: '<h1>Привет</h1>'
};

createApp({
    data() {
        return {
            message: 'Hello'
        }
    }
}).mount('#app');
