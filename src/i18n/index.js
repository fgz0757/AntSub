import {createI18n} from "vue-i18n";
import en from "./config/en";
import zh from "./config/zh"; 
const I18n = createI18n({
    legacy:false,
    locale:"en",
    messages:{
        en,zh
    }
})
export default  I18n