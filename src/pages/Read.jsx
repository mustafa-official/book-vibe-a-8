import { useEffect, useState } from "react";
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
import { getFromLocalStorage } from "../utils/localStorage";

const Read = () => {
  const [totalPages, setTotalPages] = useState([]);
  const [bookNames, setBookNames] = useState([]);
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    setReadList(getFromLocalStorage);
  }, []);

  useEffect(() => {
    let bookName = [];
    let pages = [];
    readList.map((item) => {
      bookName.push(item.bookName);
      pages.push(item.totalPages);
    });
    setBookNames(bookName);
    setTotalPages(pages);
  }, [readList]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const data = bookNames.map((name, index) => ({
    name: name,
    pages: totalPages[index],
  }));
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="w-[400px] lg:w-[700px] h-[200px] lg:h-[400px] mt-6 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Read;
