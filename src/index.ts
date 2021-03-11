import axios from 'axios'
import { generateSign, store } from './common'
export { setAuth } from './common'
export { LANG_CODE } from './common/langCode'

export async function translate(keyworld: string | string[], to = 'en'): Promise<TRANSLATE.Result[]> {
    if (Array.isArray(keyworld)) keyworld = keyworld.join(`\n`)

    const query = {
        q: keyworld,
        from: `auto`,
        to,
        appid: store.auth.AppID,
        salt: Date.now(),
        sign: ``,
    }

    query.sign = generateSign(keyworld, query.salt)

    return axios.get(store.URL, {
        params: query,
    }).then(({ data }) => data.trans_result.map(({ src, dst }) => ({ original: src, translated: dst })))
}
