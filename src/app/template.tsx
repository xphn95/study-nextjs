export default function Template({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="template border-red-300 border-2 border-solid">
      <h3>我是template</h3>
      { children }
    </div>
  )
}
