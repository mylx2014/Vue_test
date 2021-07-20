<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{gender}}</h2>
        <button @click="sendStudentName">点我提示学生信息</button>
        <button @click="unbind">解绑atguigu事件</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data(){
        return{
            name:'张三',
            gender:'男',
        }
    },
    methods:{
        sendStudentName(){
            // 触发Student身上的atguigu事件
            this.$emit('atguigu',this.name,333,666,999)
            // this.$emit('demo')
        },
        unbind(){
            // 解绑一个自定义事件
            this.$off('atguigu')
            // 解绑多个自定义事件
            // this.$off(['atguigu','demo'])
            // 解绑所有的自定义事件
            // this.$off()
        }
    }

}
</script>

<style scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>