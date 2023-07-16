import { Tag } from "@/component/common/Tag/Tag";
import styled from "styled-components";

export const ProjectListHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 168px;
`;
export const ProjectListFilterButton = styled.button`
  width: 70px;
  height: 52px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 13px;
  padding-bottom: 13px;
`;
export const ProjectListSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-right: 12px;
`;
export const ProjectListFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjectListLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 0.5px solid black;
  width: 27px;
`;
export const ProjectListSmallCircle = styled.div`
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
`;

export const ProjectListHr = styled.hr`
  margin-top: 16px;
  margin-bottom: 40px;
`;
export const ProjectListTags = styled.section`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;

export const ProjectListMain = styled.section`
  position: relative;
  display: grid;
  justify-content: space-between;

  /* 데스크탑 */
  grid-template-columns: repeat(4, 1fr);

  /* 테블릿 */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 모바일 */
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-row-gap: 20px;
  grid-column-gap: 0px;
`;

export const FilterTag = styled(Tag)`
  :hover {
    border-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.red};
    cursor: pointer;
  }
`;

export const ProjectListSelect = styled.select`
  width: 150px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  position: absolute;
  top: -74px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
`;
