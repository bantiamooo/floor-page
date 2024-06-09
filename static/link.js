const link = {
  // 开云体育
  "KaiYun": "https://www.2p7vq9.com:6002/register63985?i_code=1",
  // 九游娱乐
  "NineGame": "https://www.2p7vq9.com:6002/register63985?i_code=2",
  // 华体会
  "HTH": "https://www.2p7vq9.com:6002/register63985?i_code=3",
  // MK Sports
  "MKSports": "https://www.2p7vq9.com:6002/register63985?i_code=4",
  // 客服
  "service": "https://www.2p7vq9.com:6002/register63985?i_code=5",

  // h5 跳转地址
  // 开云体育
  "H5_KaiYun": "https://www.2p7vq9.com:6002/register63985?i_code=1",
  // 九游娱乐
  "H5_NineGame": "https://www.2p7vq9.com:6002/register63985?i_code=2",
  // 华体会
  "H5_HTH": "https://www.2p7vq9.com:6002/register63985?i_code=3",
  // MK Sports
  "H5_MKSports": "https://www.2p7vq9.com:6002/register63985?i_code=4",
  // 客服
  "H5_service": "https://www.2p7vq9.com:6002/register63985?i_code=5"
}

const runToLink = (key) => {
  let aEl = document.createElement('a')
  aEl.href = link[key]
  aEl.click()
  aEl = null
}