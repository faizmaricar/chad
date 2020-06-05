import styled from 'styled-components';


export const Box = styled.div`
  width: 1280px;
  height: 800px;
  object-fit: contain;
`;
// const Content = styled.div`
//     background-image: url(${props => props.img});
// `;
// const PropsBox = styled.div`
//     background: ${(props) => (props.background ? props.background : "")};
//     height: '50px';
//     width: '50px';
//   `

export const Wallpaper = styled.div`
  opacity: 10;
  mix-blend-mode: soft-light;
  border-radius: 10px;
  width: auto;
  height: auto;
  text-align: center;
  display: grid;
`

// background-image: url(${img});
// export const Wallpaper = styled.div`
// border: 1px solid #000;
//   width: 1280px;
//   height: 800px;
//   background-image: url(${img});
// `; 

// Create a Title component that'll render an <h1> tag with some styles
export  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  //color: palevioletred;
`;

export const Advert = styled.div`


`
// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
opacity: 1;
filter: alpha(opacity=40); 
//position: absolute;
//padding: 1em;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  object-fit: contain;
  //text-align: center;
  //margin-top: 150px;
  width: 3000px;
  height: 3000px;
  background: url("images/wallpaper@3x.png") no-repeat center fixed;
  z-index: 1;
  display: grid;
  margin: auto; 

  

`;
export const Block1 = styled.div`
z-index: 3;
display: grid;
height: 500px;
width: 200px;
background-color: red;
//position: absolute;
margin: auto; 
`;
export const CenterLoginBox = styled.div`
width: 694px;
height: 560px;
opacity: 1;
border-radius: 10px;
background-color: #000000;
// height: 80vh;
// width: 280px;
mix-blend-mode: soft-light;
z-index: 4;
margin-left: auto;
margin-right: auto;
margin-bottom: auto;
margin-top: 100px;
`; 

export const Grid =styled.div`
display: grid;
margin: 0;
`;

export const Row = styled.div`
    display: grid;
    color: #000000;
    heigth: 80vh;
    margin: 0;

`;

export const Col = styled.div`
    color: #000000;
    display: grid;
    //width: 500px;
    //dislay: inline-block:
    flex: ${(props)=> props.size}
    //  margin: auto;
    margin: 0;
    `;