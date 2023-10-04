export default function ContactsPage() {
  return (
    <div className="bg-neutral-100 flex flex-col min-h-screen space-y-8 p-8 items-center">
      <h1 className="text-center text-white bg-indigo-400 rounded-md text-lg p-2">
        Contact list
      </h1>
      <table className="table-auto w-full bg-white border-collapse border border-slate-400 drop-shadow-lg rounded-md overflow-hidden">
        <thead>
          <tr>
            <th className="text- center border border-slate-300 p-2">Name</th>
            <th className="text- center border border-slate-300 p-2">
              Phone number
            </th>
            <th className="text- center border border-slate-300">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text- center border border-slate-300 p-2">
              Manager
            </td>
            <td className="text- center border border-slate-300 p-2">
              778-889-1317
            </td>
            <td className="text- center border border-slate-300 p-2">
              test@bcehs.ca
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
