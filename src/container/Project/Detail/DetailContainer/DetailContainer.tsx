import React from 'react';
import {
  Caption,
  DetailContainerStyle,
  ProjectDetailHeader,
  ProjectDetailThumbnail,
  SimpleDesc,
  Tags,
  Title,
  TumbnailSection,
} from './DetailContainer.style';
import Hr from '@/component/common/Hr/Hr';
import { Author } from '@/component/common/Author/Author';
import { Tag } from '@/component/common/Tag/Tag';
import UserIcon from '@assets/images/common/user.svg';

export default function DeatilContainer() {
  return (
    <DetailContainerStyle>
      <ProjectDetailHeader>
        <Title>모바일 채팅 앱 만들기 프로젝트</Title>
        <Author imgSrc={UserIcon} name={'석지웅'}></Author>
        <Tags>
          <Tag type="large" bgColor="white">
            서울 / 오프라인
          </Tag>
          <Tag type="large" bgColor="white">
            웹 개발
          </Tag>
          <Tag type="large" bgColor="white">
            짧은 기간 프로젝트
          </Tag>
        </Tags>
      </ProjectDetailHeader>
      <TumbnailSection>
        <ProjectDetailThumbnail src="#"></ProjectDetailThumbnail>
        <Caption>
          <Tags>
            <Tag type="small" bgColor="green">
              건강 / 운동
            </Tag>
            <Tag type="small" bgColor="green">
              App
            </Tag>
          </Tags>
          <SimpleDesc>서울 활동 / 대면, 비대면 혼합 방식</SimpleDesc>
        </Caption>
      </TumbnailSection>
      <Hr />
      <div>프로젝트 상세 설명</div>
    </DetailContainerStyle>
  );
}
