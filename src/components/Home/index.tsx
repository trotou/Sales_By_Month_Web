import React, { useEffect } from "react";
import { HomeContainer } from "./styles";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import API from "../../services";
import { SumList } from "../../helpers/functions/sumList";
import { handleCatedoryChange } from "../../helpers/functions/handleCategorieChange";
import { handleProductChange } from "../../helpers/functions/handleProductChange";
import { labels, options } from "../../helpers/constants";
import { handleBrandChange } from "../../helpers/functions/handleBrandChange";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Home = () => {
  const [list, setList] = React.useState<any[]>([]);
  const [productSelect, setProductSelect] = React.useState<any[]>([""]);
  const [brandSelect, setBrandSelect] = React.useState<any[]>([""]);
  const [productValue, setProductValue] = React.useState<string>("");

  useEffect(() => {
    API.get("/products").then((res) => {
      setList(SumList(res));
    });
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Vendas",
        data: list,
        backgroundColor: "#88b3e7",
      },
    ],
  };

  return (
    <HomeContainer>
      <div className="top-bar">
        <span>
          <div className="perfil-info">
            <div></div>
            <h3>Luke FileWalker</h3>
          </div>

          <h2>Sales Report</h2>
        </span>
      </div>

      <div className="content">
        <div className="header">
          <div className="header-actions">
            <span>
              Categoria:
              <select
                onChange={(e) =>
                  handleCatedoryChange(e, setList, setProductSelect)
                }
              >
                <option value="">All</option>
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
              </select>
            </span>

            <span>
              Produto:
              <select
                onChange={(e) =>
                  handleProductChange(
                    e,
                    setList,
                    setBrandSelect,
                    setProductValue
                  )
                }
              >
                {productSelect.map((item) => (
                  <option key={item.value} value={item.key}>
                    {item.key}
                  </option>
                ))}
              </select>
            </span>

            <span>
              Marca:
              <select
                onChange={(e) => handleBrandChange(e, setList, productValue)}
              >
                {brandSelect.map((item) => (
                  <option key={item.value} value={item.key}>
                    {item.key}
                  </option>
                ))}
              </select>
            </span>
          </div>

          <h3>Sales By Month for:</h3>
        </div>

        <div className="table-container">
          <Bar options={options} data={data} />
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
