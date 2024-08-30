export default function ComponentProfile({icon, nameIcon, name}) {
    return (
        
            <div className="flex flex-col w-5/6 h-16 border-b border-black mt-2 gap-1 justify-center">
              <p>
                <i className={` ${icon} mr-2`}></i>{nameIcon}
              </p>
              <p className="font-semibold ml-6">{name}</p>
            </div>
        
    )
}