<template>
    <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ props }">
            <v-btn flat color="primary" v-bind="props">
                <span class="text-white">Create New HelpChat</span>

            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                <h4>
                    Get Help form:
                </h4>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <div>

                        <v-text-field class="pb-4" prepend-icon="mdi-subtitles" label="Title" v-model="title"
                            :rules="inputRules"></v-text-field>
                    </div>
                    <div>

                        <v-textarea class="pb-4" prepend-icon="mdi-pencil" label="Information about the situation"
                            v-model="content" :rules="inputRules"></v-textarea>
                    </div>
                    <div>
                        <v-autocomplete class="pb-4" prepend-icon="mdi-city" label="Your Current Location" v-model="location"
                        :items="locations" :rules="inputRules" ></v-autocomplete>

                    </div>
                    <div>
                        <v-autocomplete class="pb-4" prepend-icon="mdi-web" v-model="language" :items="languages"
                            label="Language Support Needed in" :rules="inputRules" ></v-autocomplete>

                    </div>
                    <!-- <div>

                        <v-select class="pb-4" prepend-icon="mdi-city" v-model="location" :items="locations"
                            label="Your Current Location" :rules="inputRules"  ></v-select>
                    </div>
                    <div>

                        <v-select class="pb-4" prepend-icon="mdi-web" v-model="language" :items="languages"
                            label="Language Support Needed in" :rules="inputRules"></v-select>
                    </div> -->


                    <div>

                        <v-btn color="success" class="float-right " flat @click="submit" :loading="loading">
                            <span class="text-white">Create Help Chat</span>
                        </v-btn>
                    </div>

                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            title: '',
            content: '',
            locations: [
                'Tokyo - Japan',
                'Paris - France',
                'New York City - United States',
                'Cairo - Egypt',
                'Sydney - Australia',
                'ShangHai - China',
                'Mumbai - India',
                'Rio de Janeiro - Brazil',
                'Moscow - Russia',
                'Cape Town - South Africa',
                'Istanbul - Turkey',
            ],
            location: '',
            languages: [
                'Arabic',
                'Afrikaans',
                'English',
                'French',
                'Russian',
                'Japanese',
                'Marathi',
                'Portuguese',
                'Turkish',
            ],
            language: '',
            // inputRules: [
            //     v => v.length >= 3 || 'Valid input requires more characters'
            // ],
            inputRules: [
                v => !!(v && v.length) || 'Item is required'
            ],
            chatinfo: {},
            loading: false,
            dialog: false,
        }
    },
    methods: {
        postForCreateTeamsChat() {
            fetch('https://prod-03.southeastasia.logic.azure.com:443/workflows/481edcf5e6a74489bd8f4a1ab7cce07f/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=H27AEB82Y-KGCUMY7l1vdWE1-S7k3A_VAhimWgfyp0U', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.title, content: this.content, location: this.location, language: this.language
                })
            })
                .then(response => response.json())
                .then(data => {
                    this.chatinfo = data;
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('helpChatAdded');
                }
                )
        },
        submit() {

            const submitValidationFlag = this.$refs.form.validate().then((result) => {
                // console.log(result.valid)
                if (result.valid == true) {
                    this.loading = true;
                    this.postForCreateTeamsChat()
                }
            })


            //     if(this.$refs.form.validate() == true){
            //         console.log(this.$refs.form.validate().PromiseResult)
            //         console.log(this.title, this.content, this.location, this.language)
            //     }
            // }
        }
    }
}
</script>