import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getStoredReadList } from "../utils/addToDb";

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const storedReadIds = getStoredReadList();
        const readList = data.filter((book) =>
          storedReadIds.includes(book.bookId),
        );

        const chartData = readList.map((book) => ({
          name: book.bookName,
          pages: book.totalPages,
        }));
        setReadBooks(chartData);
      });
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-8 my-20 bg-gray-50 p-10 rounded-3xl h-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={readBooks}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={-20} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={TriangleBar}
            label={{ position: "top" }}
          >
            {readBooks.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
