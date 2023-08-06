
<template>
    <div class="gethelp">
        <div>
            <v-snackbar v-model="snackbar" :timeout="5000" top color="success" location="top">
                <div>
                    <span class="text-white text-subtitle-1 " location="top center">Successfully added a new Help
                        Chat!</span>
                </div>
                <div>
                    <v-btn variant="text" location="bottom center" class="text-white font-weight-bold" flat
                        @click="snackbar = false">Close</v-btn>
                </div>
            </v-snackbar>
        </div>
        <h1 class="text-h6 text-grey">GetHelp Dashboard</h1>


        <v-container class="my-5">
            <div align="end">
                <Popup @helpChatAdded="snackbar = true" />
            </div>




            <v-container class="my-9">

                <v-row class="mx-3 mb-3">

                    <v-btn class="mx-2" size="x-small" flat color="grey" @click="sortBy('title')">
                        <v-icon start size="small">mdi-folder</v-icon>
                        <span class="text-caption text-lowercase">By project name</span>
                        <v-tooltip activator="parent" location="top">Sort projects by project name</v-tooltip>
                    </v-btn>

                    <!-- <v-btn class="mx-2" size="x-small" flat color="grey" @click="sortBy('person')">
                        <v-icon start size="small">mdi-account</v-icon>
                        <span class="text-caption text-lowercase">By person</span>
                        <v-tooltip activator="parent" location="top">Sort projects by person</v-tooltip>
                    </v-btn> -->
                    <v-btn class="mx-2" size="x-small" flat color="grey" @click="sortByDate('startdate')">
                        <v-icon start size="small">mdi-sort-calendar-ascending
                        </v-icon>
                        <span class="text-caption text-lowercase">By Date</span>
                        <v-tooltip activator="parent" location="top">Sort projects by startdate Date</v-tooltip>
                    </v-btn>
                </v-row>

                <!-- <v-card flat class="px-3" v-for="project in projects" :key="project.title">
    <v-row row wrap :class="`pa-3 project ${project.status}`">
        
        <v-col cols="12" sm="12" md="6">
            <div class="text-caption text-grey">Project Title</div>
            <div>{{ project.title }}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
            <div class="text-caption text-grey">Person</div>
            <div>{{ project.person }}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
            <div class="text-caption text-grey">startdate By</div>
            <div>{{ project.startdate }}</div>
        </v-col>
        <v-col cols="12" sm="4" md="2">
            <div align="end">
                <v-chip size="small" :class="` my-3 ${project.status} text-white  text-caption`">{{
                    project.status }}</v-chip>
            </div>
        </v-col>

    </v-row>
    <v-divider></v-divider>
</v-card> -->

                <v-card flat class="px-3 mb-1" v-for="project in projects" :key="project.title">
                    <v-row row wrap :class="`pa-3 project ${project.status}`">

                        <v-col cols="12" sm="12" md="6">
                            <div class="text-caption text-grey">Help Channel</div>
                            <div>{{ project.title }}</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-caption text-grey">Description</div>
                            <div>{{ project.description }}</div>
                        </v-col>
                        <v-col cols="6" sm="6" md="6">
                            <div class="text-caption text-grey">Started at</div>
                            <div>{{ new Date(project.startdate) }}</div>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <div align="end">
                                <v-expansion-panels>
                                    <v-expansion-panel elevation="0">

                                        <v-expansion-panel-title>
                                            <v-icon start size="small">mdi-microsoft-teams</v-icon>
                                            Teams</v-expansion-panel-title>
                                        <v-expansion-panel-text>{{ project.link }}</v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                                <v-chip size="small" :class="` my-3 ${project.status} text-white  text-caption`">{{
                                    project.status }}</v-chip>
                            </div>
                        </v-col>

                    </v-row>
                    <v-divider></v-divider>
                </v-card>



            </v-container>

        </v-container>
    </div>
</template>

<script>
import Popup from '@/components/Popup.vue'
export default {
    components: { Popup },
    data() {
        return {
            snackbar: false,
            projects: []

        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        },
        sortByDate(prop) {
            this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
        }

    },
    created() {
        fetch('https://prod-02.southeastasia.logic.azure.com:443/workflows/16d27e65e16e4eef8dcf38e21b706031/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UgioNJfI5B3D4exvcFWl8GkiamVb0pKquC96N4hmf1M', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test: "test"
            })
        })
            .then(response => response.json())
            .then(data => {
                this.projects = data;
            })
    },
    updated() {
        fetch('https://prod-02.southeastasia.logic.azure.com:443/workflows/16d27e65e16e4eef8dcf38e21b706031/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UgioNJfI5B3D4exvcFWl8GkiamVb0pKquC96N4hmf1M', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test: "test"
            })
        })
            .then(response => response.json())
            .then(data => {
                this.projects = data;
            })
    }

}
</script>

<style>
.project.complete {
    border-left: 6px solid #3cd1c2;
}

.project.ongoing {
    border-left: 6px solid orange;
}

.project.cancelled {
    border-left: 6px solid tomato;
}

.v-chip.complete {
    background: #3cd1c2;
}

.v-chip.ongoing {
    background: #ffaa2c;
}

.v-chip.cancelled {
    background: #f83e70;
}
</style>