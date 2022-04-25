import styled from 'styled-components'

export const Container =styled.div`
padding:80px 60px;
background: radial-gradient(circle, rgba(92,39, 251,1) 0%,rgba(112,71,247,1) 100%);

`

export const Column =styled.div`
display:flex; 
flex-direction: column;
text-align: center;
margin-left: 60px;
`

export const Row =styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
grid-gap:20px;


`

export const Wrapper =styled.div`
display:flex; 
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;
`

export const Link =styled.div`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration:none;

&:hover{
    color:#ff9c00;
    transform: 200ms ease-in;
}
`

export const Title =styled.div`
font-size: 24px;
font-weight: bold;
margin-bottom: 40px;
color: #fff;

`
    



