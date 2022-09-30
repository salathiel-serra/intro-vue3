const productDetail = {
    template: `
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">
            {{product.description}}
            <hr>
            <small v-if="product.stars > 0"> Classificação: {{product.stars}}</small>
            <small v-else> Sem Classificação </small>
        </p>

        <a v-if="!productInCart" href="#" class="btn btn-outline-primary" v-on:click.prevent="addCart(product)"> Adicionar </a>
        <a v-else href="#" class="btn btn-outline-danger" v-on:click.prevent="removeCart(product)"> Remover </a>
    `,

    emits: [
        'adding-product-to-cart',
        'removing-product-to-cart'
    ],

    props: {
        product: {
            type: Object,
            required: true
        },
        productInCart: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            example: 'test123...'
        }
    },

    methods: {
        addCart(product) {
            this.$emit('adding-product-to-cart', product);
        },

        removeCart(product) {
            this.$emit('removing-product-to-cart', product);
        }
    },
}

app.component('product-detail', productDetail);