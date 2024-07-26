import {
  AgreeList,
  headers,
  internalPolicyData,
  relevantLawsData,
  reportData,
} from "./AgreeList";
import S from "./Agree.styles";
import { Item } from ".";

function AgreeTable({ name }) {
  const informationData = [
    {
      service: "공통",
      purpose: <Item text={AgreeList[1].table.first} />,
      time: "SNS 간편 회원가입 시",
      item: <Item text={AgreeList[1].table.second} />,
    },
    {
      service: "",
      purpose:
        "- 서비스 안내 및 서비스 이용 보조 활용(*단, 이 경우, 회원이 외부에 공개한 정보만을 이용합니다)- 서비스 이용 현황 및 통계 분석 활용",
      time: "프로필 정보 입력 시",
      item: "[선택] 프로필 사진, 사용자 이름(닉네임), 재학 대학, 게시 콘텐츠 수 및 콘텐츠 제목, 한줄 소개",
    },
    {
      service: "",
      purpose:
        "(공통) - 법령 혹은 약관에 반하여 타 회원 혹은 회사에 피해를 줄 수 있는 잘못된 행위 확인",
      time: "콘텐츠 게시 시",
      item: "[필수] 콘텐츠 제목, 프로필 사진, 사용자 이름(닉네임)",
    },
    {
      service: "",
      purpose: <Item text={AgreeList[1].table.third} />,
      time: "고객센터 문의 시",
      item: "[필수] 이메일 주소, 닉네임, 상담 내용",
    },
  ];
  return (
    <div>
      <table>
        <S.TableBody>
          <tr>
            {headers.map((header, index) => (
              <S.TableTD key={index}>{header}</S.TableTD>
            ))}
          </tr>
          {informationData.map((row, index) => (
            <tr key={index}>
              <S.TableTD>{row.service}</S.TableTD>
              <S.TableTD>{row.purpose}</S.TableTD>
              <S.TableTD>{row.time}</S.TableTD>
              <S.TableTD>{row.item}</S.TableTD>
            </tr>
          ))}
        </S.TableBody>
      </table>
      <Item text={AgreeList[name].summary2} />
      <table>
        <S.TableBody>
          <tr>
            {headers.map((header, index) => (
              <S.TableTD key={index} three>
                {header}
              </S.TableTD>
            ))}
          </tr>
          {internalPolicyData.map((row, index) => (
            <tr key={index}>
              <S.TableTD three>{row.item}</S.TableTD>
              <S.TableTD three>{row.basis}</S.TableTD>
              <S.TableTD three>{row.period}</S.TableTD>
            </tr>
          ))}
        </S.TableBody>
      </table>
      관계 법령에 의한 사유
      <table>
        <S.TableBody>
          <tr>
            {headers.map((header, index) => (
              <S.TableTD key={index} three>
                {header}
              </S.TableTD>
            ))}
          </tr>
          {relevantLawsData.map((row, index) => (
            <tr key={index}>
              <S.TableTD three>{row.item}</S.TableTD>
              <S.TableTD three>{row.basis}</S.TableTD>
              <S.TableTD three>{row.period}</S.TableTD>
            </tr>
          ))}
        </S.TableBody>
      </table>
      <Item text={AgreeList[name].summary3} />
      <table>
        <S.TableBody>
          {reportData.map((item, index) => (
            <tr key={index}>
              <S.TableTD two>{item.title}</S.TableTD>
              <S.TableTD two>{item.info}</S.TableTD>
            </tr>
          ))}
        </S.TableBody>
      </table>
    </div>
  );
}

export default AgreeTable;
