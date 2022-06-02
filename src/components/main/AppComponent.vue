<template>
    <div id="app_component">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h_85 p-0 d-flex justify-content-start align-items-center flex-nowrap flex-column w-100">
                <!-- Section Name -->
                <div class="col-3 p-1">
                    <h6 class="mb-0">App Download</h6>
                </div>
                <!-- Title&Subtitle -->
                <div class="col-12 h-25 mb-5 d-flex justify-content-start align-items-center flex-column">
                    <!-- Title -->
                    <h2 class="w_60 mt-1 mb-0 pb-3">Provide a reason to download your app right now</h2>
                    <!-- Subtitle -->
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati temporibus assumenda porro beatae voluptatem, rerum, consequuntur 
                        animi quia architecto debitis iure facilis quaerat minus culpa labore perferendis nostrum, doloremque asperiores cupiditate! Necessitatibus 
                        architecto facilis sequi, dolores eius iure harum et quaerat odit distinctio veniam eaque dolorum vero voluptatum enim quidem sit qui repudiandae.
                    </span>
                </div>
                <!-- Tutta la zona dello smartphone centrale -->
                <!-- Valuta un nuovo componente -->
                <div class="col-12 h_60 p-0">
                    <!-- Row Container di tutto quanto -->
                    <div class="row-cols-3 gap-5 w-100 h-100 flex_cent m-0 p-0">
                        <!-- First - Zone 1/3 ( pensalo come un v-for ) -->
                        <div class="col-auto zone_1 benefit_zone">
                            <!-- Col Interne (in v-for) - zona 1 -->
                            <div class="col-12 h_30 flex_end flex-column">
                                <!-- Icon col  -->
                                <div class="col-3 px-2 h-50 flex_end flex-column">
                                    <div class="square"><span>1</span></div>
                                </div>
                                <!-- Text&title col  -->
                                <div class="col-9 h-50 flex_end flex-column">
                                    <!-- Title -->
                                    <span class="span_title">Add a benefit of using your app</span>
                                    <!-- Subtitle -->
                                    <span class="span_text">Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.</span>
                                </div>
                            </div>
                            <!-- Col Interne (in v-for) - zona 3 -->
                            <div class="col-12 h_30 flex_end flex-column">
                                <!-- Icon col  -->
                                <div class="col-3 px-2 h-50 flex_end flex-column">
                                    <div class="square"><span>3</span></div>
                                </div>
                                <!-- Text&title col  -->
                                <div class="col-9 h-50 flex_end flex-column">
                                    <!-- Title -->
                                    <span class="span_title">Add a benefit of using your app</span>
                                    <!-- Subtitle -->
                                    <span class="span_text">Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.</span>
                                </div>
                            </div>
                        </div>
                        <!-- Second - Zona Smartphone -->
                        <div class="col-auto p-2 zone_2 w-25 h-100">
                            <img src="https://picsum.photos/500/800" alt="Smartphone Image">
                        </div>
                        <!-- Third - Zone 2/4 ( Pensalo come un v-for) -->
                        <div class="col-auto zone_3 benefit_zone">
                            <!-- Col Interne (in v-for) - zona 3 -->
                            <div class="col-12 h_30 flex_start flex-column">
                                <!-- Icon col  -->
                                <div class="col-3 px-2 h-50 flex_start flex-column">
                                    <div class="square"><span>2</span></div>
                                </div>
                                <!-- Text&title col  -->
                                <div class="col-9 h-50 flex_start flex-column">
                                    <!-- Title -->
                                    <span class="span_title">Add a benefit of using your app</span>
                                    <!-- Subtitle -->
                                    <span class="span_text">Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.</span>
                                </div>
                            </div>
                            <!-- Col Interne (in v-for) - zona 4 -->
                            <div class="col-12 h_30 flex_start flex-column">
                                <!-- Icon col  -->
                                <div class="col-3 px-2 h-50 flex_start flex-column">
                                    <div class="square"><span>4</span></div>
                                </div>
                                <!-- Text&title col  -->
                                <div class="col-9 h-50 flex_start flex-column">
                                    <!-- Title -->
                                    <span class="span_title">Add a benefit of using your app</span>
                                    <!-- Subtitle -->
                                    <span class="span_text">Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.</span>
                                </div>
                            </div>
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