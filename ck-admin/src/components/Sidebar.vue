<template>
  <div class="sidebar">
    <el-menu
        :collapse="collapse"
        :default-active="onRoutes"
        active-text-color="#0077E7"
        background-color="#FFFFFF"
        class="sidebar-el-menu"
        router
        text-color="#000000"
        unique-opened
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :key="item.index" :index="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon"/>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                  v-if="subItem.subs"
                  :key="subItem.index"
                  :index="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :key="subItem.index" :index="subItem.index"
              >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :key="item.index" :index="item.index">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const items = [
  {
    icon: "HomeFilled",
    index: "/dashboard",
    title: "系统首页",
  },
];


const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});

const store = useStore();
const collapse = computed(() => store.state.collapse);


</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
