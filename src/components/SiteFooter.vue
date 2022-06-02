<template>
    <div id="site_footer">
        <!-- Container principale -->
        <div :class="footer_container">
            <div :class="footer_row">
                <!-- Section Title -->
                <div class="col-3 p-1 mb-1">
                    <h6 class="mb-0">{{section_title}}</h6>
                </div>    
                <!-- Title&Subtitle -->
                <div class="col-8 p-4 mb-2">
                    <h2>{{title}}</h2>
                </div>  
                <!-- Call To Action -this is a component, even for Footer site -->
                <div class="col-6 p-3 flex_cent h-50 mb-5">
                    <!-- Call to action component, avaiable even for the footer site -->
                    <CTA />
                </div>
                <!-- Copy Text -->
                <div :class="copy_col">
                    <!-- Link of the owner of the layout -->
                    <span class="mb-3">Link of the layout reproduced : <a :href="copy_link">Click Here</a></span>
                    <!-- Copy Declaration -->
                    <span class="educational mb-3">{{copy_text}}</span>
                    <!-- Linkedin Profile -->
                    <span>Link to my Linkedin Profile : <a :href="linkedin_profile">Click Here</a></span>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
/* Import of Components */
import CTA from '@/components/CTA.vue'

export default {
    name: "SiteFooter",
    components: {
        CTA,
    },
    data() {
        return {
            /* Dynamic Classes */
            footer_container : "container-xl p-0 flex_cent h-100",
            footer_row : "row h_85 footer_zone w-100",
            copy_col : "col-6 mt-5 h_15 p-1 copy_text align-self-start flex_start flex-column",
            copy_link : "https://instapage.com/landing-page-templates/app-download-landing-page-2",
            copy_text: "Reproduction of the layout is for educational purposes only. The layout was not produced for the purpose of selling it to third parties",
            linkedin_profile: "https://www.linkedin.com/in/alessandro-pecorilla-8a98b7196/",
            /* Dynamic Content */
            section_title : "App download",
            title : "Add another reason to download your app right now",
        }
    },
}
</script>

<style lang="scss" scoped>
/* stylesheet import */
@import '@/assets/sass/partials/footer.scss';
</style>