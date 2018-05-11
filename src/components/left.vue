<template>
    <div class="wh_let_box">
        <ul class="first_ul">
            <li v-for='(item, index) in menu_list' :key='index'>
                <p>
                    {{item.val}}
                </p>
                <ul v-if='item.flag == true'>
                    <li v-for='(ite, ind) in item.data' :key='ind'>
                        <p>
                            {{ite.v}}
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
                            v: '方案管理'
                        }, 
                        {
                            v: '管理编辑'
                        }, 
                        {
                            v: '权限设置'
                        },
                        {
                            v: '方案导出'
                        }
                    ]
                }, 
                {
                    val: '统计分析',
                    flag: true,
                    data: [
                        {
                            v: '对方服务器数据'
                        }, 
                        {
                            v: 'API数据接口'
                        }, 
                        {
                            v: '数据路径跟踪'
                        },
                    ]
                },
                {
                    val: '本方服务器调整',
                    flag: true,
                    data: [
                        {
                            v: '历史版本'
                        }, 
                        {
                            v: '新部署生成'
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
    width: 200px;
    border: 1px solid rgb(223, 242, 250);
    border-radius: 4px;
    height: 700px;
}
li {
    text-align: left;
}
.first_ul {
    padding: 20px;
}

    
</style>
