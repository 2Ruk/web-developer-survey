<template>
  <v-container fluid="fluid">
    <v-row>
      <v-col cols="12" class="align-center" >
        <v-card outlined>
          <v-img
              class="ma-auto"
              src="https://pbs.twimg.com/media/DP8PRviVQAA6oJZ?format=png"
              lazy-src="https://pbs.twimg.com/media/DP8PRviVQAA6oJZ?format=jpeg"
              max-width="500"
              max-height="500"/>

        </v-card>
        <v-spacer/>
        <v-card>
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
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12">
      </v-col>
    </v-row>
  </v-container>
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
