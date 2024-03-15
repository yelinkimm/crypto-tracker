import styled from "styled-components";
import { PriceData } from "./Coin";
import moment from "moment";

interface IPriceProps {
  tickersData?: PriceData
}

function Price({ tickersData }: IPriceProps) {
  const PriceItemContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  `;

  const PriceItem = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <div>
      <PriceItemContainer>
        <PriceItem>
          <span>Price:</span>
          <span>$ {tickersData?.quotes?.USD?.price}</span>
        </PriceItem>
      </PriceItemContainer>

      <PriceItemContainer>
        <PriceItem>
          <span>Total Volume 24h:</span>
          <span>$ {tickersData?.quotes?.USD?.volume_24h}</span>
        </PriceItem>
        <PriceItem>
          <span>% from ATH:</span>
          <span>{tickersData?.quotes?.USD?.percent_from_price_ath}%</span>
        </PriceItem>
      </PriceItemContainer>

      <PriceItemContainer>
        <PriceItem>
          <span>Volume ATH:</span>
          <span>$ {tickersData?.quotes?.USD?.ath_price}</span>
        </PriceItem>
        <PriceItem>
          <span>Volume ATH Date:</span>
          <span>
            {moment(tickersData?.quotes?.USD?.ath_date).format("YYYY-MM-DD")}
            {/* ({moment(tickersData?.quotes?.USD?.ath_date).fromNow()}) */}
          </span>
        </PriceItem>
      </PriceItemContainer>
    </div>
  )
}

export default Price;
