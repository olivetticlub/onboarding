<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
      :contracted="$q.screen.lt.md"
      >

      <q-step
        :name="0"
        title="Benvenuto"
        icon="filter_1"
        :done="step > 0"
        :header-nav="step > 0"
        >

        <q-form class="q-gutter-lg">
          <h2>Benvenuto in Olivetti Club!</h2>
          <p>Registra il tuo negozio e genera i coupon, così verranno distribuiti dagli altri commercianti e i loro clienti verranno a trovarti.</p>
        </q-form>

        <q-stepper-navigation>
          <q-btn @click="() => { done0 = true; step = 1 }" color="primary" label="Inizia" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="1"
        title="Informazioni sull'attività"
        icon="filter_2"
        :done="step > 1"
        :header-nav="step > 1"
        >

        <p class="text-body1 text-weight-medium">Inserisci i dati del tuo negozio, serviranno per farti conoscere alle persone più vicine a te.</p>

        <q-form class="q-gutter-lg">
          <div class="q-gutter-xl row justify-evenly">
            <q-input
            size="40"
              filled
              v-model="name"
              label="Nome attività"
              hint="es. Panificio da Gianni"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Inserisci il nome della tua attività']"
              />

            <q-input
            size="40"
              filled
              v-model="vatNumber"
              label="Partita IVA"
              hint="es. 09123456789"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || 'Inserisci la tua partita IVA' ]"
              />
          </div>

          <div class="q-gutter-xl row justify-evenly">
            <q-input
            size="40"
              filled
              v-model="address"
              label="Indirizzo"
              hint="via Verdi, 15"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || 'Inserisci il tuo indirizzo' ]"
              />

            <q-input
            size="40"
              filled
              v-model="ateco"
              label="Codice ATECO"
              hint="es. 10.71.10"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || 'Inserisci il tuo indirizzo' ]"
              />
          </div>

        </q-form>

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Procedi" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Crea i tuoi primi coupon"
        icon="filter_3"
        :done="step > 2"
        :header-nav="step > 2"
        >

        <p class="text-body1 text-weight-medium">Crea i tuoi coupon, scegli quanti distribuire e che valore hanno. Ad esempio "3 coupon per una bibita omaggio se compri una pizza"</p>

        <div v-for="idx in coupons.length" v-bind:key="idx">
          <CouponField v-model="coupons[idx-1]" />
        </div>

        <div class="q-mt-md">
          <q-btn
            @click="coupons.push({ count: 0, description: '' })"
            label="Aggiungi"
            />

          <q-btn
            @click="coupons.pop()"
            color="red"
            label="Rimuovi"
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
        icon="filter_4"
        :header-nav="step > 3"
        >

      <p class="text-body1 text-weight-medium">Controlla di aver inserito le informazioni corrette e manda i coupon ai membri del club! </p>

        <h3>Conferma i tuoi dati</h3>
        <p><strong>Nome attività</strong>: {{ name }}</p>
        <p><strong>Indirizzo</strong>: {{ address }}</p>
        <p><strong>Codice ATECO</strong>: {{ ateco }}</p>
        <p><strong>Partita IVA</strong>: {{ vatNumber }}</p>

        <h4>I tuoi coupon</h4>
        <div v-for="coupon in coupons" :key="coupon.description">
          <p><strong>{{ coupon.count }}x</strong> {{ coupon.description }}</p>
        </div>

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import CouponField from '../components/CouponField'

export default {
  name: 'PageIndex',
  components: { CouponField },
  data () {
    return {
      step: 0,
      name: '',
      address: '',
      ateco: '',
      vatNumber: '',
      coupons: [
        { count: 0, description: '' }
      ]
    }
  }
}
</script>
