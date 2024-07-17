const people = [
  {
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: '生活小窍门',
    description: '如何将车停在车库？',
  }
]


export default function Example() {
  return (
    <div className="bg-[base-100] py-24 sm:py-32 ">
      <div className="mx-auto max-w-4xl lg:text-center  px-6 lg:px-8">


        <h1 className="text-xl font-semibold leading-7 text-info">产品服务</h1>


        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 md:max-w-none md:grid-cols-2 lg:gap-y-16">

            {people.map((person) => (
              <div className="card glass sm:w-96">

                <figure>
                  <img
                    src={person.imageUrl}
                    alt="car!" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{person.title}</h2>
                  <p>{person.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">查看</button>
                  </div>
                </div>

              </div>
            ))}


          </dl>
        </div>





      </div>
    </div>
  )
}
