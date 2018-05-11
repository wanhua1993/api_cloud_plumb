<template>
    <div class="wh_header">
        <div class="content">
            <div class="wh_left">
                <!-- <img src="" alt=""> -->
                <div>
                    <p class="first_p">保通数据接口云平台</p>
                    <p class="second_p">INSURANCE API-CLOUD</p>
                </div>
            </div>
            <div class="wh_right">
                <p>
                    汇明公估保险
                </p>
                <a href="##">退出</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }    
}
</script>
<style scoped>
    .wh_header {
        width: 100%;
        height: 60px;
        background: #000;
    }
    .content {
        height: 100%;
        width: 1200px;
        margin: 0 auto;
    }
    .wh_left {
        height: 60px;
        float: left;
    }
    .wh_right {
        height: 60px;
        float: right;
    }
    .wh_left div {
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 14px;
    }
    .wh_left div .first_p {
        letter-spacing: 4px;
    }
    .wh_left div p {
        height: 20px;
        line-height: 40px;
    }
    .wh_right p {
        display: inline-block;
        margin-right: 20px;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        color: #fff;
    }
    .wh_right a {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        text-decoration: none;
        font-size: 14px;
        color: #ea5147;
    }
</style>
