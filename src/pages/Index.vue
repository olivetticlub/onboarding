<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
      >
      <q-step
        :name="1"
        title="Informazioni sull'attività"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
        >

        <q-form class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Nome attività"
            hint="es. Panificio da Gianni"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Inserisci il nome della tua attività']"
            />

          <q-input
            filled
            v-model="vatNumber"
            label="Partita IVA"
            hint="es. 09123456789"
            lazy-rules
            :rules="[ val => val !== null && val !== '' || 'Inserisci la tua partita IVA' ]"
            />

          <q-input
            filled
            v-model="address"
            label="Indirizzo"
            lazy-rules
            :rules="[ val => val !== null && val !== '' || 'Inserisci il tuo indirizzo' ]"
            />

          <q-input
            filled
            v-model="ateco"
            label="Codice ATECO"
            hint="es. 10.71.10"
            lazy-rules
            :rules="[ val => val !== null && val !== '' || 'Inserisci il tuo indirizzo' ]"
            />

        </q-form>

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Procedi" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Crea i tuoi primi coupon"
        caption="Facoltativo"
        icon="create_new_folder"
        :done="step > 2"
        :header-nav="step > 2"
        >

        <div class="q-gutter-md row">
          <q-input
            v-model.number="couponCount"
            label="Disponibilità"
            type="number"
            filled
            class="col-1"
            />

          <q-input
            v-model="couponDescription"
            label="Descrizione"
            type="text"
            filled
            class="col-grow"
            />
        </div>

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Procedi" />
        <q-btn flat @click="step = 1" color="primary" label="Indietro" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Conferma e registrati"
        icon="add_comment"
        :header-nav="step > 3"
        >

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      step: 1,
      name: '',
      address: '',
      ateco: '',
      vatNumber: '',
      couponCount: 100,
      couponDescription: ''
    }
  }
}
</script>
