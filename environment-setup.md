## 1) System Specs

- OS & build: \*\*Windows 11 Pro 23H2
- CPU / RAM: **Intel Core i9-13900KF / 32 GB**
- Free storage: **1TB**

## 2) Versions

- Node: `v22.19.0`
- npm: `10.9.3`
- android-studio-2025.1.3.7-windows
- VSCodeUserSetup-x64-1.104.0

## 3) Steps I Followed

Installed Node.js (LTS) → confirmed `node`, `npm`, `npx`.
Installed Android Studio.
SDK Manager: installed **Android 13 (API 33)** + **Platform-Tools** + **Emulator**.
Created AVD (API 33) and launched it.
Set env vars:
In project: `npm install`, then

- `npx react-native start --reset-cache`
- `npx react-native run-android`

## 4) Deviations (if any)

- Added `@react-native-community/cli` when prompted.
- Converted `App.tsx` → `App.js` (optional).

## 5) Time Taken

- Node install: **5 min**
- Android Studio + SDKs: **10 min**
- Env vars (PATH/JAVA_HOME): **5 min**
- First build/run: **10 min**
- Troubleshooting: **250 min**
  **Total:** **280 min**
