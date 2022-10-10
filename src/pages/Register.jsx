import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({
        width: "75%"
    })}
`;

const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0px;

`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Đăng kí mới Tài Khoản</Title>
            <Form>
                <Input placeholder="Tên"/>
                <Input placeholder="Họ"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm pasword"/>
                <Agreement>
                Bằng cách tạo tài khoản, tôi đồng ý với việc xử lý dữ liệu cá nhân của mình theo <b>CHÍNH SÁCH BẢO MẬT</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register