# P1

1. 创建项目
  
  ```bash
  npx create-next-app@latest
  ```

2. 运行
   
   ```bash
   npm run dev
   ```

   如果有报错可能是因为浏览器插件导致或者禁止报错（不建议）

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

# P2

创建仓库存储代码， 每一部分学习也都会创建一个分支方便查看变化

1. 创建新仓库
   添加新的远程仓库

   ```bash
   git remote add origin https://github.com/xphn95/study-nextjs.git
   ```

2. 创建并使用分支
   
   ```bash
   git checkout -b '01_项目初始化'
   ```
   
