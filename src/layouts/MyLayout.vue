<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          OlivettiClub Onboarding
        </q-toolbar-title>
         <q-btn flat round dense icon="more_vert" >
           <q-menu auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section><q-btn flat round dense  icon="delete" @click="resetDb"/></q-item-section>
              </q-item>
            </q-list>
        </q-menu>
         </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:5000'
})

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    resetDb () {
      var self = this
      httpClient.get('/reset')
        .then(function (response) {
          self.$q.notify({
            message: 'Database resettato',
            timeout: 300
          })
        })
    }
  }
}
</script>
