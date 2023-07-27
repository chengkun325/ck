<template>
    <div class="about">
        <el-container>
            <el-header><Header/></el-header>
            <el-container>
                <el-aside><Sidebar/></el-aside>
                <el-main><router-view/></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

const store = useStore();
// const tagsList = computed(() => store.state.tagsList.map((item) => item.name));
const collapse = computed(() => store.state.collapse);
</script>
