import request from '@/utils/request'



// ai聊天
export function getChatgptText(chatTxt) {
    const data = {
        chatTxt
    }
    return request({
        'url': '/chatgpt/getChatgptText',
        'method': 'get',
        'params': data
    })
}


