export default function HelpfulLinks() {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col space-y-8 p-8 items-center">
      <h2 className="text-center text-white bg-indigo-400 text-lg rounded-md w-fit p-2">
        Helpful Links
      </h2>
      <table className="table-auto w-full bg-white border-collapse border border-slate-400 drop-shadow-lg rounded-md overflow-hidden">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Website</th>
            <th className="border border-slate-300">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center border border-slate-300 p-2">BCWS</td>
            <td className="text-center border border-slate-300">Link</td>
          </tr>
          <tr>
            <td className="text-center border border-slate-300 p-2">Windy</td>
            <td className="text-center border border-slate-300">Link</td>
          </tr>
          <tr>
            <td className="text-center border border-slate-300">
              Weather Alerts
            </td>
            <td className="text-center border border-slate-300 p-2">Link</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
