# OpenCloset App

Expo / React Native 기반 모바일 앱입니다. 앱 화면은 웹뷰로 `EXPO_PUBLIC_WEB_URL`에 설정한 주소를 불러옵니다.

## 요구 사항

- Node.js (LTS 권장)
- npm
- iOS 시뮬레이터: macOS + Xcode
- Android 에뮬레이터: Android Studio
- 실기기: Expo Go 앱 (iOS / Android)

## 설치

```bash
npm install
```

> 패키지를 추가할 때는 `npm install` 대신 `npx expo install <패키지명>`을 사용하세요. Expo SDK에 맞는 버전을 설치합니다.

## 환경변수 설정

1. `.env.example`을 복사해 `.env` 파일을 만듭니다.

   ```bash
   cp .env.example .env
   ```

2. `.env`에서 `EXPO_PUBLIC_WEB_URL`에 불러올 웹 주소를 입력합니다.

   ```bash
   EXPO_PUBLIC_WEB_URL=https://example.com
   ```

- 변수 이름에는 반드시 `EXPO_PUBLIC_` 접두사가 필요합니다. 접두사가 없으면 앱에서 값을 읽을 수 없습니다.
- 이 값은 앱 번들에 그대로 포함되므로 비밀 값(API 키 등)은 넣지 마세요.
- 값이 없으면 앱에 "EXPO_PUBLIC_WEB_URL 환경변수가 설정되지 않았습니다." 안내 문구가 출력됩니다.

## 실행

```bash
npx expo start -c
```

`-c` 옵션은 캐시를 지우고 시작합니다. `.env`를 수정한 뒤에는 이 옵션으로 다시 실행하세요.

시작 후 터미널에서 다음 키를 사용할 수 있습니다.

- `i`: iOS 시뮬레이터 실행
- `a`: Android 에뮬레이터 실행
- 그 외: QR 코드를 Expo Go 앱으로 스캔해서 실기기에서 실행

플랫폼별로 바로 실행하려면 다음 명령을 사용하세요.

```bash
npm run ios
npm run android
npm run web
```

## 자주 쓰는 명령어

| 명령어 | 설명 |
| --- | --- |
| `npx expo start -c` | 캐시를 지우고 개발 서버 실행 |
| `npx tsc --noEmit` | 타입 검사 |
| `npx expo-doctor` | 의존성과 설정 점검 |
| `npx expo install --fix` | SDK에 맞지 않는 패키지 버전 수정 |

## 문제 해결

- **안내 문구가 계속 보일 때**: `.env` 파일 위치가 프로젝트 루트인지, 변수 이름에 `EXPO_PUBLIC_`이 있는지 확인하고 `npx expo start -c`로 다시 실행하세요.
- **웹 페이지가 빈 화면일 때**: 주소 앞에 `https://`가 있는지, 해당 사이트가 모바일 웹뷰에서 열리는지 확인하세요.
- **패키지 버전 오류가 날 때**: `npx expo install --fix`를 실행하세요.
