export default function handler(req, res) {
    const kakaoMapUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&libraries=services`;
  
    res.redirect(kakaoMapUrl);
  }