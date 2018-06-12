<template>
    <section>
        <ul class="first_ul">
            <li v-for='(item, index) in menu_list' :key='index' class="first_li">
                <p>
                    {{item.val}}
                </p>
                <ul v-if='item.flag == true' class="second_ul">
                    <li v-for='(ite, ind) in item.data' :key='ind' class="second_li">
                        <p>
                            <i class="iconfont icon-container"></i>
                            <router-link :to='ite.path'>
                                {{ite.v}}
                            </router-link>
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="panel-body points demo flow_chart" id="points">
            <table border="1" v-for='(item, index) in data_list' :key='index' style="border-collapse: collapse">
                <tr>
                    <th v-for='(val, ind) in item.th' :key='ind' style="width:100px">{{val.val}}</th>
                </tr>
                <tbody>
                    <tr v-for='(va, inde) in item.tr' :key='inde' :id='va._id'>
                        <td v-for='(v, i) in va.td' :key='i'>
                            {{v}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
    // import draggable from 'vuedraggable'
    import $ from 'jquery';
    import {
        jsplumb
    } from 'jsplumb'
    require('@/assets/css/demo.css');
    require('@/assets/css/jsplumb.css');
    export default {
        // components: {
        //     draggable
        // },
        data() {
            return {
                data: {
                    point: [{
                            _id: '58c21d713819d56d68763918',
                            name: 'MoeLove',
                            status: '0',
                        },
                        {
                            _id: '58c21d803819d56d68763919',
                            name: 'Moe',
                            status: '1',
                        },
                        {
                            _id: '58c21da83819d56d6876391a',
                            name: 'Love',
                            status: '0',
                        },
                        {
                            _id: '58c63ecf3819d5a22f2c7f24',
                            name: 'TaoBeier',
                            status: '1',
                        },
                    ],
                    location: [
                        ['Moe', 4, 14],
                        ['Love', 4, 24],
                        ['TaoBeier', 4, 34],
                        ['TaoBeier', 20, 24],
                        ['MoeLove', 4, 4],
                    ],
                    line: [
                        ['58c21d713819d56d68763918', '58c21d803819d56d68763919'],
                        ['58c21d803819d56d68763919', '58c21da83819d56d6876391a'],
                        ['58c21d803819d56d68763919', '58c63ecf3819d5a22f2c7f24'],
                        ['58c21da83819d56d6876391a', '58c63ecf3819d5a22f2c7f24'],
                    ],
                },
                menu_list: [{
                        val: 'XXX公司表单',
                        flag: true,
                        data: [{
                                v: '险种列表',
                                path: ''
                            },
                            {
                                v: '客户要素列表',
                                path: '/edit'
                            },
                            {
                                v: '核保因素列表',
                                path: ''
                            },
                            {
                                v: '统计因素列表',
                                path: ''
                            }
                        ]
                    },
                    {
                        val: 'XXX服务器表单',
                        flag: true,
                        data: [{
                                v: '客户管理因素列表',
                                path: ''
                            },
                            {
                                v: '订单管理因素列表',
                                path: ''
                            },
                            {
                                v: '投保要素列表',
                                path: ''
                            },
                        ]
                    }
                ],
                data_list: [{
                        th: [{
                                val: '编号',
                                width: '50px'
                            },
                            {
                                val: '客户名称',
                                width: '100px'
                            },
                            {
                                val: '负责人',
                                width: '100px'
                            },
                            {
                                val: '公司电话',
                                width: '200px'
                            }
                        ],
                        tr: [{
                                td: [0, '百事可乐', '楚风', '13622365541'],
                                _id: '12121212',
                                name: '1',
                                status: '0'
                            },
                            {
                                td: [1, '雪碧', '轻语', '18746656325'],
                                _id: '22222222222222',
                                name: '2',
                                status: '0'
                            },
                            {
                                td: [2, '营养快线', '周媛', '1345562336'],
                                _id: '33333333333333',
                                name: '3',
                                status: '0'
                            },
                            {
                                td: [3, '体质能量', '王艾', '18844562369'],
                                _id: '444444444444444',
                                name: '4',
                                status: '0'
                            },
                        ]
                    },
                    {
                        th: [{
                                val: '编号',
                                width: '50px'
                            },
                            {
                                val: '客户名称',
                                width: '100px'
                            },
                            {
                                val: '负责人',
                                width: '100px'
                            },
                            {
                                val: '公司电话',
                                width: '200px'
                            }
                        ],
                        tr: [{
                                td: [0, '百事可乐', '楚风', '13622365541'],
                                _id: '555555555',
                                name: '1',
                                status: '0'
                            },
                            {
                                td: [1, '雪碧', '轻语', '18746656325'],
                                _id: '666666666',
                                name: '2',
                                status: '0'
                            },
                            {
                                td: [2, '营养快线', '周媛', '1345562336'],
                                _id: '7777777777',
                                name: '3',
                                status: '0'
                            },
                            {
                                td: [3, '体质能量', '王艾', '18844562369'],
                                _id: '8888888888888',
                                name: '4',
                                status: '0'
                            },
                        ]
                    }
                ]
            }
        },
        mounted() {
            jsPlumb.ready(() => {
                var arr = [];
                for (var i = 0; i < this.data_list.length; i++) {
                    arr = arr.concat(this.data_list[i].tr)
                }
                this.createFlow(arr);
                // this.createFlow(this.data);
            });
        },
        methods: {
            createFlow(flowData) {
                const color = '#acd';
                const instance = jsPlumb.getInstance({
                    Anchor: 'RightMiddle',
                    Connector: ['Flowchart', { //要使用的默认连接器的类型：折线，流程等
                        stub: 50
                    }],
                    Endpoint: ['Dot', { //端点（锚点）的样式声明（Dot）
                        radius: 5
                    }],
                    DragOptions: { //用于配置拖拽元素的参数
                        cursor: 'pointer',
                        zIndex: 5000
                    },
                    PaintStyle: { //连线样式
                        lineWidth: 5,
                        stroke: '#445566'
                    },
                    EndpointStyle: { //端点的css样式声明
                        radius: 9,
                        fill: color,
                        stroke: 'red'
                    },
                    HoverPaintStyle: { //鼠标经过线的样式
                        stroke: '#ec9f2e',
                        lineWidth: 4
                    },
                    EndpointHoverStyle: { //鼠标经过样式
                        fill: '#ec9f2e',
                        stroke: '#acd'
                    },
                    ConnectionOverlays: [ //附加到每个连接的默认重叠
                        ['Arrow', {
                            location: 1,
                            id: 'arrow',
                            length: 4,
                            foldback: 0.8,
                            paintStyle: {
                                lineWidth: 5,
                                stroke: 'lightgray',
                                fill: 'lightgray',
                            }
                        }],
                    ],
                    Container: 'points', //设置父级的元素，一个容器
                });
                instance.batch(() => {
                    const arrowCommon = {
                        foldback: 0.7,
                        width: 12
                    };

                    const overlays = [
                        ['Arrow', {
                            location: 0.7
                        }, arrowCommon],
                        ['Label', {
                            label: 'custom label',
                            id: 'label'
                        }],
                    ];

                    for (const point of flowData) {
                        // $('.points').append(
                        //     `<div id="${point._id}" class="point chart_act_${point.status} ${point.name}">${point.name}</div>`,
                        // );
                        instance.addEndpoint(point._id, {
                            uuid: `${point._id}-right`,
                            anchor: 'Right',
                            maxConnections: -1,
                            // connectorStyle: { stroke: 'green' },
                        }, {
                            isSource: true,
                            isTarget: true,
                            dragAllowedWhenFull: true,
                        });
                    }

                    // for (const i of flowData.line) {
                    //     const uuid = [`${i[0]}-bottom`, `${i[1]}-top`];
                    //     instance.connect({
                    //         uuids: uuid,
                    //         overlays,
                    //     });
                    // }

                    // for (const i of flowData.location) {
                    //     $(`.${i[0]}`).css('left', i[1] * 20);
                    //     $(`.${i[0]}`).css('top', i[2] * 20);
                    // }
                    for (const point of flowData) {
                        instance.draggable(`${point._id}`);
                    }
                    // 连接成功以后
                    instance.bind("connection", function(info) {
                        console.log('连接成功！！！');
                        // 当连接成功以后做的一些事情
                    });
                    // 断开连接
                    instance.bind("click", function(conn, originalEvent) {
                        if (confirm("确定要删除 from " + conn.sourceId + " to " + conn.targetId + "?")) {
                            instance.deleteConnection(conn);
                        }
                    });
                    // instance.bind("connectionDrag", function(connection) {
                    //     console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
                    // });
                    // instance.bind("connectionDragStop", function(connection) {
                    //     console.log("connection " + connection.id + " was dragged");
                    // });
                    // instance.bind("connectionMoved", function(params) {
                    //     console.log("connection " + params.connection.id + " was moved");
                    // });
                });
                jsPlumb.fire('jsPlumbDemoLoaded', instance);
            },
        }
    }
</script>
<style scoped>
    section {
        position: relative;
        margin-left: 200px;
        padding: 0 20px;
    }
    .first_ul {
        position: absolute;
        width: 150px;
        border: 1px solid rgb(200, 230, 243);
        border-radius: 4px;
    }
    li {
        text-align: left;
        font-size: 12px;
    }
    .first_ul .first_li {
        border-bottom: 1px solid #ddd;
        background: rgb(231, 228, 228);
    }
    .first_ul .first_li p {
        margin: 0 15px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
    }
    .second_ul .second_li p {
        margin: 0 18px;
    }
    .second_ul .second_li {
        height: 40px;
        line-height: 40px;
    }
    .second_ul .second_li:hover {
        background: rgb(158, 211, 247);
    }
    .iconfont {
        width: 14px;
        height: 14px;
        font-size: 14px;
    }
    td,
    th {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
    }
    table {
        margin-bottom: 20px;
    }
</style>
