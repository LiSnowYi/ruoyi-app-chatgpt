<template>
	<view>
		<view class="top logo">
				<text class="title text-area">机智 AI</text>	
				<text class="text-area-text">机智AI是基于open AI公司制作的chatgpt开源的接口实现的智能ai小程序，CHATGPT是基于人工智能技术和自然语言处理技术，可以与用户进行自然语言的交流，欢迎各位使用此小程序体验。</text>	
		</view>
		<view class="typebutton">
			<view type="primary" class="ai-button" data-path="/pages/chat/chataiview/index" @click="toPath">
			    <span class="ai-icon">	
					<uni-icons custom-prefix="iconfont" type="icon-jiqiren" size="30" color="while"></uni-icons>
				</span>
			    <span>AI 对话</span>
			  </view>
		</view>
</view>
</template>

<script>

  export default {
    onLoad: function() {
		
    },
    methods: {
      toPath(e) {
          let r = e.currentTarget.dataset.path;
		      console.log(r);
          this.$tab.navigateTo(r)
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .describe{
	  margin-left: auto;
  }

  .logo {
	height: 45vh;
	background-color: #4885eb;
  }

  .text-area {
	padding-top: 10vh;
    display: flex;
    justify-content: center;
	align-content: center;
  }
  .text-area-text {
  	padding-top: 1vh;
	padding-left: 3vh;
	padding-right: 3vh;
    display: flex;
    justify-content: center;
  	align-content: center;
	color: aliceblue;
	font-weight: 500;
	word-break:break-all;
	line-height:2
  }

  .title {
    font-size: 65rpx;
    color: white;
	font-weight: 500;
  }
  .typebutton{
	  margin-top: 3vh;
  }
  .ai-button {
    border: none;
    background-color: #737373;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  .ai-button:hover {
    background-color: #e6e6e6;
    color: #737373;
  }
  .ai-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 24px;
  }
</style>
