<template>
    <div id="image_component">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h_85 p-0 d-flex justify-content-start align-items-center flex-nowrap flex-column w-100">
                <!-- Section Name -->
                <div class="col-3 p-1 mb-5 bg_try bordo">Section name goes here</div>
                <!-- Title&Subtitle -->
                <div class="col-12 h-25 mb-4 bg_try bordo ">
                    <h2>Title goes here</h2>
                    <h5>Subtitles goes here</h5>
                </div>
                <!-- Three Cards -->
                <div class="col-12 h_60 p-0 ">
                    <!-- Row Interna -->
                    <!-- Sono da Ripetere (le col) in V-for -->
                    <div class="row-cols-3 w-100 h-100 d-flex justify-content-between align-content-center m-0 p-0 ">
                        <!-- First -->
                        <div class="col-auto bg_try w_32 h-100 bordo">1°St</div>
                        <!-- Second -->
                        <div class="col-auto bg_try w_32 h-100 bordo">2°nd</div>
                        <!-- Third -->
                        <div class="col-auto bg_try w_32 h-100 bordo">3°td</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ImageComponent"
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>