<template>
    <div>
        <app-header />
        <transition name="slide" mode="out-in">
            <router-view />
        </transition>
        <app-footer />
    </div>
</template>

<script>
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import {PROJECTS} from '@/consts/project';

/**
 * Home page component
 */
export default {
    name: 'HomePage',
    components: {
        appHeader: Header,
        appFooter: Footer,
    },
    data() {
        return {
            PROJECTS,
        };
    },
};
</script>

<style lang="scss">
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins/_breakpoints';

    .bevel_after {
        position: relative;
        overflow: hidden;

        &::after {
            position: absolute;
            bottom: 0;
            background-size: cover;
            border-bottom: 150px solid #fff;
            border-left: 3000px solid transparent;
            content: "";
            pointer-events: none;
        }
    }

    .bevel_grey::after {
        border-bottom: 150px solid #f2f2f2;
    }

    .bevel_dark::after {
        border-bottom: 150px solid #181b1e;
    }

    .arrow {
        display: block;
        padding: 14px 0;
    }

    .container h3 {
        margin-bottom: 20px;
        color: #000;
        font-weight: 300;
        font-size: 35px;
    }

    @include media-breakpoint-down(md) {
        .container h3 { font-size: 32px; }
        .arrow { padding-bottom: 0; }
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }

        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
