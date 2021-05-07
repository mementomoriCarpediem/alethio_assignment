# 프로젝트 폴더 및 컴포넌트 구조

## 전체 구조

<img width="334" alt="스크린샷 2021-05-07 오전 10 38 02" src="https://user-images.githubusercontent.com/70994795/117385885-dc040f80-af20-11eb-9d20-12be22e97673.png">

> **components** : 전체 페이지에서 공통적으로 재사용 될 수 있는 컴포넌트 모음

> **hooks** : 전체 페이지에서 공통적으로 재사용 될 수 있는 custom hooks

> **Pages** : 개별 페이지별 컴포넌트s

> **store** : Redux store 관련 actions와 reducer 모음

> **style** : 최상위 컴포넌트에서 전체 컴포넌트에 적용시키거나 선택적으로 접근하여 사용할 수 있는 styling 변수 모음

> **config.js** : 프로젝트 파일에서 공통적으로 적용되는 상수s

> **Route.js** : index.js의 ReactDOM.Render()의 첫번째 인자로 들어가는 라우팅 컴포넌트

## components 폴더

<img width="274" alt="스크린샷 2021-05-07 오전 10 38 42" src="https://user-images.githubusercontent.com/70994795/117385915-ede5b280-af20-11eb-8f68-317e9bb4a5aa.png">

> **Header**: 페이지 상단 헤더 관련 컴포넌트('Header.js'), 하위 컴포넌트('Menus.js') 및 데이터('headerMenusData.js)

> **Button.js, Input.js, Logo.js**: 재사용되는 작은 컴포넌트 유닛

> **LoadingIndicator.js**: 데이터 로딩으로 인한 delay 발생 시 사용자에게 보여주기 위한 화면 컴포넌트

## hooks & store 폴더

  <img width="323" alt="스크린샷 2021-05-07 오전 10 39 00" src="https://user-images.githubusercontent.com/70994795/117386020-1b326080-af21-11eb-985d-cb7066d76349.png">  
  
  ## Pages 폴더
<img width="304" alt="스크린샷 2021-05-07 오전 10 39 22" src="https://user-images.githubusercontent.com/70994795/117386001-12418f00-af21-11eb-9a30-e0341bfa602d.png">

> **Login** : 로그인 화면 관련 View, Model, Logic 파일

> **MyPage** : 마이페이지 관련 View, Logic 및 하위 컴포넌트 파일

> **MyPageDetail** : 마이페이지 상세 화면 관련 View 및 Logic

> **Service** : 서비스 화면 관련 View, Logic

> **SignUp** : 회원가입 화면 관련 View, Model, Logic 파일

# 페이지 별 최종 구현 내용

## 서비스 화면 (with 헤더)

  <img width="1300" alt="스크린샷 2021-05-07 오전 10 44 44" src="https://user-images.githubusercontent.com/70994795/117386259-9267f480-af21-11eb-85a8-082fa1ac71cb.png">
<img width="1271" alt="스크린샷 2021-05-07 오전 10 45 19" src="https://user-images.githubusercontent.com/70994795/117386265-972ca880-af21-11eb-927d-3189d7dd2d46.png">

## 회원가입 화면

  <img width="577" alt="스크린샷 2021-05-07 오전 10 44 54" src="https://user-images.githubusercontent.com/70994795/117386273-9b58c600-af21-11eb-8871-5508f181319e.png">

## 로그인 화면

  <img width="557" alt="스크린샷 2021-05-07 오전 10 45 01" src="https://user-images.githubusercontent.com/70994795/117386278-9d228980-af21-11eb-9afe-a5c31ce7f1a8.png">

## 마이페이지 화면

  <img width="695" alt="스크린샷 2021-05-07 오전 10 45 25" src="https://user-images.githubusercontent.com/70994795/117386283-a01d7a00-af21-11eb-9118-a3f1d6e903b8.png">

## 마이페이지(상세) 화면

<img width="794" alt="스크린샷 2021-05-07 오전 10 45 30" src="https://user-images.githubusercontent.com/70994795/117386287-a27fd400-af21-11eb-9247-35c8d1882663.png">

# 참고 사항

## Node Version : v15.13.0

## Libraries (package.json 내 'dependencies')

```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-responsive": "^8.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.2.3",
    "styled-reset": "^4.3.4",
    "web-vitals": "^1.0.1"
  },
```
