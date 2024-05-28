import { BiMessageSquareDetail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import CustomHandle from "../CusHandle/CustomHandle";
import { Position } from "reactflow";

export default function TextMessageNode({ data, ...props }) {
  return (
    <div className="flex-col border min-w-72 bg-white rounded-lg">
      <div className="flex justify-between p-2 border-b">
        <BiMessageSquareDetail size={16} />

        <p className="text-xs">Send Message</p>

        <IoLogoWhatsapp size={16} className="text-[#25D366]" />
      </div>

      <div className="p-2 py-4">
        {data.value ? (
          <h1
            className="text-sm text-center whitespace-pre-line"
            onClick={() => data.onClick()}
          >
            {data.value}
          </h1>
        ) : (
          <p className="text-sm text-center text-gray-400">Click to edit</p>
        )}
      </div>

      <CustomHandle type="target" position={Position.Left} />
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
}
