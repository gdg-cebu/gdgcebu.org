<template>
    <div>
        <AboutUsSection />
        <!-- <WhatWeDoSection /> -->
    </div>
</template>

<script>
import AboutUsSection from '@/components/AboutUsSection.vue';
import WhatWeDoSection from '@/components/WhatWeDoSection.vue';

export default {
    name: 'Home',

    components: {
        AboutUsSection,
        WhatWeDoSection
    }
};
</script>
