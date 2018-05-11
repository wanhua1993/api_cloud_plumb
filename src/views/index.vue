<template>
    <div>
        <wh-header></wh-header>
        <div class="wh_content">
            <wh-left></wh-left>
        </div>
    </div>
    
</template>
<script>
import whHeader from '@/components/header.vue'
import whLeft from '@/components/left.vue'
export default {
    data() {
        return {

        }
    }, 
    components: {
        whHeader,
        whLeft
    },
}
</script>
<style scoped>
.wh_content {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
}
</style>
