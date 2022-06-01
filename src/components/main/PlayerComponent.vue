<template>
    <div id="player_component">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h_60 p-0 w-100 flex_cent">
                <!-- Colonna del player -->
                <div class="col-6 h-75 bg_altro p-0 flex_cent flex-column">
                    <!-- Player Icon&title -->
                    <div class="col-5 h-75 bg_try bordo">Player Icon goes here</div>
                    <div class="col-11 h-25 bg_try bordo">Title goes here</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PlayerComponent"
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>