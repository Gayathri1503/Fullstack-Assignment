<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
    import fabric from 'fabric';
    export default{
        mounted(){
            this.canvas = new fabric.Canvas(this.$refs.canvas,{
                width:800;
                height:600;
                backgroundColor: '#f0f0f0'
            });
        },
        methods:{
            drawRectangle(){
                const rect = new fabric.Rect({
                    left:100,
                    top:100,
                    width:200.
                    height:100,
                    fill:'red'
                });
                this.canvas.add(rect);
            },
            drawCircle(){
                const circle = new fabric. Circle({
                    left:300,
                    top:300,
                    radius:50,
                    fill:'blue'
                });
                this.canvas.add(circle);
            },
            clearCanvas(){
                this.canvas.clear();
            }
        }
    };
</script>

<style scoped>
    canvas{
        border:1px solid #ccc;
    }
</style>