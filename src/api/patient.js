import fetch from '@/util/request'

// 尝试网络接口
export function test() {
  return fetch({
    url: '',
    method: 'POST',
    params: {
      type: '1'
    }
  })
}
