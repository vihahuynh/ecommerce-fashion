import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import Products from "../components/Products";

import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 20px;
  text-transform: uppercase;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ padding: "7px", margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [e.target.name]: value,
      };
    });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container>
      <Layout>
        <Title>{category || ""}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products: </FilterText>
            <Select onChange={handleSort}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
      </Layout>
    </Container>
  );
};

export default ProductList;
