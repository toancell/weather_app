import TopButton from "../components/TopButton"
import Input from "../components/Input"
import DailyFocast from "../components/DailyFocast"
import MainContent from "../components/MainContent"
const Layout = () => {
  return (
    <div className="max-w-screen-md mx-auto pt-4 px-2">
      <TopButton />
      <Input />
      <MainContent />
      <DailyFocast />
    </div>
  )
}

export default Layout
