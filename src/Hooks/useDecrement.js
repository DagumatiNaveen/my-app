import { useState } from "react"

export const useDecrement=(initialvalue=10)=>{
    const[count,setCount]=useState(initialvalue);

    const handleDecrement=()=>{
      if (count <1) {
      setCount(initialvalue);
    } else {
      setCount(count - 1);
    }
}

return[count,handleDecrement]
}
