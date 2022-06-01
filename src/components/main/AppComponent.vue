<template>
    <div id="app_component">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h_85 p-0 d-flex justify-content-start align-items-center flex-nowrap flex-column w-100">
                <!-- Section Name -->
                <div class="col-3 p-1 mb-5 bg_try bordo">Section name goes here</div>
                <!-- Title&Subtitle -->
                <div class="col-12 h-25 mb-5 bg_try bordo">
                    <h2>Title goes here</h2>
                    <h5>Subtitles goes here</h5>
                </div>
                <!-- Tutta la zona dello smartphone centrale -->
                <!-- Valuta un nuovo componente -->
                <div class="col-12 h_60 p-0">
                    <!-- Row Container di tutto quanto -->
                    <div class="row-cols-3 gap-4 w-100 h-100 flex_cent m-0 p-0 ">
                        <!-- First - Zone 1/2 ( pensalo come un v-for ) -->
                        <div class="col-auto bg_try w_32 h-100 p-0 flex-column flex_bet">
                            <!-- Col Interne (in v-for) - zona 1 -->
                            <div class="col-12 h_30 bordo bg_altro">Zona 1</div>
                            <!-- Col Interne (in v-for) - zona 2 -->
                            <div class="col-12 h_30 bordo bg_altro">Zona 2</div>
                        </div>
                        <!-- Second - Zona Smartphone -->
                        <div class="col-auto bg_try w-25 h-100 bordo">Smartphone Pics</div>
                        <!-- Third - Zone 3/4 ( Pensalo come un v-for) -->
                        <div class="col-auto bg_try w_32 h-100 p-0 flex-column flex_bet">
                            <!-- Col Interne (in v-for) - zona 1 -->
                            <div class="col-12 h_30 bordo bg_altro">Zona 3</div>
                            <!-- Col Interne (in v-for) - zona 2 -->
                            <div class="col-12 h_30 bordo bg_altro">Zona 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AppComponent"
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>