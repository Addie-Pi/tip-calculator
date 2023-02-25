import { ReactComponent as Logo } from '../images/logo.svg'

import { ReactComponent as Dollar } from '../images/icon-dollar.svg'

import { ReactComponent as Person } from '../images/icon-person.svg'

// 做好以下設定就可以直接在外面使用 Icon 這個 namespace

/* 
    沒有預設，直接 export 一個 module 出來，
    可以在外面用 object destructure 的方式使用
    -> import { Icon } from './Icon'
*/
export const Icon = { Logo, Dollar, Person }

/*
    直接預設會 export Icon 出來
    -> import A from './Icon'
    -> 這邊的 A 就表示 Icon
*/
export default Icon
