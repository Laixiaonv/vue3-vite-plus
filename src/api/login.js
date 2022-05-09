import request from '@/utils/request'

export function login(username, password, code, uuid) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: {
      username,
      password,
      code,
      uuid
    }
  })
}

export function updatePass(data) {
  return request({
    url: '/api/users/updatePass',
    method: 'post',
    data: data
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: ''
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'auth/logout',
    method: 'post'
  })
}
// 获取验证码
export function getSms(params) {
  return request({
    url: '/sms/sendSms',
    method: 'get',
    params
  })
}
// 商战登录
export function busLogin(data) {
  return request({
    url: 'auth/loginByPhone',
    method: 'post',
    data: data
  })
}
// 修改手机号
export function editPhone(data) {
  return request({
    url: 'api/users/updatePhone',
    method: 'post',
    data: data
  })
}
// 导出文件
export function exportFile(url, params, method = 'get') {
  const body = method === 'get' ? {
    url: url,
    method: method,
    responseType: 'blob',
    params
  } : {
    url: url,
    method: method,
    responseType: 'blob',
    data: params
  }
  return request(body)
}
