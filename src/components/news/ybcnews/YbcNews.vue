<template>
  <div class="ybcnews">
    <div class="ybcnews-center">
      <web-dot></web-dot>
      <div class="title" v-rainbow>新闻资讯</div>
      <p class="new">最新资讯</p>
      <div
        class="new-hot"
        v-for="(item,index) in topview.slice(0,1)"
        :key="index"
        @click="showdetail(item.id)"
      >
        <div class="l">
          <div class="new-img">
            <img v-lazy="item.thumbnail" alt width="100%" height="100%">
          </div>
        </div>
        <div class="r">
          <div class="r-p">
            <h2 class="r-p-t">{{item.title}}</h2>
            <p class="r-p-c">{{item.excerpt}}</p>
            <div class="btn">查看全文</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
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
      },
      topview: []
    };
  },
  created() {
    //获得文章列表
    this.$http
      .get(API+"/api/v1.0/newses?page=1&per_page=1000")
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
    this.$http
      .get(API+"/api/v1.0/newses/topview")
      .then(result => {
        // console.log(result);
        this.topview = result.body.data.list;
        // console.log(this.topview)
      })
      .catch(err => {
        console.log(err);
      });
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
      this.$router.push({ path: "detail/" + id });
    }
  },
  components: {
    "web-dot": Dot
  }
};
</script>

<style scoped>
.ybcnews {
  width: 100%;
  background-color: #fff;
}
.ybcnews-center {
  width: 1290px;
  margin: 50px auto;
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 34px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 40px;
}
.ybcnews-center > p {
  font-size: 24px;
  color: #333;
  line-height: 35px;
  letter-spacing: 2px;
  margin-left: 10px;
  border-bottom: 1px dashed #ffecdb;
}
.new-hot {
  width: 100%;
  height: 410px;
  margin-top: 20px;
  /* background-color: orange; */
}
.new-hot .l {
  width: 700px;
  height: 410px;
  padding: 30px 70px;
  box-sizing: border-box;
  float: left;
}
.new-hot .l .new-img {
  width: 500px;
  height: 300px;
  /* background-color: pink; */
}
.new-hot .r {
  width: 520px;
  height: 410px;
  position: relative;
  /* background-color: pink; */
  float: right;
  margin-right: 60px;
  padding-top: 33px;
  box-sizing: border-box;
}
.new-hot .r .r-p {
  width: 100%;
  height: 100%;
}
.new-hot .r .r-p .r-p-t {
  font-size: 16px;
  line-height: 60px;
  letter-spacing: 2px;
  color: #333;
}
.new-hot .r .r-p .r-p-c {
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #666;
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 6;
}
.new-hot .r .r-p .btn {
  width: 150px;
  height: 40px;
  position: absolute;
  bottom: 90px;
  left: 0;
  background-color: #2bc4ca;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  text-indent: -1em;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
}
.line {
  width: 100%;
  height: 1px;
  margin: 0px 0 80px 0;
  background-color: #ffecdb;
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
