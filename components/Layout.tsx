const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  )
}

export default Layout
