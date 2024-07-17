const people = [
  {
    name: 'JiangBan Qin',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://qinjiangban.site/favicon.ico',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl: '/logo/LOGO白底图.png',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl: '/logo/LOGO副图.png',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl: '/logo/LOGO黑底图.png',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl: '透明LOGO黑色.png',
  },
  {
    name: 'Leslie Alexander',
    role: 'Director of Product',
    imageUrl: '透明LOGO白色.png',
  },
  // More people...
]
export default function D() {
  return (
    <div className="bg-[#3f1de7] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl bg-[#C0E218] p-2">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-[#000]">认识我们团队</h2>
          <p className="mt-6 text-lg leading-8 text-[#000]">
            出色的团队，需要人才
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 bg-[#C0E218] p-2">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base leading-7 tracking-tight font-bold text-[#000]">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-[#3f1de7]">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
