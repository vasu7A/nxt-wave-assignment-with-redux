import styled from "styled-components";

export const Main = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
`;

export const CustomButton = styled.button`
  background-color: ${(props) => (props.selected ? "#0B69FF" : "#f5f5f5")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#171F46")};
  height: 40px;
  width: 200px;
  border-style: solid;
  border-left-color: #d7dfe9;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: #d7dfe9;
  font-weight: semi-bold;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;

export const DivForButtons = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const Border = styled.div`
  border-color: #d7dfe9;
  border-style: solid;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
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
