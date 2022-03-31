export function getStr(str = 'i am a string') {
  // return /** 动态导入 使用 ES6 import 的方式 */ import('loadsh').then(({ default: _ }) => {
  //   return _.join([...str])
  // })
}
// 使用 async await  获取资源
export async function getTest(str) {
  const { test } = await import('./methods') 
  return test(str)
}
