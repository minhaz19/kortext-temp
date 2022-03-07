import { useEffect, useState, memo } from 'react'
import { toast } from "react-hot-toast";
import "./style.css"
import putToggleProductStatus from "../../services/product/putToggleProductStatus";

const ToggleSwitch = ({ className, status, id }) => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  useEffect(() => {
    setToggleSwitch(status)
    // eslint-disable-next-line
  }, [])

  const toggleRequest = () => {
    toast.promise(putToggleProductStatus(id), {
      loading: 'Updating Status...',
      success: (res) => {
        setToggleSwitch(v => !v)
        console.log(res)
        if (res.hasVariant === true) {
          window.location.reload()
        }
        return 'Status updated!'
      },
      error: 'Error updating!',
    })

  }

  return (
    <div className={className}>
      <div
        className={`h-4 w-10 ${toggleSwitch ? "bg-blue-300" : "bg-gray-200"
          } rounded-lg relative cursor-pointer transition duration-300`}
        onClick={() => toggleRequest()}
      >
        <div
          className={`w-5 h-5 bg-gray-400 rounded-full absolute switchBall-${toggleSwitch ? "right" : "left"
            } ${toggleSwitch ? "bg-blue-400" : "bg-gray-200"}`}
        ></div>
      </div>
    </div>
  );
}

export default memo(ToggleSwitch)
