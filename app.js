const myApp = {
    data() {
        return {
            title: 'Vue 3 | Introdução',
            name: 'Thiel',
            lastName: 'Serra',
            products: [
                {
                    title: 'Produto 001',
                    description: '1. Lorem ipsum BLA BLA BLA ...',
                    image: './assets/images/image-test01.jpg',
                    stars: 3
                },
                {
                    title: 'Produto 002',
                    description: '2. Lorem ipsum BLA BLA BLA ...',
                    image: './assets/images/image-test02.jpg',
                    stars: 5
                },
                {
                    title: 'Produto 003',
                    description: '3. Lorem ipsum BLA BLA BLA ...',
                    image: './assets/images/image-test02.jpg',
                    stars: 0
                }
            ],
            cart: []
        };
    },

    computed: {
        fullName() {
            return this.name +' '+ this.lastName;
        }
    },
    
    methods: {
        addCart(product) {
            this.cart.push(product);
        },

        itemInCart(product) {
            return this.cart.indexOf(product) != -1;
        },

        removeCart(product) {
            this.cart =  this.cart.filter((productItem, index) => {
                return product != productItem;
            });
        }
    }
}

const app = Vue.createApp(myApp);