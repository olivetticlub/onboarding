<template>
  <div class="q-gutter-md row">
    <q-input
      @input="handleInput"
      class="col-2"
      filled
      label="Disponibilità"
      min=0
      type="number"
      v-model.number="coupon.count"
      />

    <q-input
      @input="handleInput"
      class="col-grow"
      filled
      label="Descrizione"
      type="text"
      v-model="coupon.description"
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
