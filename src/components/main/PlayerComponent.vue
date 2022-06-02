<template>
    <div id="player_component">
        <!-- Container principale -->
        <div :class="player_cont">
            <div :class="player_row">
                <!-- Player Icon&title - col -->
                <div :class="player_col">
                    <!-- Player -->
                    <div class="col-5 h-75 flex_cent">
                        <a :href="ref"><font-awesome-icon class="big_icon" :icon="icon" /></a>
                    </div>
                    <!-- Title -->
                    <div class="col-11 h-25">
                        <h5>{{title}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PlayerComponent",
    data() {
        return {
            /* Dynamic class */
            player_cont : "container-xl p-0 flex_cent h-100",
            player_row : "row h_60 p-0 w-100 flex_cent",
            player_col : "col-6 h-75 p-0 flex_cent flex-column",
            /* Dynamic Content */
            icon: "fa-solid fa-circle-play",
            title : "Provide a reason to watch this video",
            ref: "#"
        }
    },  
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>