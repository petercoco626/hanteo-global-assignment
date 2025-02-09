import clsx from 'clsx';

// @NOTE : 한터뉴스에 있는 footer를 가져와 내용을 표시함.
export function Footer() {
  return (
    <footer
      className={clsx(
        'w-full h-[100px] bg-gray-500 overflow-y-scroll',
        'px-[18px] py-4',
        'space-y-4'
      )}
    >
      <section className="text-xs text-gray-100">
        <div>제호 : 한터뉴스(HANTEO NEWS) | 발행처 : (주)한터글로벌</div>
        <div>인터넷 신문 등록번호 : 서울 아 52122</div>
        <div>
          인터넷 신문 등록일 : 2019년 01월 29일 | 발행일자 : 2019년 04월 01일
        </div>
        <div>
          발행인 : 곽영호 | 편집인 : 최현정 | 청소년 보호 책임자 : 최현정
        </div>
        <div>
          주소 : 서울특별시 강남구 봉은사로109길 4(삼성동, 베페하우스), 2층
        </div>
        <div>대표전화 : 02.449.2347 | 팩스 : 02.449.2256</div>
        <div>사업자등록번호 : 715-86-01143</div>
        <div>광고/제휴 문의 : news.cs@hanteo.com</div>
        <div>기자 등록 및 기사제보 : news@hanteo.com</div>
      </section>
      <section className="text-sm text-gray-100 space-y-2">
        <p>
          한터뉴스(HANTEO NEWS)의 모든 콘텐트(기사)는 저작권법의 보호를 받은 바,
          무단 전재, 복사, 배포 등을 금합니다.
        </p>
        <p>Copyright ⓒ 2022 HANTEO GLOBAL, Inc. All Rights Reserved</p>
      </section>
    </footer>
  );
}
