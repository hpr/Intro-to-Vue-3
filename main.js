const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      description: 'Footwear',
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ],
      sizes: [ 'small', 'medium', 'large' ],
    }
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      this.cart--;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    }
  }
})
