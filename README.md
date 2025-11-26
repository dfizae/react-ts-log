# 🚀 React + TypeScript 공부, 커리큘럼 gitlog

React + TypeScript 학습 기록 프로젝트입니다.  
각 장별로 주요 개념(Props, State, Event Bubbling 등)을 컴포넌트 예제로 정리하였습니다.

---

## 📚 참고 문헌 / 출처
- 김기수, 『코딩 자율학습 리액트 프런트엔드 개발 입문』, 길벗, 2025.

---

## 📖 챕터 목록, 공부 기간 기록

|챕터|제목|업로드 날짜|
|:---|:---:|:---|
|1장|React 기본|2025-10-10|
|2장|JSX 컴포넌트|2025-10-12|
|3장|props객체, 이벤트 - 1|2025-10-13|
|4장|props객체, 이벤트 - 2|2025-10-21|
|5장|컴포넌트의 상태(useState 훅)|2025-10-29|
|6장|컴포넌트의 상태(useReducer 훅/state 활용)|2025-11-23|
|7장|컴포넌트 스타일링(다양한 Css 활용)|2025-11-25|

---

## 📁 폴더 구조

```
REACT-TS-LOG/
├── node_modules/
│   │   ├── .../
├── public/
│   │   ├── .../
├── src/
│   ├── components/
│   │   ├── ch2/: 2장 컴포넌트 모음 폴더
│   │   ├── ch3/: 3장 컴포넌트 모음 폴더
│   │   ├── ch4/: 4장 컴포넌트 모음 폴더
│   │   ├── ch5/: 5장 컴포넌트 모음 폴더
│   │   ├── ch6/: 6장 컴포넌트 모음 폴더
│   │   └── ch7/: 7장 컴포넌트 모음 폴더
│   │
│   ├── types/
│   │   └── props.d.ts : 3장 인터페이스 파일 분리
│   │
│   └── reducer/ # 6장 reducer 훅 파일 모음 폴더
│   │   └── ... 
│   ├── App.css
│   ├── App.tsx : 리액트 애플리케이션의 시작점
│   ├── index.css 
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🧠 학습 기록 저장소

### 🪶 네이버 블로그 (이전 기록)
- [React + TS 1장](https://blog.naver.com/gaza1268/224036211559)
- [React + TS 2장](https://blog.naver.com/gaza1268/224038715178)
- [React + TS 3장](https://blog.naver.com/gaza1268/224039935416)
- [React + TS 4장](https://blog.naver.com/gaza1268/224048117745)

### 📘 Velog (현재 기록)
- [React + TS 5장 : 컴포넌트의 상태(useState 훅)](https://velog.io/@dfizae/ReactTS-5.-컴포넌트의-상태)
- [React + TS 6장 : 컴포넌트의 상태(useReducer 훅 + state 활용)](https://velog.io/@dfizae/ReactTS-6.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%83%81%ED%83%9C-useReducer-%ED%9B%85)
- [React + TS 7장 : 컴포넌트 스타일링(다양한 Css 활용)](https://velog.io/@dfizae/React-TS-7장-컴포넌트-스타일링다양한-CSS-활용)

---

> ✨ **Note:**  
> 이 프로젝트는 React + TypeScript 학습과정의 기록용 저장소로,  
> 각 장별 실습 코드를 통해 핵심 개념을 복습하고, 이해한 내용을 블로그/Velog에 정리하는 것을 목표로 합니다.
