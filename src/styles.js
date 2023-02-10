import styled from "styled-components";


export const Container = styled.div`
    background-color: #ffffff;
    height: 100vh;

`

export const ChoiceOpts = styled.header`

    background-color: #515151;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    div button img, a img{
        width: 2.4rem;
        border: none;
        background-color: #ffffff;
        border-radius: .1rem;
        display: flex;
        align-items: center;


    }
    div button{
        padding: 0;
        border: none;
        border-radius: .1rem;
    }
    img{
         width: 5rem;
    }

    div{
        display: flex;
        align-items: center;
    }

    div input{
        height: 2.2rem;
        border: none;
        border-radius: 1rem 0 0 1rem;
        width: 12rem;
        padding-left: .5rem;
    }
`
export const ItemOpts = styled.span`
    font-size: 1.6rem;

    height: 100%;
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a img{
        color: #fff;
        text-decoration: none;
    }

    img{
       width: 5rem;
    }



`

export const Categories = styled.nav`


`

export const Contents = styled.section`


`

export const FooterOpts = styled.footer`

`

