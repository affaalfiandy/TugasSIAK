import styled from "styled-components";

export const BackdropPembelian = styled.div`
position:relative;
width:100vw;
height:100vh;
background-color: rgba(0,0,0,0.5);
z-index:5;
`;

export const PopUpLayer = styled.div`
width:50vw;
height:50vh;
background-color:white;
text-align:center;
position:absolute;
top:25vh;
left:25vw;
opacity:1.0;
z-index:100;
border-radius:10px;
display:inline-flex;
padding:20px;
`;

export const TabelInput = styled.form`
margin-top:10%;
margin-left:25%;
display:block;
width:50%;
height:50%;
text-align:center;
`;

export const KolomInput = styled.div`
width:100%;
display:inline-flex;
text-align:center;
justify-content:space-between;
margin:2px;
`;