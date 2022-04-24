<template>
  <v-app>
    <Header />
    <MainLayout>
      <router-view />
    </MainLayout>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/common-survey/Header.vue";
import Component from "vue-class-component";
import QuestionView from "@/views/QuestionView.vue";
import MainLayout from "@/components/common-survey/MainLayout.vue";

@Component({
  components: {
    MainLayout,
    Header,
    HomeView: QuestionView,
  },
})
export default class App extends Vue {}

// export default Vue.extend({
//   name: "App",
//   components: { Header },
//   data: () => ({
//     //
//   }),
// });
</script>
