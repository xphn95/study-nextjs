export default function SettingsLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <h6>我是SettingsLayout</h6>
      { children }
    </div>
  )
}
