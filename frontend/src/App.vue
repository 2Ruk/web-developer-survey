<template>
  <v-app>
    <Header />
    <MainLayout >
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
    QuestionView,
    MainLayout,
    Header,
  },
})
export default class App extends Vue {

  isQuestion: boolean = false;

  created(){
    const isQuestion = this.$route.name === 'Question';
    this.isQuestion = !isQuestion

    // console.log(this.$route.name)
  }

}
// export default Vue.extend({
//   name: "App",
//   components: { Header },
//   data: () => ({
//     //
//   }),
// });
</script>
