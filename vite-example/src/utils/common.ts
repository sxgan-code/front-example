/* 系统复制命令-clipboard api方式 */
import router from "@/router";

export async function copyToClipboard(text: string): Promise<void> {
    await navigator.clipboard.writeText(text).then(() => {
        console.log('成功复制到剪贴板！[ ' + text + ' ]')
    }).catch(() => {
        console.log('无法复制到剪贴板！')
    })
}

export enum HrefTypeEnum {
    LOCAL_HREF = 'local_router',
    ONLINE_HREF = 'online_href'
}

export function goToHref(type: HrefTypeEnum, address: string) {
    if (type === HrefTypeEnum.LOCAL_HREF) {
        router.push({path: address})
    } else {
        window.open(address)
    }
}