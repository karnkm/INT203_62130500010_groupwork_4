const app = {
    data() {
        return {
            tasks: [{ image: '/images/leng.png', title: 'Leng' },
            { image: '/images/guy.png', title: 'Guy' },
            { image: '/images/pizza.jpg', title: 'Pizza' },
            { image: '/images/cake.jpg', title: 'Cake' }
            ],
            message: '',
            searchbutton: false,
            searchText: '',
            isBigPicture: false,
            bigPictureSrc: '',
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },

        searchBarToggle() {
            this.searchText = ''
            this.searchbutton = !this.searchbutton
        },
        search() {
            this.message = this.searchText;
        },
        bigPic(index) {
            
            this.isBigPicture = true;
            this.bigPictureSrc = this.tasks[index].image;
        }
    },

    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },
        searching() {
            return this.tasks.filter((member) => {
                return member.title.toLowerCase().includes(this.message.toLowerCase());
            });
        }
    }


}
Vue.createApp(app).mount('#app')
