<template>
  <view class="word" id="scroll-view-content">
    <scroll-view :scroll-y="true"  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"  @scroll="scroll" >
      <view  v-for="item in megList" :key="item.id" >
        <!-- 收到的消息 -->
        <view class="other-people" v-if="!item.myMeg">
          <uni-icons custom-prefix="iconfont" type="icon-jiqiren" size="30" color="while"></uni-icons>
          <view class="meg">
            {{item.message}}
            <br/>
            <view class="copy" @tap="()=>copy(item)" >
              复制
            </view>
          </view>
        </view>
        <!-- 自己发出去的消息 -->
        <view class="my-message" v-else>
          <view class="matter">
            {{item.message}}
            <br/>
            <view class="copy" @tap="()=>copy(item)" >
              复制
            </view>
          </view>
        </view>

      </view>
    </scroll-view>
  </view>
</template>

<script>
import { getChatgptText } from '@/api/chataiview/chataiview'

export default{
  data(){
    return{
      megList:[

      ],
      scrollTop: 0,
      old: {
        scrollTop: 0
      }
    }
  },
  methods:{
    //发送消息
    sendMessage(value) {
      if (!value.trim()) {
        return;
      }
      this.megList.push({ myMeg: true, message: value });
      // TODO: 调用接口发送请求，获取回复消息，添加到megList中
      new Promise((resolve, reject) => {
        getChatgptText(this.megList[this.megList.length-1].message).then(res => {
          console.log('json_',JSON.stringify(res))
          if(res.code == 200){
            this.megList.push({ myMeg: false, message: res.data.content })
          }else{
            this.megList.push({ myMeg: false, message: "返回异常，请等待一段时间重试。" })
          }
          this.scrollTop += 500;
          this.$nextTick(function() {
            this.scrollTop += 500;
          });
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    scroll: function(e) {
      // this.old.scrollTop = e.detail.scrollTop
    },
    copy(item){
      console.log("message",item);
      uni.setClipboardData({
        data: item.message,// 复制的内容
        success: function () {
          console.log('success');
          uni.showToast({
            title:'复制成功',
            duration:2000
          })
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-Y{
  height: 100vh;
}
.word{
  padding: 0 20rpx 160rpx;
  background: #efefef;
  .my-message{
    display: flex;
    justify-content: flex-end;
    margin-top: 30rpx;
    image{
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
    .matter{
      background: #05BABF;
      padding: 25rpx;
      font-size: 32rpx;
      margin-right: 25rpx;
      color: #FFFFFF;
      border-top-left-radius: 20rpx;
      border-bottom-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;
    }
  }
  .other-people{
    display: flex;
    margin-top: 30rpx;
    image{
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
    .meg{
      width: 70%;
      font-size: 32rpx;
      color: #393939;
      margin-left: 25rpx;
      background: #FFFFFF;
      padding: 25rpx;
      border-top-right-radius: 20rpx;
      border-bottom-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;

    }
  }
}
.copy{
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  font-size: 26rpx;
  color: aquamarine;
}
</style>
