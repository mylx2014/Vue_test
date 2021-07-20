<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">点我发送学校名</button>
    </div>
</template>

<script>
export default {
    name: "School",
    data(){
        return{
            name:'尚硅谷',
            address:'北京·昌平',
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
    props:['getSchoolName']
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>