<template>
  <div class="create-user">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>创建新的数据库用户</span>
    </div>
    <div>
        <div>
            <el-input placeholder="请输入用户名" v-model="username" class="input">
                <template slot="prepend">用户名</template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="password" class="input">
                <template slot="prepend">密码</template>
            </el-input>
            <el-input placeholder="请输入目标服务器 IP 地址" v-model="host" class="input">
                <template slot="prepend">IP地址</template>
            </el-input>
            {{username}} {{password}}
        </div>

    </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input{
      margin:10px 0px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

 
</style>
