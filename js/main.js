const app = new Vue({
    el:'#app',
    data: {
        cards: null,
    },
    created() {
        this.getCards();
    },
    methods: {
        getCards() {
            axios
               .get('http://localhost/php-ajax-dischi/script/database.php')
               .then(response => {
                   console.log(response.data);
                   this.cards = response.data;
               })
               .catch(err => {
                   console.log(err);
               })
        }
    }
}); 