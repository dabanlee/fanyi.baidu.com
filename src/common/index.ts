import md5 from 'md5'

export const store: {
    auth?: Partial<TRANSLATE.Auth>,
    URL: string,
} = {
    auth: {},
    URL: `https://api.fanyi.baidu.com/api/trans/vip/translate`,
}

export function setAuth(AppID: string, AppSecret: string) {
    store.auth.AppID = AppID
    store.auth.AppSecret = AppSecret
}

export function generateSign(keyworld: string, salt: number) {

    if (!store.auth.AppID || !store.auth.AppSecret) {
        throw new Error(`Generate sign error, use "setAuth({ AppID, Secret })" to authorize.`)
    }

    return md5(store.auth.AppID + keyworld + salt + store.auth.AppSecret)
}