import * as React from "react";
import {
  FooterDeveloperInfo,
  FooterContainer,
  FooterPolicy,
  FooterLogo,
  FooterContent,
} from "./Footer.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <CommonCenterWrapper>
        <FooterLogo src="/assets/images/common/logo.svg" alt="header logo" />
        <FooterDeveloperInfo>
          <div>
            <FooterContent>개발자 전화번호: 010-9019-2172</FooterContent>
            <FooterContent>이메일 : godboy4256@gmail.com</FooterContent>
            <FooterContent>
              Copyright (c) 석지웅 2022. All rights reserved.
            </FooterContent>
          </div>
          <div>
            <FooterPolicy>개인정보 처리방침</FooterPolicy>
            <FooterPolicy>이용약관</FooterPolicy>
          </div>
        </FooterDeveloperInfo>
      </CommonCenterWrapper>
    </FooterContainer>
  );
};

export default Footer;
