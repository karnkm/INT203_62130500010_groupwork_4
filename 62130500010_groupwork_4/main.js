const app = {
    data() {
        return {
            tasks: [{ image: '/images/leng.png', title: 'Leng' },
            { image: '/images/guy.png', title: 'Guy' },
            { image: '/images/pizza.jpg', title: 'Pizza' },
            { image: '/images/cake.jpg', title: 'Cake' }
            ],
            message:'',
            searchbutton: false
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },

        searchBarToggle() {
            this.searchbutton = !this.searchbutton
        }
    },

    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },
        searching(){
            console.log(this.tasks.filter((member)=> {
                return member.title.toLowerCase().includes(this.message.toLowerCase());
            }))
            return this.tasks.filter((member)=> {
                return member.title.toLowerCase().includes(this.message.toLowerCase());
            });
        }
    }


}
Vue.createApp(app).mount('#app')
