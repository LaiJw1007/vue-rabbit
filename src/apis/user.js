// 封装所有和用户相关的接口函数
import request from "@/utils/http";
export const loginAPI = ({account, password}) => {
  return request({
    url: "/login",
    method: "POST",
    data: {   //BODY体参数
      account,
      password,
    },
  });
};

export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}
