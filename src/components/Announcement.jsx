import styled from 'styled-components'

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
`

const Announcement = () => {
  return (
    <div>
        <Container>
            Siêu khuyến mãi! Miễn phí ship với Order trên 500.000 VNĐ
            </Container>        
    </div>
  )
}

export default Announcement