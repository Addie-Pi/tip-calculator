export * from './Icon'

/*
    在管理共用元件的 components folder 之下設置 index.jsx 的好處是
    可以幫我們做集中且一起 export 出去的作用
    -> 我們可以把在這個 components folder 之下的 files 都集中在這邊，
        到時候便可以一起 export 出去
    -> 只要在外面 import components，他就會直接幫我們找到 index.jsx 這個地方
*/
