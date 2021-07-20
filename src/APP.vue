<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="app">
            <h2>{{ msg }}</h2>
            <!-- 通过父组件给子组件传递函数类型props实现：子给父传递数据 -->
            <School :getSchoolName="getSchoolName"/>
            <hr>
            <!-- 写法一，使用@或v-on，通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
            <Student @atguigu="getStudentName" @demo="m1"/>
            <!-- 写法二，使用ref，通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
<!--            <Student ref="student"/>-->
        </div>
    </div>
</template>

<script>
import School from "@/componments/School";
import Student from "@/componments/Student";

export default {
    name: "APP",
    data() {
        return {
            title: '组件的自定义事件',
            msg: '你好啊'
        }
    },
    components: {
        School,
        Student,
    },
    methods: {
        getSchoolName(name){
            console.log('App收到了信息',name)
        },
        getStudentName(name,...params){
            console.log('demo被调用了！',name,params)
        },
        m1(){
            console.log('demo事件被触发了')
        }
    },
    mounted() {
        // setTimeout(()=>{
        //      绑定自定义事件
        //     this.$refs.student.$on('atguigu',this.getStudentName)
        //      绑定自定义事件(一次)
        //     this.$refs.student.$once('atguigu',this.getStudentName)
        // },3000)
        // this.$refs.student.$once('atguigu',this.getStudentName)
    } 
}
</script>

<style>
h1 {
    text-align: center;
    color: red;
}

.app {
    background-color: gray;
    padding: 5px;
}
</style>