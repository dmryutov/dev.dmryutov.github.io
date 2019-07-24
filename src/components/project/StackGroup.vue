<template>
    <ul>
        <li v-for="item in items" :key="`stack-${item}`">
            {{ item }}
        </li>
    </ul>
</template>

<script>
/**
 * Stack items group component
 */
export default {
    name: 'StackGroup',
    props: {
        /**
         * Stack items group
         */
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>
