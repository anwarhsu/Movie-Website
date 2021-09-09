import React from "react";

import { calcTime, convertMoney } from "../../helpers";
import MovieInfo from "../MovieInfo";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./MovieInfoBar.styles";

const MoveInfoBar = ({ time, budget, Revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue {convertMoney(Revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MoveInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MoveInfoBar;
