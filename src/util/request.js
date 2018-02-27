// url前缀
const urlPre = 'http://120.27.238.253:5991'

// 把长虹request封装成promise形式进行返回
const service = (config) => {
  const url = 'http://10.3.93.204:8808/charts/type/findTypeAndNorm'
  return new Promise(
    (resolve, reject) => {
      // url,method,success,params,failCallBack
      // requestData(urlPre + config.url, config.method || 'GET', function(result) {
      requestData(url, config.method || 'GET', function(result) {
        alert('成功')
        resolve(result)
      }, { data: config.params || {} } || '', function(e) {
        alert('失败' + JSON.stringify(e))
        reject(e)
      })
    }
  )
}
export default service
