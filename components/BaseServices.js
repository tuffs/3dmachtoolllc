import services from '@/data/services';

const BaseServices = () => {
  return (
    <>
    
      <div className="w-full my-32">
        <ul className="my-3 md:flex"> 
          {services.map((s, i) => (
            <li key={i} className="mx-auto mt-10 mb-10">
              <a href={s.link} className="text-gray-400 hover:text-gray-200">
                <img
                  src={s.imageUrl}
                  className="h-auto md:w-[325px]"
                />
                <h1 className="mt-[.22399rem] text-gray-400 hover:text-gray-300 float-right" style={{letterSpacing: "-1px"}}>{s.name}</h1>
              </a>
            </li>
          ))}
        </ul>
      </div>
    
    </>
  );
}

export default BaseServices;