const messages = [];

//sendStatus: 
// NOT_SEND : 发送前 ,时间前5分钟，可取消发送。 数量显示：-
//RE_SEND_PREPARED： 等待发送，发送以后重试时出现的状态。
                     //当前schedule有正在发送的对象，当轮到该消息发送，状态修改为SEND_ON. 
                     //数量显示：失败数量，成功数量，总发送数量。
                     //发送完毕后，显示发送History link和发送历史数量
//RE_SEND：
//SEND_ON: 正在发送 ，无法取消发送。 数量显示：-
//CALL_API_FAILED
//SEND_FAILED： 发送失败。
                //数量中显示： 因为API失败|| 因DB发送失败
//SEND_COMPLETE: 完成发送。 数量显示：失败数量，成功数量，总发送数量

export default messages;