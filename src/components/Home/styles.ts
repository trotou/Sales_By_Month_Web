import styled from "styled-components";
import { Colors } from "../../assets/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: ${Colors.primary};
  color: ${Colors.primary};

  .top-bar {
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #88b3e7;
    position: static;
    top: 0;
    z-index: 10;
  }

  .top-bar > span {
    display: flex;
    align-items: center;
    width: 77vw;
    justify-content: space-between;
    margin: 0 auto;
  }

  .perfil-info {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .perfil-info > div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: red;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 80vw;
    height: fit-content;
  }

  .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    color: black;
  }

  .header h3 {
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  .header-actions {
    display: flex;
    width: 100%;
    height: 25%;
    margin-top: 15px;
    align-items: center;
    justify-content: space-between;
  }

  .table-container {
    display: flex;
    width: 100%;
    height: 400px;
  }
`;
