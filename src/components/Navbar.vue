
<template>
    <nav>
        

        <v-app-bar flat class="bg-grey-lighten-4">

            <template v-slot:prepend>

                <v-app-bar-nav-icon class="text-grey" @click="drawer = !drawer"></v-app-bar-nav-icon>

            </template>

            <v-app-bar-title class="text-grey">
                <span class="font-weight-light">Help</span>
                <span>Chat</span>
            </v-app-bar-title>
            <!-- <v-btn flat color="grey">
                <span>Sign In</span>
                <v-icon end icon="mdi-exit-to-app"></v-icon>
            </v-btn> -->
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon end icon="mdi-exit-to-app"></v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" color="primary">
            
            <!-- <v-list-item class="my-4" prepend-avatar="../assets/Yingjie.JPG" title="Yinduo Li"></v-list-item> -->

            <v-divider></v-divider>


            <v-list >
                <v-list-item v-for="(item, i) in links" :key="i" :value="item" router :to="item.route">
                    
                    <template v-slot:prepend>
                        <v-icon >{{ item.icon }}</v-icon>
                    </template>
                    <!-- <v-list-item-title v-text="item.text"></v-list-item-title> -->
                    <span>{{ item.text }}</span>
                   
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {

    data() {
        return {
            drawer: false,
            links:
                [
                    { icon: 'mdi-view-dashboard', text: 'Provide Help', route: '/' },
                    { icon: 'mdi-folder', text: 'Get Help', route: '/gethelp' },
                    { icon: 'mdi-microsoft-teams', text: 'Team', route: '/team' }
                ],
               
        }
    }

}

</script>