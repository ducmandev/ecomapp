import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({
        width: "0px 20px",
        display:"flex",
        flexDirection: "column"
    })}
`
const FilterText = styled.span`
    font-size:20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        marginRight: "0px"
    })}
`
const Select = styled.select`
    padding:10px;
    margin-right: 20px;
    ${mobile({
        margin: "10px 0px"
    })}
`
const Option = styled.option`
    
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSorts] = useState("newest");

    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value,
        });
    };
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Vàng Trang Sức</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Bộ lọc sản phẩm:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option value="">
                            All
                        </Option>
                        <Option value="white">Trắng</Option>
                        <Option value="yellow">Vàng</Option>
                        <Option value="#5505D3">Tím than</Option>
                        <Option value="#FD6C9E">Hồng nhạt</Option>
                        <Option value="red">Đỏ</Option>
                        
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option value="">
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sắp xếp:</FilterText>
                    <Select onChange={(e)=>setSorts(e.target.value)}>
                    <Option value="newest">Mới Nhất</Option>
                    <Option value="asc">Giá tăng dần</Option>
                    <Option value="desc">Giá giảm dần</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>

    )
}

export default ProductList