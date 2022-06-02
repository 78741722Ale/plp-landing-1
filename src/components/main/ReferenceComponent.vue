<template>
    <div id="reference_component">
        <!-- Container principale -->
        <div :class="reference_cont">
            <div :class="reference_row">
                <!-- Reference cols -->
                <div v-for="(element, index) in reference" :key="index" :class="single_col">
                    <!-- Profile pics -->
                    <div class="col-3 p-0 h-25 flex_cent">
                        <!-- Image -->
                        <div class="pic_square p-0 m-0">
                            <img :src="element.img" :alt="element.ref">
                        </div>
                    </div>
                    <!-- Reference Text & Person -->
                    <div class="col-11 flex_cent flex-column h_40">
                        <!-- Text -->
                        <h3 class="reference_title pb-2">{{element.text}}</h3>
                        <!-- Title -->
                        <h6 class="reference_subtitle">{{element.cit}}</h6>
                    </div>
                    <!-- Company logo -->
                    <div class="col-5 comp_logo p-4 flex_cent">
                        <span>{{element.logo}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ReferenceComponent",
    data() {
        return {
            /* Dynamic Class */
            reference_cont : "container-xl p-0 flex_cent h-100",
            reference_row : "row-cols-2 gap-5 h_85 p-0 flex_cent w-100",
            single_col : "col-auto w_45 h-100 flex-column flex_cent",
            /* Dynamic content */
            reference : [
                /* SX */
                {
                    img : require("@/assets/img/reference_pic.jpg"),
                    ref : "Reference Person",
                    text: "Include a short testimonial from a valued customer describing why your product is superior",
                    cit: "- Customer's name, job title and company",
                    logo: "CompanyLogo"
                },
                /* DX */
                {
                    img : require("@/assets/img/reference_pic.jpg"),
                    ref : "Reference Person",
                    text: "Include a short testimonial from a valued customer describing why your product is superior",
                    cit: "- Customer's name, job title and company",
                    logo: "CompanyLogo"
                }
            ]
        }
    },  
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>