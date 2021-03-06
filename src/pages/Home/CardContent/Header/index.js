import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from 'components';

import { Title, LastUnits } from './styled';

const Header = ({ products }) => {
  const isUnavailable = products.quantityAvailable === 0;
  const isLastUnits = products.quantityAvailable <= 10;

  const fullWidth = isUnavailable || isLastUnits;

  return (
    <>
      <Title fullWidth={fullWidth} numberOfLines={1}>
        {products.name}
      </Title>
      {isUnavailable ? (
        <Tag color="black">sem estoque</Tag>
      ) : (
        isLastUnits && <LastUnits color="red">últimas unidades</LastUnits>
      )}
    </>
  );
};

Header.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
