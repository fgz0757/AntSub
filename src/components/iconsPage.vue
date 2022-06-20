<template>
  <div class="title">
    <SlackOutlined :style="{ fontSize: '16px' }" />
    <p>自定义图标</p>
  </div>
  <div class="count" @click="getText">
    <div>
      <android-outlined :style="{ fontSize: '34px' }" />
      <p>android-outlined</p>
    </div>
    <div>
      <apple-outlined :style="{ fontSize: '34px' }" />
      <p>apple-outlined</p>
    </div>
    <div>
      <windows-outlined :style="{ fontSize: '34px' }" />
      <p>windows-outlined</p>
    </div>
    <div>
      <ie-outlined :style="{ fontSize: '34px' }" />
      <p>ie-outlined</p>
    </div>
    <div>
      <chrome-outlined :style="{ fontSize: '34px' }" />
      <p>chrome-outlined</p>
    </div>
    <div>
      <github-outlined :style="{ fontSize: '34px' }" />
      <p>github-outlined</p>
    </div>
    <div>
      <aliwangwang-outlined :style="{ fontSize: '34px' }" />
      <p>aliwangwang-outlined</p>
    </div>
    <div>
      <dingding-outlined :style="{ fontSize: '34px' }" />
      <p>dingding-outlined</p>
    </div>
    <div>
      <weibo-square-outlined :style="{ fontSize: '34px' }" />
      <p>weibo-square-outlined</p>
    </div>
    <div>
      <weibo-circle-outlined :style="{ fontSize: '34px' }" />
      <p>weibo-circle-outlined</p>
    </div>
    <div>
      <taobao-circle-outlined :style="{ fontSize: '34px' }" />
      <p>taobao-circle-outlined</p>
    </div>
    <div>
      <html5-outlined :style="{ fontSize: '34px' }" />
      <p>html5-outlined</p>
    </div>
    <div>
      <weibo-outlined :style="{ fontSize: '34px' }" />
      <p>weibo-outlined</p>
    </div>
    <div>
      <twitter-outlined :style="{ fontSize: '34px' }" />
      <p>twitter-outlined</p>
    </div>
    <div>
      <wechat-outlined :style="{ fontSize: '34px' }" />
      <p>wechat-outlined</p>
    </div>
    <div>
      <youtube-outlined :style="{ fontSize: '34px' }" />
      <p>youtube-outlined</p>
    </div>
    <div>
      <alipay-circle-outlined :style="{ fontSize: '34px' }" />
      <p>alipay-circle-outlined</p>
    </div>
    <div>
      <taobao-outlined :style="{ fontSize: '34px' }" />
      <p>taobao-outlined</p>
    </div>
    <div>
      <skype-outlined :style="{ fontSize: '34px' }" />
      <p>skype-outlined</p>
    </div>
    <div>
      <qq-outlined :style="{ fontSize: '34px' }" />
      <p>qq-outlined</p>
    </div>
    <div>
      <medium-workmark-outlined :style="{ fontSize: '34px' }" />
      <p>medium-workmark-outlined</p>
    </div>
    <div>
      <gitlab-outlined :style="{ fontSize: '34px' }" />
      <p>gitlab-outlined</p>
    </div>
    <div>
      <medium-outlined :style="{ fontSize: '34px' }" />
      <p>medium-outlined</p>
    </div>
    <div>
      <linkedin-outlined :style="{ fontSize: '34px' }" />
      <p>linkedin-outlined</p>
    </div>
    <div>
      <google-plus-outlined :style="{ fontSize: '34px' }" />
      <p>google-plus-outlined</p>
    </div>
    <div>
      <dropbox-outlined :style="{ fontSize: '34px' }" />
      <p>dropbox-outlined</p>
    </div>
    <div>
      <facebook-outlined :style="{ fontSize: '34px' }" />
      <p>facebook-outlined</p>
    </div>
    <div>
      <codepen-outlined :style="{ fontSize: '34px' }" />
      <p>codepen-outlined</p>
    </div>
    <div>
      <code-sandbox-outlined :style="{ fontSize: '34px' }" />
      <p>code-sandbox-outlined</p>
    </div>
    <div>
      <amazon-outlined :style="{ fontSize: '34px' }" />
      <p>amazon-outlined</p>
    </div>
    <div>
      <google-outlined :style="{ fontSize: '34px' }" />
      <p>google-outlined</p>
    </div>
    <div>
      <codepen-circle-outlined :style="{ fontSize: '34px' }" />
      <p>codepen-circle-outlined</p>
    </div>
    <div>
      <alipay-outlined :style="{ fontSize: '34px' }" />
      <p>alipay-outlined</p>
    </div>
    <div>
      <ant-design-outlined :style="{ fontSize: '34px' }" />
      <p>ant-design-outlined</p>
    </div>
    <div>
      <ant-cloud-outlined :style="{ fontSize: '34px' }" />
      <p>ant-cloud-outlined</p>
    </div>
    <div>
      <aliyun-outlined :style="{ fontSize: '34px' }" />
      <p>aliyun-outlined</p>
    </div>
    <div>
      <zhihu-outlined :style="{ fontSize: '34px' }" />
      <p>zhihu-outlined</p>
    </div>
    <div>
      <slack-outlined :style="{ fontSize: '34px' }" />
      <p>slack-outlined</p>
    </div>
    <div>
      <slack-square-outlined :style="{ fontSize: '34px' }" />
      <p>slack-square-outlined</p>
    </div>
    <div>
      <behance-outlined :style="{ fontSize: '34px' }" />
      <p>behance-outlined</p>
    </div>
    <div>
      <behance-square-outlined :style="{ fontSize: '34px' }" />
      <p>behance-square-outlined</p>
    </div>
    <div>
      <dribbble-outlined :style="{ fontSize: '34px' }" />
      <p>dribbble-outlined</p>
    </div>
    <div>
      <dribbble-square-outlined :style="{ fontSize: '34px' }" />
      <p>dribbble-square-outlined</p>
    </div>
    <div>
      <instagram-outlined :style="{ fontSize: '34px' }" />
      <p>instagram-outlined</p>
    </div>
    <div>
      <yuque-outlined :style="{ fontSize: '34px' }" />
      <p>yuque-outlined</p>
    </div>
    <div>
      <alibaba-outlined :style="{ fontSize: '34px' }" />
      <p>alibaba-outlined</p>
    </div>
    <div>
      <yahoo-outlined :style="{ fontSize: '34px' }" />
      <p>yahoo-outlined</p>
    </div>
    <div>
      <reddit-outlined :style="{ fontSize: '34px' }" />
      <p>reddit-outlined</p>
    </div>
    <div>
      <sketch-outlined :style="{ fontSize: '34px' }" />
      <p>sketch-outlined</p>
    </div>
  </div>
</template>
<script>
import {
  SlackOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  YoutubeOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumWorkmarkOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
  DribbbleSquareOutlined,
  InstagramOutlined,
  YuqueOutlined,
  AlibabaOutlined,
  YahooOutlined,
  RedditOutlined,
  SketchOutlined,
} from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
export default {
  components: {
    SlackOutlined,
    AndroidOutlined,
    AppleOutlined,
    WindowsOutlined,
    IeOutlined,
    ChromeOutlined,
    GithubOutlined,
    AliwangwangOutlined,
    DingdingOutlined,
    WeiboSquareOutlined,
    WeiboCircleOutlined,
    TaobaoCircleOutlined,
    Html5Outlined,
    WeiboOutlined,
    TwitterOutlined,
    WechatOutlined,
    YoutubeOutlined,
    AlipayCircleOutlined,
    TaobaoOutlined,
    SkypeOutlined,
    QqOutlined,
    MediumWorkmarkOutlined,
    GitlabOutlined,
    MediumOutlined,
    LinkedinOutlined,
    GooglePlusOutlined,
    DropboxOutlined,
    FacebookOutlined,
    CodepenOutlined,
    CodeSandboxOutlined,
    AmazonOutlined,
    GoogleOutlined,
    CodepenCircleOutlined,
    AlipayOutlined,
    AntDesignOutlined,
    AntCloudOutlined,
    AliyunOutlined,
    ZhihuOutlined,
    SlackOutlined,
    SlackSquareOutlined,
    BehanceOutlined,
    BehanceSquareOutlined,
    DribbbleOutlined,
    DribbbleSquareOutlined,
    InstagramOutlined,
    YuqueOutlined,
    AlibabaOutlined,
    YahooOutlined,
    RedditOutlined,
    SketchOutlined,
  },
  setup() {
    let obj = reactive({
      text: "",
    });
    function getText(e) {
      if (e.target.nodeName == "DIV") {
        obj.text = e.target.children[1].innerHTML;
      }
      if (e.target.nodeName == "P") {
        obj.text = e.target.innerHTML;
      }
      if (e.target.nodeName == "svg") {
        obj.text = e.target.parentElement.parentElement.children[1].innerHTML;
      }
      message.success(obj.text + "复制完成", 1.5, () => {
        console.log(obj.text);
      });
    }
    return {
      ...toRefs(obj),
      getText,
    };
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font: 16px;
}
.count {
  background: #fff;
  padding: 30px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    width: 15%;
    height: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &:hover > p {
      color: #fff;
    }
    p {
      font-size: 12px;
    }
  }
  & > div:hover {
    background: #1890ff;
  }
}
</style>