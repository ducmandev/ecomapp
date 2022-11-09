import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { useSelector,useDispatch } from "react-redux";
import {logoutUser}  from "../redux/userRedux"

const Container = styled.div`
    height :60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding:5px;
`;

const Input = styled.input`
border:none;
outline: none;
${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: #D1B000;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
    font-size :  14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const handleClickUser = (actionkey) =>{
        console.log(actionkey)
        // hand login, logout, register
        if (actionkey === "register"){
            navigate("/"+ actionkey, { replace: true });
        }
        else if (actionkey === "login"){
            navigate("/"+ actionkey, { replace: true });
        }else{
            //Clear state login user
            dispatch(
                logoutUser()
              );
            
        }
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>VN</Language>
                    <SearchContainer>
                        <Input placeholder='seach' />
                        <Search style={{ color: "gray", fontSize: 16 }}></Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                    }}>GOLD</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={()=>handleClickUser("register")}>ĐĂNG KÍ</MenuItem>
                    {user ?
                        (<><MenuItem>Chào {user.username} </MenuItem><MenuItem onClick={() => handleClickUser("logout")}>
                            ĐĂNG XUẤT
                        </MenuItem></>)
                        :
                        <MenuItem onClick={()=>handleClickUser("login")}>
                            ĐĂNG NHẬP
                        </MenuItem>
                    }
                    <Link to="/cart">
                        <MenuItem>
                            <Badge overlap="rectangular" badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar