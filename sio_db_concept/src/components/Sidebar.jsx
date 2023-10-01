import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineLink,
  AiOutlineContacts,
  AiTwotoneTool,
} from "react-icons/ai";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col bg-black space-y-4">
      <h1 className="text-white p-5">SIO Dashboard</h1>
      <div className="px-4">
        <button class="bg-black hover:bg-indigo-500 text-gray-800 font-bold py-2 px-4 w-full rounded inline-flex items-center">
          <AiOutlineHome
            color="white
          "
          />
          <p className="text-white">Home</p>
        </button>
      </div>
      <div className="px-4">
        <button class="bg-black hover:bg-indigo-500 text-gray-800 font-bold py-2 px-4 w-full rounded inline-flex items-center">
          <AiOutlineLink
            color="white
          "
          />
          <p className="text-white">Links</p>
        </button>
      </div>
      <div className="px-4">
        <button class="bg-black hover:bg-indigo-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <AiOutlineContacts
            color="white
          "
          />
          <p className="text-white">contacts</p>
        </button>
      </div>
      <div className="px-4">
        <button class="bg-black hover:bg-indigo-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <AiTwotoneTool
            color="white
          "
          />
          <p className="text-white">settings</p>
        </button>
      </div>
    </div>
  );
}
