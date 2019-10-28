<template>
  <div class="q-gutter-md row">
    <q-input
      v-model.number="coupon.count"
      @input="handleInput"
      label="Disponibilità"
      type="number"
      filled
      class="col-2"
      />

    <q-input
      v-model="coupon.description"
      @input="handleInput"
      label="Descrizione"
      type="text"
      filled
      class="col-grow"
      />
  </div>
</template>

<script>
export default {
  data () {
    return {
      coupon: {
        count: 0,
        description: ''
      }
    }
  },
  model: {
    prop: 'coupon',
    event: 'input'
  },
  methods: {
    handleInput () {
      this.$emit('input', this.coupon)
    }
  }
}
</script>
