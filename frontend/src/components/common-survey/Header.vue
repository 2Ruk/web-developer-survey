<template>
  <v-app-bar app color="white" flat>
    <!--    <v-avatar color="grey darken-1" size="32"></v-avatar>-->

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="link in links" :key="link">
        {{ link }}
      </v-tab>
    </v-tabs>

    <!--    <v-avatar-->
    <!--      class="hidden-sm-and-down"-->
    <!--      color="grey darken-1 shrink"-->
    <!--      size="32"-->
    <!--    ></v-avatar>-->
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {
  private links: string[] = ["Survey", "Result"];
}
</script>

<style scoped></style>
