<template>
  <div>
    <div v-for="item in imgs" v-bind:key="item.id" class="li">
      <pic v-bind:width="item.width" @click="this.detail=true;this.imgId=item.id;this.imgSrc=item.pictureUrl;this.author=item.uploaderName;this.authorid=item.uploaderId;"  v-bind:picscr="item.pictureUrl" v-bind:id="item.pictureId" v-bind:sentence="item.description"/>
    </div>
    <br/>
    <q-dialog v-model="detail" full-height full-width>
      <pic-detail :pic-id="imgId" :img-url="imgSrc" :author="author"/>
    </q-dialog>
  </div>

</template>

<script>
import pic from "../../pic";

export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
    pic
  },
  name: "perfer",
  data:()=>({
    imgs:[],
    width: document.documentElement.clientWidth,
    ht: document.documentElement.clientHeight*0.55+'px',
    imgId:0,
    imgSrc:URL,
    author:"",
    detail:false,
  }),
  mounted:{
    ishide:function(){
      return false;
    },
  },
  methods:{
  },
  created() {
    this.$axios.get("http://127.0.0.1:8098/picture/getPictures",{
      params:{
        page:1,
        categoryName:"风景",
      }
    }).then(res=>{
      console.log(res.data.obj);
      this.imgs=res.data.obj;
    })
  }
}
</script>
<style scoped>
.cd{
  border-color: white;
  border-style: solid;
  border-width: 0.3rem;
  white-space:nowrap;
}
.li{
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  position: relative;
  cursor: pointer;
  list-style: none;
  white-space:nowrap;
  line-height: 1.25;
  letter-spacing: normal;
}
</style>