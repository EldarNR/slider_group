<template>
    <v-container width="1280">
        <v-sheet class="mx-auto mt-4" elevation="8" width="100%">
            <v-slide-group active-class="success" show-arrows>
                <v-slide-item v-for="user in $store.state.posts" :key="user.id">

                    <!--SkeletonLoader-->
                    <v-sheet v-if="loading" :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                        <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>
                    </v-sheet>

                    <!--Card-->
                    <v-card v-else class="ma-4 text-color" height="250" width="250" lighten>
                        <div style="width: 100%; " class="d-flex align-center justify-center">
                            <div class="d-flex flex-row justify-center align-center mt-2" style="width: 80%;">
                                <span>{{ randomNumber }}</span>
                                <v-rating background-color="grey" color="warning" half-increments length="5" readonly
                                    size="15" :value="randomNumber"></v-rating>
                            </div>
                        </div>
                        <div style="width: 100%; height: 60%;" class="d-flex flex-column align-center">
                            <div class="" style="width:80%"> <v-list-item-content justify="center"
                                    class="body-2 text-justify" style="width: 100%;">

                                    <v-list-item-title class="text-h6" style="width: 100%; height: 20%;">Amazing
                                        Template</v-list-item-title>
                                    <span class="custom-truncate " style="width: 100%; height: 80%;">{{ user.body }}</span>
                                </v-list-item-content>
                            </div>
                        </div>
                        <v-divider></v-divider>

                        <v-list-item class="d-flex mb-5">
                            <v-list-item-avatar class="bg">
                                <v-img class="elevation-6" alt="user"
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content justify="center" class="body-2   mr-3">
                                <v-list-item-title>Eldar Nurahmetuly</v-list-item-title>
                                <v-list-item-subtitle>google</v-list-item-subtitle>
                            </v-list-item-content>

                        </v-list-item>

                    </v-card>

                </v-slide-item>
            </v-slide-group>
            <div>{{ $store.state.counter }}</div>

        </v-sheet>
    </v-container>
</template>

<script >


export default {
    name: "slider",
    data: () => ({
        posts: [],
        rating: 0,
    }),
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
    mounted() {
        this.$store.dispatch("fetchPosts");
    },
    computed: {
        loading() {
            return this.$store.state.load;
        },
        randomNumber() {
            return Math.floor(Math.random() * 5);
        }
    },
}
</script>

<style>
.bg {
    background-color: blanchedalmond;
}

.text-color {
    color: black;
}

.custom-truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 6;
    text-overflow: ellipsis;
}
</style>