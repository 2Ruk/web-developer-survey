<template>
  <v-main class="grey lighten-5">
    <v-container class="justify-center" >
      <v-card outlined width="1000" elevation="1" class="ma-auto">
        <v-img
          class="ma-auto "
          src="https://pbs.twimg.com/media/DP8PRviVQAA6oJZ?format=png"
          lazy-src="https://pbs.twimg.com/media/DP8PRviVQAA6oJZ?format=jpeg"
          max-width="500"
          max-height="500"/>
        <v-divider class="mx-4 ma-2"></v-divider>
        <v-list
          dense
          nav
        >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.href"
        >
        <v-list-item-icon>
        <v-icon>{{item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-card>
    </v-container >
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Home extends Vue {
  items = [
    { title: '질문지',href:'question', icon: 'mdi-book-open-page-variant-outline' },
    { title: '결과 보고서',href:'result', icon: 'mdi-chart-bar' },
  ]
  right = null
}
</script>
