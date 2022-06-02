<template>
    <div id="app_component">
        <!-- Container -->
        <div :class="app_container">
            <div :class="app_row">
                <!-- Section Name -->
                <div class="col-3 p-1">
                    <h6 class="mb-0">{{section_title}}</h6>
                </div>
                <!-- Title&Subtitle -->
                <div :class="title_class">
                    <!-- Title -->
                    <h2 class="w_60 mt-1 mb-0 pb-3">{{title}}</h2>
                    <!-- Subtitle -->
                    <span>{{subtitle}}</span>
                </div>
                <!-- Smartphone&benefit zone -->
                <div class="col-12 h_60 p-0">
                    <div :class="benefit_row">
                        <!-- First - Zone 1/3 -->
                        <div class="col-auto zone_1 benefit_zone">
                            <!-- Internal col -->
                            <div v-for="(element, index) in zone_1" :key="index" :class="benefit_col_left">
                                <!-- Number of istance  -->
                                <div class="col-3 px-2 h-50 flex_end flex-column">
                                    <div class="square"><span>{{element.number}}</span></div>
                                </div>
                                <!-- Text&title col  -->
                                <div class="col-9 h-50 flex_end flex-column">
                                    <!-- Title -->
                                    <span class="span_title">{{element.title}}</span>
                                    <!-- Subtitle -->
                                    <span class="span_text">{{element.subtitle}}</span>
                                </div>
                            </div>
                        </div>
                        <!-- Second - Zona Smartphone -->
                        <div class="col-auto p-2 zone_2 w-25 h-100">
                            <img :src="smartphone_img" :alt="smartphone_alt">
                        </div>
                        <!-- Third - Zone 2/4 -->
                        <div class="col-auto zone_3 benefit_zone">
                            <!-- Internal col  -->
                            <div v-for="(element, index) in zone_2" :key="index" :class="benefit_col_rigth">
                                <!-- Number of istance  -->
                                <div class="col-3 px-2 h-50 flex_start flex-column">
                                    <div class="square"><span>{{element.number}}</span></div>
                                </div>
                                <!-- Text&title col  -->
                                <div class="col-9 h-50 flex_start flex-column">
                                    <!-- Title -->
                                    <span class="span_title">{{element.title}}</span>
                                    <!-- Subtitle -->
                                    <span class="span_text">{{element.subtitle}}</span>
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
    name:"AppComponent",
    data() {
        return {
            /* Classi Dinamiche */
            app_container : "container-xl p-0 flex_cent h-100",
            app_row : "row h_85 app_zone w-100",
            title_class : "col-12 h-25 mb-5 d-flex justify-content-start align-items-center flex-column",
            benefit_row : "row-cols-3 gap-5 w-100 h-100 flex_cent m-0 p-0",
            benefit_col_left : "col-12 h_30 flex_end flex-column",
            benefit_col_rigth : "col-12 h_30 flex_start flex-column",
            /* Contenuto Dinamico */
            smartphone_img : require("@/assets/img/smartphone.jpg"),
            smartphone_alt : "Smartphone Image",
            section_title : "App Download",
            title : "Provide a reason to download your app right now",
            subtitle : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati temporibus assumenda porro beatae voluptatem, rerum, consequuntur animi quia architecto debitis iure facilis quaerat minus culpa labore perferendis nostrum, doloremque asperiores cupiditate! Necessitatibus architecto facilis sequi, dolores eius iure harum et quaerat odit distinctio veniam eaque dolorum vero voluptatum enim quidem sit qui repudiandae.",
            /* Array di oggetti */
            zone_1 : [
                /* Upper (1) */
                {
                    number: "1",
                    title:"Add a benefit of using your app",
                    subtitle: "Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.",
                },
                /* Under (3) */
                {
                    number: "3",
                    title:"Add another benefit",
                    subtitle: "Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.",
                },
            ],
            zone_2 : [
                /* Upper (2) */
                {
                    number: "2",
                    title:"Add another benefit",
                    subtitle: "Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.",
                },
                /* Under (4) */
                {
                    number: "3",
                    title:"Add another benefit",
                    subtitle: "Praesent imperdiet sollicitudin tellus, non tincidunt ipsum gravida ut.",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>