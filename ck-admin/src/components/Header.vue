<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <span v-if="!collapse"><el-icon><component :is="`Fold`"/></el-icon></span>
            <span v-else><el-icon><component :is="`Expand`"/></el-icon></span>
        </div>
        <div class="logo">遥感案例管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                            effect="dark"
                            :content="message ? `有${message}条未读消息` : `消息中心`"
                            placement="bottom"
                    >
                        <!-- to去哪还没有写 -->
                        <router-link to="">
                            <span><el-icon><component :is="`Bell`" style="color: black"/></el-icon></span>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../assets/img/img.jpg"/>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" style="background-color: white" @command="handleCommand">
                    {{store.state.nickName}}
                    <span class="el-dropdown-link">
            {{ username }}
            <el-icon><component :is="`CaretBottom`"/></el-icon>
          </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <a
                                    href="https://gitee.com/diaock/cheng-kun-box.git"
                                    target="_blank"
                            >
                                <el-dropdown-item>项目仓库</el-dropdown-item>
                            </a>
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item divided command="loginout"
                            >退出登录
                            </el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const username = localStorage.getItem("ms_username");
const message = 2;

const store = useStore();
const collapse = computed(() => store.state.collapse);
// 侧边栏折叠
const collapseChage = () => {
    store.commit("handleCollapse", !collapse.value);
};

onMounted(() => {
    if (document.body.clientWidth < 1500) {
        collapseChage();
    }
});

// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command) => {
    if (command == "loginout") {
        localStorage.removeItem("ms_username");
        router.push("/login");
    } else if (command == "user") {
        router.push("/user");
    }

};
</script>


<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    background-color: #ffffff;
}

.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}

.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
    background-color: #ffffff;
}

.header-right {
    float: right;
    padding-right: 50px;
}

.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}

.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}

.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}

.btn-bell .el-icon-bell {
    color: #fff;
}

.user-name {
    margin-left: 10px;
}

.user-avator {
    margin-left: 20px;
}

.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.el-dropdown-menu__item {
    text-align: center;
}
</style>
