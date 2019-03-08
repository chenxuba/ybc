<template>
  <div class="publicBenefitMsg">
    <div class="publicBenefitMsg-center">
      <web-dot></web-dot>
      <div class="title" v-rainbow>{{welfare.title}}</div>
      <div class="p-txt">
        <p>{{welfare.desc}}</p>
      </div>
      <div class="img-item-box">
        <div class="item-top-box">
          <div class="item-img-box" v-for="(item,index) in welfare.list" :key="index">
            <img v-lazy="item.fr_image" alt>
          </div>
        </div>
      </div>
      <!-- ---------------------- -->
     <web-dot></web-dot>
      <div class="title" v-rainbow>公益活动</div>
      <div class="course-link">
        <div class="course-item" v-for="(item,index) in list" :key="index">
          <div class="img-box">
            <img v-lazy="item.thumbnail" alt>
          </div>
          <div class="time">
            <div class="mouth">{{item.c_time | time2}}</div>
            <div class="year">{{item.c_time | time3}}</div>
          </div>
          <h2 class="course-item-title" :title="item.title">{{item.title}}</h2>
          <p class="course-item-p">{{item.excerpt}}</p>
          <div class="course-item-see" @click="showdetail(item.id)">查看全文</div>
        </div>
        <p class="test" v-if="list.length == 0">暂无数据～</p>
      </div>
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
    </div>
  </div>
</template>

<script>
import Dot from "../../homepage/system/Dot/dot";
export default {
  data() {
    return {
      list: [],
      alllist: [],
      paginations: {
        page_index: 1, //当前位于哪一页
        total: 0, //总数
        page_size: 1, //一页显示多少条
        page_sizes: [3, 6, 9], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper"
      }
    };
  },
  methods: {
    handleSizeChange(page_size) {
      // console.log(page_size)
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.list = this.alllist.filter((item, index) => {
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
        this.list = listbox;
      }
    },
    setPaginations() {
      this.paginations.total = this.alllist.length;
      // console.log(this.paginations.total)
      this.paginations.page_index = 1;
      this.paginations.page_size = 10; //控制初始页面显示的条数
      this.list = this.alllist.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    showdetail(id) {
      this.$router.push({ path: "detail2/" + id });
    }
  },
  created() {
    //获得文章列表
    this.$http
      .get(API+"/api/v1.0/welfares?page=1&per_page=1000")
      .then(result => {
        // console.log(result);
        this.alllist = result.body.data.list;
        // console.log(this.alllist)
        //设置分页数据
        this.setPaginations();
      })
      .catch(err => {
        console.log(err);
      });
  },
  props: {
    welfare: {
      type: Object,
      default: {}
    }
  },
  components: {
    "web-dot": Dot
  }
};
</script>

<style scoped>
.test{
  color: red;
  margin:  0 auto;
  font-size: 20px;
  line-height: 200px;
}
.publicBenefitMsg-center {
  width: 1296px;
  margin: 50px auto;
  margin-bottom: 45px;
}
.publicBenefitMsg-center .title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 34px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-bottom: 56px;
}
.p-txt {
  margin-bottom: 50px;
}
.p-txt p {
  width: 100%;
  min-width: 1296px;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 2px;
  color: #3e3a39;
}
.img-item-box {
  width: 100%;
}
.item-top-box {
  width: 100%;
  height: 715px;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding:0 90px;
  margin-bottom: 30px;
  align-content: space-around;
  justify-content: space-between;
}
.item-top-box .item-img-box {
  width: 273px;
  height: 346px;
}
.item-top-box .item-img-box img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 28px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-top: 10px;
}

.course-link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 80px;
  /* background: red; */
  box-sizing: border-box;
}
.course-link .course-item {
  width: 360px;
  height: 520px;
  margin-bottom: 60px;
  margin-right: 18px;
  background-color: #ebeff2;
  float: left;
  position: relative;
}
.course-link .course-item:nth-child(3n) {
  margin-right: 0;
}
.course-link .course-item .img-box {
  width: 345px;
  height: 260px;
  background-color: orange;
  margin: 8px 0 0 9px;
}
.course-link .course-item .img-box img {
  width: 100%;
  height: 100%;
}
.course-link .course-item .course-item-title {
  font-size: 16px;
  color: #333;
  line-height: 50px;
  margin-left: 9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.course-link .course-item .course-item-p {
  margin-left: 9px;
  margin-right: 8px;
  font-size: 12px;
  color: #666;
  line-height: 22px;
  text-overflow: ellipsis;

  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.course-link .course-item .course-item-see {
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-indent: -1em;
  font-size: 14px;
  color: #fff;
  margin-left: 9px;
  position: absolute;
  left: 0;
  bottom: 25px;
  margin-top: 30px;
  background-color: #2bc4ca;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}
.course-link .course-item .time {
  width: 130px;
  height: 26px;
  display: flex;
  line-height: 26px;
  margin-left: 9px;
  margin-top: 20px;
  /* background-color: red; */
  border-bottom: 2px solid #2bc4ca;
}
.course-link .course-item .time .mouth {
  font-size: 24px;
  color: #333;
  margin-right: 10px;
}
.course-link .course-item .time .year {
  font-size: 15px;
  color: #333;
}
.fenye {
  text-align: center;
  margin-bottom: 30px;
}
</style>
