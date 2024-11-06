# P1 创建项目

1. 创建项目
  
  ```bash
  npx create-next-app@latest
  ```

2. 运行
   
   ```bash
   npm run dev
   ```

   如果有报错可能是因为浏览器插件导致报水合不匹配警告可以[使用suppressHydrationWarning](https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning)（不建议）建议关闭浏览器插件

   ```html
   <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    ```


3. 打包
   
   ```bash
   npm run build
   ```

4. 运行打包代码

    ```bash
    npm start
    ```

# P2 路由定义

创建仓库存储代码， 每一部分学习也都会创建一个分支方便查看变化

1. 创建新仓库
   添加新的远程仓库

   ```bash
   git remote add origin https://github.com/xphn95/study-nextjs.git
   ```

2. 创建并使用分支/推送分支
   
   ```bash
   git checkout -b 01_项目初始化
   git push origin 01_项目初始化
   ```

next.js 的路由是根据文件结构的, app 文件夹下的每个文件夹代表一个映射到 URL 段的路由段，每个文件夹的 page （.js、.jsx、.ts 或 .tsx 文件扩展名都可用于特殊文件）文件用于使路由段可公开访问

# P3 布局

布局是在多个路由之间共享的 UI, 可以嵌套。

每个路由结构下，page 文件的内容会填充到 layout 文件的内容。

根布局是必须的，而且必须包含 html 和 body 标记。

# P4 模板

模板与布局类似，嵌套关系：
`layout > template > page`

# P5 布局与模板的差异

路由跳转 layout 不会重新渲染状态会保持；template 会重新渲染，状态不会保留。


