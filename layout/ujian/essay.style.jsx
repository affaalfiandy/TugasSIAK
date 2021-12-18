import styled from "styled-components";

export const PagePilganWrapper = styled.div`
position:relative;
width:100vw;
height:100vh;
`;

export const PagePilganContent = styled.div`
position:absolute;
width:95%;
height:90%;
margin:auto;
top:0;
bottom: 0;
left: 0;
right: 0;
text-align:center;
display:block;
`;

export const SoalContent = styled.div`
display:inline-flex;
`;

export const SoalWraper = styled.div`
width:50%;
height:100%;
display:block;
margin-left:100px;
`;

export const NomorWrapper = styled.div`
border:1px solid #4B6587;
height:250px;
width:25%;
border-radius:10px;
padding:20px;
margin-left:120px;
margin-top:100px;
`;

export const BtnWrap = styled.div`
width:250px;
height:150px;
display: inline-block;
margin-left:785px;
`;

export const BtnContent = styled.div`
display:inline-flex;
`;

export const TandaSoalContent = styled.div`
display:inline-flex;
`;

export const PilihanWrap =  styled.div`
width:100%;
display: inline-flex
`;

export const EssayInput = styled.textarea.attrs({ type: 'text', placeholder:'Ketik disini'})`
width:1000px;
height:300px;
border-radius:10px;
border:1px solid #4B6587;
padding:10px;
font-family:"ABeeZee", sans-serif;
`;