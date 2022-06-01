<template>
    <div id="reference_component">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <!-- Per le colonne valuta dei componenti -->
            <!-- Si ripetono e sono la stessa cosa, puoi usare v-for o props -->
            <div class="row-cols-2 gap-5 h_85 p-0 flex_cent w-100">
                <!-- Colonna referenze SX -->
                <div class="col-auto w_45 h-100 bg_try flex-column flex_bet">
                    <!-- Pro pics -->
                    <div class="col-3 bg_altro h-25 bordo">Pro pics</div>
                    <!-- Reference Text & Person -->
                    <div class="col-10 bg_altro h-50 bordo">Reference Text</div>
                    <!-- Company logo -->
                    <div class="col-3 bg_altro h-25 bordo">Company Logo</div>
                </div>
                <!-- Colonna referenze DX -->
                <div class="col-auto w_45 h-100 bg_try flex-column flex_bet">
                    <!-- Pro pics -->
                    <div class="col-3 bg_altro h-25 bordo">Pro pics</div>
                    <!-- Reference Text & Person -->
                    <div class="col-10 bg_altro h-50 bordo">Reference Text</div>
                    <!-- Company logo -->
                    <div class="col-3 bg_altro h-25 bordo">Company Logo</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ReferenceComponent"
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>