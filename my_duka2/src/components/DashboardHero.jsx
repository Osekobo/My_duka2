import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardHero = ({ data }) => {
  return (
    <div className="container" style={{ width: "100%", height: 400 }}>
      <h2>Sales Per Product</h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="total_quantity_sold" name="Quantity Sold" />
          <Bar dataKey="total_sales_amount" name="Sales Amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default DashboardHero
