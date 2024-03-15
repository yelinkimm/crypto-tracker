import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: number
  time_close: number
  open: string
  high: string
  low: string
  close: string
  volume: string
  market_cap: number
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return (
    <div>
      {
        isLoading ? 
        "Loading chart..." : 
        <ApexChart
          type="candlestick"
          series={[
            {
              name: 'price',
              data: data?.map(price => [price.time_close, Number(price.open), Number(price.high), Number(price.low), Number(price.close)]) ?? []
            }
          ]}
          options={{
            chart: {
              width: 500,
              height: 300,
              toolbar: {
                show: false
              },
              background: "transparent"
            },
            grid: {
              show: false
            },
            stroke: {
              curve: "smooth",
              width: 3
            },
            yaxis: {
              show: true
            },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              enabled: true,
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
          />
      }
    </div>
  )
}

export default Chart;
