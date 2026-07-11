import { useEffect, useState } from "react";
import { getHistory } from "@/api/historyApi";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await getHistory();
        console.log(result);
        setHistory(result.history || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white">
        Resume History
      </h1>

      <div className="mt-8 space-y-4">
        {history.map((item) => (
          <div
            key={item._id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-semibold text-white">
              {item.fileName}
            </h2>

            <p className="mt-2 text-cyan-400">
              ATS Score: {item.atsScore}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;