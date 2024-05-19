import New from "./New"

const News = () => {

  const news = [
    {
      id: 1,
      newImg: "https://i.pinimg.com/564x/91/51/ef/9151ef51e7bbc4b8d6d5c87760292965.jpg",
      newTitle: "Redesigning my site increased sales by over 400% in one week.",
      newMonthDate: "Jul",
        newDayDate: 4,
          newYearDate: 2024
    },
    {
      id: 1,
      newImg: "https://i.pinimg.com/736x/b4/81/e4/b481e4b1d13f1cb6afdcfdcb9d40a5e9.jpg",
      newTitle: "Design handoff: What engineers really want to see",
      newMonthDate: "Jul",
      newDayDate: 8,
      newYearDate: 2024
    },
    {
      id: 1,
      newImg: "https://i.pinimg.com/564x/5a/c9/f2/5ac9f25e82c91043810a248f5b772aa7.jpg",
      newTitle: "A comprehensive list of human-computer interactions",
      newMonthDate: "Jul",
      newDayDate: 16,
      newYearDate: 2024
    },
    {
        id: 1,
        newImg: "https://i.pinimg.com/564x/89/74/f4/8974f43557f3e9a974805a6dcab66835.jpg",
        newTitle: "Why do people hate redesigns?",
        newMonthDate: "Jul",
        newDayDate: 22,
        newYearDate: 2024
    }
  ]

  return (
    <section className="p-6">
      <div className="flex items-center justify-center gap-3">
        <div className="hidden sm:block relative -top-4 h-[.050em] w-28 bg-blue-950"></div>
        <h4 className="text-center mb-8">We share our thoughts on design</h4>
        <div className="hidden sm:block relative -top-4 h-[.050em] w-28 bg-blue-950"></div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center lg:flex-row lg:items-start">
        <New list={news}/>
      </div>
    </section>
  )
}

export default News