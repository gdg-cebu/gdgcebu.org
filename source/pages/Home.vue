<template>
    <div>
        <AboutUsSection />
        <WhatWeDoSection />
        <FeaturedEventSection />
    </div>
</template>

<script>
import AboutUsSection from '@/components/AboutUsSection.vue';
import WhatWeDoSection from '@/components/WhatWeDoSection.vue';
import FeaturedEventSection from '@/components/FeaturedEventSection.vue';

export default {
    name: 'Home',

    components: {
        AboutUsSection,
        WhatWeDoSection,
        FeaturedEventSection
    }
};
</script>
