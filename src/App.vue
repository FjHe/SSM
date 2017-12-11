<template>
    <div id="app">
        <transition name="fade"
                    mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    /* 字体引入class="iconfont" 应用字体*/
    import iconfont from './styles/font_download/iconfont'

    export default {
        name: 'app',
        components: {},
        request(params) {
            const ajax_data_type = Constant.ENVIRONMENT == 'development' ? 'jsonp' : 'json';
            const default_params = {
                type: 'GET',
                dataType: ajax_data_type
            };
            if (Constant.ENVIRONMENT == 'development') {
                //加上时间戳和随机数保证jsonpCallback参数的唯一性
                const callback_handler = "jsonpHandler_" + new Date().getTime() + Math.floor(Math.random() * 1000000);
                params.jsonpCallback = callback_handler;
            }
            $.each(default_params, function (key, val) {
                if (!params[key]) {
                    params[key] = val;
                }
            });
            $.ajax(params);
        }
    }

</script>

<style lang="scss">
    body {
        margin: 0px;
        padding: 0px;
        /*background: url(assets/bg1.jpg) center !important;
            background-size: cover;*/
        // background: #1F2D3D;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
    }

    /* 字体引入class="iconfont" 应用字体*/
    /*@font-face {*/
        /*font-family: 'iconfont';*/
        /*src: url('./styles/font_download/iconfont.eot'); !* IE9*!*/
        /*src: url('./styles/font_download/iconfont.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *!*/
        /*url('./styles/font_download/iconfont.woff') format('woff'), !* chrome、firefox *!*/
        /*url('./styles/font_download/iconfont.ttf') format('truetype'), !* chrome、firefox、opera、Safari, Android, iOS 4.2+*!*/
        /*url('./styles/font_download/iconfont.svg#iconfont') format('svg'); !* iOS 4.1- *!*/
    /*}*/

    /*  图标加入 */
    .iconfont {
        font-family: "iconfont";
        font-size: 16px;
        font-style: normal;
    }

    .icon {
        width: 3em;
        height: 3em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    #app {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
    }

    .el-submenu [class^=fa] {

        vertical-align: baseline;
        margin-right: 10px;
    }

    .el-menu-item [class^=fa] {

        vertical-align: baseline;
        margin-right: 10px;
    }

    .el-submenu [class^=el-icon-] {
        width: auto;
    }

    .toolbar {
        background: #f2f2f2;
        padding: 10px;
        //border:1px solid #dfe6ec;
        margin: 10px 0px;
        .el-form-item {
            margin-bottom: 10px;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>