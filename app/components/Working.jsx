
import {Button, Heading} from './'
import { roadmap } from '../constants'
import { grid } from '../assets'

const Working = () => {
  return (
    <div className={`!px !py-10`}>
      <div className='container md:pb-10'>
        <Heading title={`Some Of Our Recent Work`}/>
        <div className='relative grid md:grid-cols-2 gap-6 md:gap-4 md:pb-[7rem]'>
          {roadmap.map((item) => (
            <div className={`md:flex overflow-hidden even:md:translate-y-[5rem] p-0.25 border-2 border-n-1/30 rounded-[2.5rem]`} key={item.id}>
              <div className='relative p-8 bg-n-9 rounded-[2.4375rem]'>
                <div className="absolute top-0 left-0 max-w-full">
                  <img 
                  className='w-full'
                  src={grid} 
                  // width={550}
                  // height={550}
                  alt="grid image"
                  loading='lazy'
                  />
                </div>
                <div className="relative z-1 overflow-hidden">
                  <div className='mb-10 -my-10 -mx-15'>
                    <img 
                    src={item.imageUrl}
                    alt="gird upper image"
                    className={""}
                    />

                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center items-center mx-auto mt-7'>
          {/*<Link to={"/portfolio"}>*/}
           <Button href={"/portfolio"} className={'flex justify-center items-center'} white>
          Show more
        </Button>
          {/*</Link>*/}
        </div>
      </div>
    </div>
  )
}

export default Working