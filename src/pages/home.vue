<template>
    <div>
        home
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>


<script>
    import navFooter from '../components/NavFooter.vue';
    import navHeader from '../components/NavHeader.vue';

    export default {
        name:'nav-home',
        components:{
            navFooter,
            navHeader
        }
    }
</script>



<style>
</style>