import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'


export default (app: any) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(ElementPlus, { locale: localeZH })
}
