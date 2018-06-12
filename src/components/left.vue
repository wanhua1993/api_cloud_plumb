<template>
    <div class="wh_let_box">
        <ul class="first_ul">
            <li v-for='(item, index) in menu_list' :key='index' class="first_li">
                <p>
                    {{item.val}}
                </p>
                <ul v-if='item.flag == true' class="second_ul">
                    <li v-for='(ite, ind) in item.data' :key='ind' class="second_li">
                        <p>
                            <router-link :to='ite.path'>
                               {{ite.v}} 
                            </router-link>     
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu_list: [
                {
                    val: '对方服务器部署',
                    flag: false
                }, 
                {
                    val: 'IAC可视化编辑',
                    flag: true,
                    data: [
                        {
                            v: '方案管理',
                            path: ''
                        }, 
                        {
                            v: '关联编辑',
                            path: '/edit'
                        }, 
                        {
                            v: '权限设置',
                            path: ''
                        },
                        {
                            v: '方案导出',
                            path: ''
                        }
                    ]
                }, 
                {
                    val: '统计分析',
                    flag: true,
                    data: [
                        {
                            v: '对方服务器数据',
                            path: ''
                        }, 
                        {
                            v: 'API数据接口',
                            path: ''
                        }, 
                        {
                            v: '数据路径跟踪',
                            path: ''
                        },
                    ]
                },
                {
                    val: '本方服务器调整',
                    flag: true,
                    data: [
                        {
                            v: '历史版本',
                            path: ''
                        }, 
                        {
                            v: '新部署生成',
                            path: ''
                        }
                    ]
                }, 
                {
                    val: '问题解决',
                    flag: false
                }
            ]
        }
    }    
}
</script>
<style scoped>
.wh_let_box {
    float: left;
    width: 200px;
    border: 1px solid rgb(223, 242, 250);
    border-radius: 4px;
    /* height: 700px; */
}
li {
    text-align: left;
    font-size: 14px;
}
.first_ul .first_li {
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    background: rgb(231, 228, 228);
}
.first_ul .first_li p {
    margin: 0 25px;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
}
.second_ul .second_li p {
    margin: 0 50px;
} 
.second_ul .second_li {
    height: 40px;
    line-height: 40px;
} 
.second_ul .second_li:hover {
    background: rgb(158, 211, 247);
}
</style>
