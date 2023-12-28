<template>
    <div>
        <button @click="drawRectangle">Rectangle</button>
        <button @click="drawCircle">Circle</button>
        <button @click="clearCanvas">Clear</button>
    </div>
</template>

<script>
export default{
    methods:{
        drawRectangle(){
            this.$emit('draw-rectangle');
        },
        drawCircle(){
            this.$emit('draw-circle');
        },
        clearCanvas(){
            this.$emit('clear-cancvas');
        }

    }
};
</script>

<style scoped>
    button{
        margin:5px;
    }
</style>