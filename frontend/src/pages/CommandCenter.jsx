import { useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function CommandCenter(){

 const [query,setQuery]=useState("");
 const [response,setResponse]=useState(null);

 const submit=async()=>{

   const res=await axios.post(
      "http://127.0.0.1:8000/support",
      {query}
   );

   setResponse(res.data);
 }

 return(

 <div className="flex">

   <Sidebar/>

   <div className="flex-1 p-10">

     <h1 className="text-4xl mb-5">
       AI Command Center
     </h1>

     <textarea
       className="w-full h-40 bg-slate-800 p-4 rounded-xl"
       value={query}
       onChange={(e)=>setQuery(e.target.value)}
     />

     <button
      onClick={submit}
      className="bg-cyan-500 px-6 py-3 rounded-xl mt-5"
     >
      Run Agents
     </button>

     {response && (

      <div className="bg-slate-800 mt-8 p-5 rounded-xl">

       <pre>
         {JSON.stringify(response,null,2)}
       </pre>

      </div>

     )}

   </div>

 </div>

 )

}