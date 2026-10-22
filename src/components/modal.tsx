import type { Dispatch, ReactNode, SetStateAction } from "react"

type SizeType = 'lg' | 'xl' | 'full'
type Props = {
    children: ReactNode
    size?: SizeType;
    onClose: Dispatch<SetStateAction<boolean>>
}

export default function Modal({children, size= 'xl', onClose}: Props) {
    const w = () => {
        switch(size) {
            case 'xl': 
                return 'w-[60%]';
            case 'lg': 
                return 'w-[40%]';
            case 'full': 
                return 'w-[95%]';
        }
    }
  return (
    <>
        <div className={`${w()} fixed top-[30%] left-[50%] bg-white p-3 rounded-lg translate-y-[-50%] translate-x-[-50%]`}> 
            <div className="text-right">
                <button onClick={() => onClose(false)}>close</button>
            </div>
            {children}
        </div>
    </>
  )
}
