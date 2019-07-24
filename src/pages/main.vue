<template>
    <div>
        <service-list />
        <gallery />
        <review-list />
        <contact />
    </div>
</template>

<script>
import Contact from '@/components/home/Contact';
import Gallery from '@/components/home/Gallery';
import ReviewList from '@/components/home/ReviewList';
import ServiceList from '@/components/home/ServiceList';
import {PROJECTS} from '@/consts/project';

/**
 * Home page component
 */
export default {
    name: 'HomePage',
    components: {
        Contact,
        Gallery,
        ReviewList,
        ServiceList,
    },
    data() {
        return {
            PROJECTS,
        };
    },
};
</script>
