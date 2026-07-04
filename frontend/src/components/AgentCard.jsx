export default function AgentCard({name,status}) {

 return(
  <div className="bg-slate-800 rounded-xl p-5">

   <div className="flex justify-between">

    <h3>{name}</h3>

    <div className="text-green-400">
      {status}
    </div>

   </div>

  </div>
 )

}