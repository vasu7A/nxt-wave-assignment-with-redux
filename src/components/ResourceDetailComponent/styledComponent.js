import styled from "styled-components";

export const Main = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 10px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const CardDiv = styled.div`
  max-height: 192px;
  max-width: 360px;
  margin-top: 80px;
  border-color: #d7dfe9;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
`;

export const Border = styled.div`
  display: flex;
`;

export const CardImage = styled.img`
  height: 30px;
  width: 30px;
  color: #171f46;
`;

export const ImgDiv = styled.div`
  border-color: #d7dfe9;
  border-style: solid;
  border-radius: 50px;
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBorder = styled.div`
  border-color: #d7dfe9;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
`;

export const CardName = styled.h1`
  font-size: 16px;
  color: #171f46;
`;

export const ReturnHome = styled.div`
  display: flex;
  align-items: center;
`;
export const Spacing = styled.div`
  padding-left: 20px;
`;

export const Gray = styled.p`
  color: #7e858e;
`;

export const UpdateBtn = styled.button`
  background-color: #0b69ff;
  height: 40px;
  width: 93px;
  color: white;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const TableTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchWithSort = styled.div`
  display: flex;
  align-items: center;
`;

export const BsFilterRight = styled.i`
  color: red;
`;

export const BorderSearch = styled.div`
  border-color: #d7dfe9;
  border-style: solid;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

export const Input = styled.input`
  border-style: none;
  outline: none;
  min-height: 40px;
  min-width: 648px;
  font-size: 14px;
  padding-left: 7px;
`;
