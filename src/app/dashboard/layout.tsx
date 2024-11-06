export default function DashboardLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="width-200 border-4 border-solid border-black">
      <h5>我是 DashboardLayout</h5>
      { children }
    </div>
  )
}
