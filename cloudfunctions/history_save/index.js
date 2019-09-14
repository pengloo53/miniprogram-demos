// 引入模块
const cloud = require('wx-server-sdk')
// 初始化云开发
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 传入参数 today
  let today = event.today;
  let env = event.env;
  // 更新默认配置，将默认访问环境设为当前云函数所在环境
  cloud.updateConfig({
    env
  });
  // 初始化数据库
  const db = cloud.database();
  // 获取 history 集合对象
  const db_history = db.collection('history');

  const res = await cloud.callFunction({
    name: 'history'
  })
  console.log(res);
  let lists = res.result.showapi_res_body.list;
  await db_history.add({
    data: {
      date: today,
      lists: lists
    }
  }).then(res => {
    console.log(res);
  })
  return {
    date: today,
    lists: lists
  };
}