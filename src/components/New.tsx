const New = ({list}) => {
  return (
    <>
    {list.map(li => <a href="#" className="w-64 group">
      <article key={li.id}>
        <div className="overflow-hidden">
          <img src={li.newImg} alt={li.newTitle} className="aspect-square object-cover transition duration-300 group-hover:scale-125" />
        </div>
        <h3 className="mt-4 font-bold text-lg text-blue-950 leading-snug">{li.newTitle}</h3>
        <p className="mt-2 text-blue-950 font-medium text-sm">{li.newMonthDate} {li.newDayDate}, {li.newYearDate}</p>
      </article>
    </a> 
    )}
    </>
  )
}

export default New