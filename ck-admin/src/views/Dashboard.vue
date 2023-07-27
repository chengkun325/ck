<template>
    <div>
        <div class="app-container home">
            <el-row :gutter="20">
            </el-row>
            <div class="block">
                <span class="demonstration"></span>
                <el-carousel height="300px">
                    <el-carousel-item>
                        <h3 class="small">
                            <img src="../assets/images/img1.png"/>
                        </h3>
                    </el-carousel-item>
                    <el-carousel-item>
                        <h3 class="small">
                            <img src="../assets/images/img2.png"/>
                        </h3>
                    </el-carousel-item>
                    <el-carousel-item>
                        <h3 class="small">
                            <img src="../assets/images/img3.png"/>
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div id="myChart" class="myChart" style="width: 800px; height: 800px;"></div>
    <div id="global" style="width: 800px; height: 800px;"></div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import 'echarts-gl'
import {onMounted} from "vue";

type EChartsOption = echarts.EChartsOption;

onMounted(() => {
    var chartDom = document.getElementById("myChart")!;
    var myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
});
var option: {
    legend: { orient: string; left: string };
    series: {
        data: ({ name: string; value: number } | { name: string; value: number } | { name: string; value: number } | {
            name: string;
            value: number
        } | { name: string; value: number })[];
        name: string;
        emphasis: { itemStyle: { shadowOffsetX: number; shadowBlur: number; shadowColor: string } };
        type: string;
        radius: string
    }[];
    tooltip: { trigger: string };
    textStyle: { fontSize: number };
    title: { left: string; textStyle: { fontSize: number }; text: string }
};

option = {
    textStyle: {
        fontSize: 20
    },
    title: {
        textStyle: {
            fontSize: 25
        },
        text: '遥感案例分布情况',
        // subtext: 'Fake Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '淄博市'},
                {value: 735, name: '济南市'},
                {value: 580, name: '临沂市'},
                {value: 484, name: '聊城市'},
                {value: 300, name: '威海市'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
</script>


<style scoped>
.layout-home {
    line-height: 2;
    font-size: 15px;
}

.layout-home h2 {
    margin: 6px 0;
}
</style>
