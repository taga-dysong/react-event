import React from "react";
import { Input, Button, Radio } from "antd";
const Join = () => {
  return (
    <div>
      <div className="flex gap-2 flex-col">
        <Input placeholder="아이디 입력" />
        <Input.Password placeholder="비밀번호 입력" />
        <Input.Password placeholder="비밀번호 재확인" />
        <Input type="tel" placeholder="이메일 입력" />
      </div>
      <div className="w-full h-px bg-zinc-200 my-[20px]"></div>
      <div className="flex gap-2 flex-col">
        <Input type="tel" placeholder="이름" />
        <Input type="tel" placeholder="생년월일 8자리" />
        <Input type="tel" placeholder="휴대전회번호('-' 제외하고 입력)" />
        <Radio.Group
          buttonStyle="solid"
          className="w-full grid grid-cols-3 text-center"
        >
          <Radio.Button value="large">남자</Radio.Button>
          <Radio.Button value="middle">여자</Radio.Button>
          <Radio.Button value="small">선택안함</Radio.Button>
        </Radio.Group>
      </div>
      <Button type="primary" block disabled className="mt-8">
        인증 요청
      </Button>
    </div>
  );
};

export default Join;
