<template>
  <v-app>
    <!-- Header -->
    <v-app-bar border="0" flat color="primary">
      <!-- Header 左侧 -->
      <v-app-bar-title class="ma-0">
        <v-row class="ma-0"
               align="center"
               :style="mdAndUp ? 'height: 64px; width: 768px;' : 'height: 64px; width: 320px;'">
          <v-row class="font-weight-bold" align="center" style="height: 64px; width: 256px;">
            <v-spacer/>
            <v-icon icon="mdi-card-search-outline"/>
            <span class="ml-2">INQUIRY</span>
            <v-spacer/>
            <v-divider vertical/>
          </v-row>
          <span style="width: 64px;">
            <v-btn class="ml-5" icon="mdi-menu" @click="drawer = !drawer"/>
          </span>
          <v-breadcrumbs
            v-if="mdAndUp"
            :items="this.$route.meta['breadcrumbs']"
            class="text-body-1"
            style="width: 448px;">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
          <v-spacer/>
        </v-row>
      </v-app-bar-title>
      <!-- Header 右侧 -->
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-account-circle-outline" v-bind="props">
            <v-tooltip activator="parent" location="start">Username</v-tooltip>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item v-for="(item, i) in menu" :key="i" :title="item.title" @click="item.click()">
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Navigation -->
    <v-navigation-drawer border="0" color="primary" v-model="drawer">
      <v-divider/>
      <v-list nav>
        <v-list-item v-for="(item, i) in navigation" :key="i"
                     :prepend-icon="item.icon" :title="item.title" :to="item.to"/>
      </v-list>
    </v-navigation-drawer>
    <!-- App -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>

import {onMounted, ref} from 'vue'
import {useDisplay} from 'vuetify'
// import {useAppStore} from "@/store/app";

const {mdAndUp} = useDisplay()

const drawer = ref(false)

// const appStore = useAppStore()

onMounted(() => {
  // screen
  if (mdAndUp.value) {
    drawer.value = true
  }
  // check
  let token
  if (localStorage.getItem("token") !== undefined) {
    token = localStorage.getItem("token")
    console.log("token:" + token)
  } else {
    console.log("token:未登录")
  }
})

const navigation = [
  {
    icon: 'mdi-home-outline',
    title: '主页 - Home',
    to: '/home',
  },
  {
    icon: 'mdi-domain',
    title: '企业 - Company',
    to: '/company',
  },
  {
    icon: 'mdi-message-text-outline',
    title: '留言 - Message',
    to: '/message',
  },
]

const menu = [
  {
    title: '个人信息',
    // icon: 'mdi-account-circle-outline',
    click: () => {
      console.log("info~")
    },
  },
  {
    title: '退出登陆',
    // icon: 'mdi-power',
    click: () => {
    },
  },
]

</script>
