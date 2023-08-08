<template>
    <div class="team">
        <h1 class="text-h6 text-grey">Team</h1>

        <v-container class="my-5">
            <v-row row wrap>
                <v-col cols="12" sm="6" md="3" v-for="person in team" :key="person.name">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size = "66" >
                                <v-img :src="getImageUrl(person.avatar)" ></v-img>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="text-h6">{{ person.name }}</div>
                            <div class="text-grey">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey">
                                <v-icon small left>mdi-message</v-icon>
                                <span class="">Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Drac', role: 'Coordinator', avatar:  'Drac.JPG' },
                { name: 'Jie', role: 'Coordinator', avatar:  'Jie.JPG' },
                { name: 'Huidong', role: 'Coordinator', avatar:  'Huidong.JPG' },
                { name: 'Nicholas', role: 'Advisor', avatar:  'Nicholas.JPG' },
                { name: 'Serena', role: 'Coordinator', avatar:  'Serena.JPG' },
                { name: 'Yuanchang', role: 'Advisor', avatar:  'Yuanchang.JPG' },
                { name: 'Yinduo', role: 'Coordinator', avatar:  'Yinduo.JPG' },
                { name: 'Yingjie', role: 'Coordinator', avatar:  'Yingjie.JPG' },
                { name: 'Yanbo', role: 'Coordinator', avatar:  'Yanbo.JPG' },
                { name: 'Yujie', role: 'Coordinator', avatar:  'Yujie.JPG' },
                { name: 'Zoe', role: 'Coordinator', avatar:  'Zoe.JPG' },
                { name: 'Ziyu', role: 'Coordinator', avatar:  'Ziyu.JPG' },

            ]
        }
    }, 
    methods: {
        getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
   }
}
</script>


<style>


</style>