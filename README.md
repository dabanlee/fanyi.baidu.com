# fanyi.baidu.com

## Getting Started

```ts
$ yarn add fanyi.baidu.com
```

## Usage

```ts
import { translate, setAuth } from 'fanyi.baidu.com'

const auth = { ID: ``, Sceret: `` }

setAuth(auth.ID, auth.Secret)

;(async () => {
    // auto detect original language to 'zh' and target language default to 'en'
    const translated = await translate('中国')
    console.log(translated) // [{ original: '中国', translated: 'China' }]
    // auto detect original language to 'en' and specify target language to 'zh'
    const translated = await translate('China', 'zh')
    console.log(translated) // [{ original: 'China', translated: '中国' }]
})()
```

## Api

```ts
declare namespace TRANSLATE {
    interface Result {
        original: string,
        translated: string,
    }
}

setAuth(appID: string, appSecret: string): void

translate(keyworld: string | string[], to = 'en'): Promise<TRANSLATE.Result[]>
```

## Language List

[Language List](http://api.fanyi.baidu.com/doc/21)