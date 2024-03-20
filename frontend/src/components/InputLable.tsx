import { ChangeEvent } from "react"

type LabelledInputType = {
  label: string,
  type?: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputLable = ({ label, type, placeholder, onChange }: LabelledInputType) => {
  return <div >
    <div className=" font-medium mt-3">{label}</div>
    <input type={type || "text"} placeholder={placeholder} className="mt-1 p-2 border border-slate-400 bg-gray-50 rounded-md w-80" onChange={onChange} />
  </div>
}

export default InputLable;