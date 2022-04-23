<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row align="center" justify="center">
          <!--          <v-col-->
          <!--              cols="12"-->
          <!--              sm="2"-->
          <!--          >-->
          <!--            <v-sheet-->
          <!--                rounded="lg"-->
          <!--                min-height="268"-->
          <!--            >-->
          <!--              &lt;!&ndash;  &ndash;&gt;-->
          <!--            </v-sheet>-->
          <!--          </v-col>-->

          <v-col cols="12" sm="8" offset-md="2">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              {{ message }}
            </v-sheet>
          </v-col>

          <!--          <v-col-->
          <!--              cols="12"-->
          <!--              sm="2"-->
          <!--          >-->
          <!--            <v-sheet-->
          <!--                rounded="lg"-->
          <!--                min-height="268"-->
          <!--            >-->
          <!--              &lt;!&ndash;  &ndash;&gt;-->
          <!--            </v-sheet>-->
          <!--          </v-col>-->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  private links: string[] = ["Survey", "Result"];

  private message: string = "";

  async mounted() {
    await this.getLoadTest();
  }

  async getLoadTest() {
    const { data } = await this.axios.get("/survey");
    this.message = data;
  }
}
</script>
