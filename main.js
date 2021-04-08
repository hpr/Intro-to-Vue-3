const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Footwear',
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      selectedVariant: 0,
      sizes: [ 'small', 'medium', 'large' ],
    }
  },
  methods: {
    addToCart() {
      this.cart++;
      this.variants[this.selectedVariant].quantity--;
    },
    removeFromCart() {
      this.cart--;
      this.variants[this.selectedVariant].quantity++;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSaleMsg() {
      return `${this.brand} ${this.product} is on sale`;
    }
  }
})
