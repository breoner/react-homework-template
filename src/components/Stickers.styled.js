import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

export const ChoiceTitle = styled.h2`
  font-size: 24px;
  color: black;
  background-color: white;
  padding: 15px;
  border: 2px dashed gray;
  border-radius: 5px;

  span {
    color: blue;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
export const Card = styled.li`
  background-color: white;
  /* Якщо стікер обрано — рамка синя, якщо ні — сіра */
  border: 2px solid ${(props) => (props.$isSelected ? "blue" : "lightgray")};
  border-radius: 8px;
  padding: 10px;
  width: 130px;
  cursor: pointer;

  /* Звичайний простий ефект при наведенні мишки */
  &:hover {
    border-color: blue;
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: black;
  }
`;
