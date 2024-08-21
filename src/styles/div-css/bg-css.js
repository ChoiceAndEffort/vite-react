/*
 * @Author: lg
 * @Date: 2023-12-18 17:27:36
 * @LastEditors: lg
 * @LastEditTime: 2024-01-04 13:04:42
 * @Description:
 * @FilePath: \vite-react\src\styles\div-css\bg-css.js
 */
import styled, { css } from 'styled-components';

const commonStyle = css`
  width: 100%;
  height: 100%;
`;

const flexColumnStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const flexRowStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BgColorDiv = styled.div`
  ${commonStyle};
  background: ${(props) => props.bgColor};
`;
//   background: url('https://p.qqan.com/up/2023-12/17028688024519300.jpg');
export const BgImgDiv = styled.div`
  ${commonStyle};
  ${flexRowStyle};
  background-image: ${(props) => `url(${props.bgimage})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
`;
