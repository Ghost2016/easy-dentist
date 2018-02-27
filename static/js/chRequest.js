/**
 *
 * @param url 请求的url地址
 * @param method 请求方式
 * @param success 成功时回调
 */
function requestData(url,method,success,params,failCallBack){
  ////////////////////////以下是生产站的借口，暂时不要调用
  method = method||"get";
  if(!url) ch.native.common.showMsg("请求地址错误","middle");
  var paramObj = {
      url:url,
      method:method,
      timeout:30000,
      success:function(result){
          try {
              if(typeof result==="string"){
                   result = JSON.parse(result);
              //     alert(result);
              }
              result = result.result;
              /*for(var key in result.result){
                  alert(key);
              }*/
              success(result);
              //if(result&&result.rspCode=="000000"){
              //    success(result.data);
              //}else{
              //    ch.native.common.showMsg("数据异常","middle");
              //}
          }catch (e) {
             // alert(e.message+"  "+ e.lineNumber);
              ch.native.common.showMsg("数据异常","middle");
          }
      },
      fail:function(data){
          if(failCallBack){
              failCallBack(data);
          }else{
              if(onFail instanceof Function){
                  onFail(data);
              }
          }
          ch.native.common.showMsg("网络异常，请稍后重试！","middle");
      }
  }
//   paramObj = $.extend(true,{},paramObj,params);
  let tempObj = Object.assign({}, paramObj, params)
  paramObj = JSON.parse(JSON.stringify(tempObj))
//  alert(JSON.stringify(paramObj));
  try {
      ch.native.network.networkRequest(paramObj);
  } catch (e) {
      ch.native.common.showMsg("网络异常","middle");
  }
}
function parseIfNeeded(arg){
  if(arguments){
      var localArgument = arguments[0];
      if(arguments[0]){
          if(typeof localArgument=="string" &&(localArgument.indexOf("[")>-1&& localArgument.indexOf("]")>-1||localArgument.indexOf("{")>-1&& localArgument.indexOf("}")>-1)){
              try{
                  localArgument = JSON.parse(arguments[0]);
              }catch(e){
                  return localArgument;
              }
          }
      }
      return localArgument;
  }
}