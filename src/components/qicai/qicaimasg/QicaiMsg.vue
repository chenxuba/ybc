<template>
  <div class="qicaimsg">
    <div class="menuAndlist">
      <div class="menu">
        <p class="menu-name">产品分类</p>
        <div class="menu-box">
          <ul>
            <li
              v-for="(item,index) in menu_list"
              :key="index"
              @click="select(item.equicate_id,index)"
              :class="{active:index == current}"
            >
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="list">
        <div class="top">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/qicai' }">康复器材</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="center">
          <ul>
            <li v-for="(item,index) in alllist" :key="index" @click="showDetail(item)">
              <img :src="item.thumbnail" alt>
              <span>{{item.name}}</span>
            </li>
          </ul>
          <p class="test" v-if="!alllist">暂无数据～</p>
          <div class="fenye">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="paginations.page_index"
              :page-sizes="paginations.page_sizes"
              :page-size="paginations.page_size"
              :layout="paginations.layout"
              :total="paginations.total"
            ></el-pagination>
          </div>
          <web-goods :goods="selectGood" ref="goodView"></web-goods>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Goods from "./Goods";
export default {
  data() {
    return {
      show: false,
      menu_list: [],
      goods: [],
      current: 0,
      selectGood: {},
      alllist: [],
      paginations: {
        page_index: 1, //当前位于哪一页
        total: 0, //总数
        page_size: 1, //一页显示多少条
        page_sizes: [8, 10, 15], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper"
      },
      default: ""
    };
  },
  mounted() {
    // this.getMenulist(); //获取分类
    this.getGoods();
  },
  methods: {
    showDetail(item) {
      // console.log(item);
      this.selectGood = item;
      this.$refs.goodView.showView();
    },
    // getMenulist() {
    //   this.$http.get(API+"/api/v1.0/equicates").then(res => {
    //     this.menu_list = res.body.data.list;
    //     // console.log(this.default)
    //   });
    // }, //获取分类列表
    getGoods() {
      this.$http.get(API+"/api/v1.0/equicates").then(res => {
        this.menu_list = res.body.data.list;
        this.default = res.body.data.list[0].equicate_id;
        this.$http
          .get(
            API+`/api/v1.0/equicates/${this.default}/equipments`
          )
          .then(res => {
            this.alllist = res.body.data.list;
            this.setPaginations();
          })
          .catch(err => {});
      });
    },
    handleSizeChange(page_size) {
      // console.log(page_size)
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.goods = this.alllist.filter((item, index) => {
        return index < page_size;
      });
    },
    handleCurrentChange(page) {
      // console.log(page)
      //获取当前页
      let index = this.paginations.page_size * (page - 1);
      let nums = this.paginations.page_size * page;
      //容器
      let listbox = [];
      for (let i = index; i < nums; i++) {
        if (this.alllist[i]) {
          listbox.push(this.alllist[i]);
        }
        this.goods = listbox;
      }
    },
    setPaginations() {
      this.paginations.total = this.alllist.length;
      // console.log(this.paginations.total);
      this.paginations.page_index = 1;
      this.paginations.page_size = 8; //控制初始页面显示的条数
      this.goods = this.alllist.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    select(id, index) {
      this.$http
        .get(API+`/api/v1.0/equicates/${id}/equipments`)
        .then(res => {
          // console.log(res);
          this.alllist = res.body.data.list;
          this.setPaginations();
        })
        .catch(err => {});
      this.current = index;
      this.$refs.goodView.closeView();
    }
  },
  components: {
    "web-goods": Goods
  }
};
</script>

<style scoped>
.fenye {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
}
.qicai {
  width: 100%;
  min-width: 1296px;
  height: 100%;
}
.active {
  color: red !important;
}
.menuAndlist {
  width: 1296px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  /* background-color: orange; */
}
.menuAndlist .menu {
  width: 190px;
  height: 600px;
  margin-right: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #2bc4ca;
}
.menuAndlist .menu .menu-name {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 55px;
  letter-spacing: 3px;
}
.menuAndlist .menu .menu-box {
  width: 100%;
  height: 80%;
  background-color: #fff;
}
.menuAndlist .menu .menu-box ul {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  font-weight: bold;
}
.menuAndlist .menu .menu-box ul li {
  font-size: 13px;
  line-height: 50px;
  cursor: pointer;
  color: #575757;
}
.menuAndlist .menu .menu-box ul li span:hover {
  color: #2bc4ca;
}
.menuAndlist .list {
  flex: 1;
}
.menuAndlist .list .top {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.menuAndlist .list .center {
  width: 100%;
  min-height: 695px;
  position: relative;
}
.test {
  text-align: center;
  color: #2bc4ca;
  letter-spacing: 2px;
  line-height: 250px;
}
.menuAndlist .list .center ul {
  overflow: hidden;
  zoom: 1;
}
.menuAndlist .list .center ul li {
  width: 25%;
  float: left;
  text-align: center;
  padding-top: 28px;
  cursor: pointer;
}
.menuAndlist .list .center ul li img {
  width: 100%;
  height: 178.7px;
  margin-bottom: 24px;
}
.menuAndlist .list .center ul li span {
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  color: #776f6f;
}
.menuAndlist .list .center ul li:hover span {
  color: #2bc4ca;
}
</style>
